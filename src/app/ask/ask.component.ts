import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../animations/inout.animation';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AskComponent implements OnInit {


  public session: any;
  public question: 'Veux tu que je te raconte une blague ?';


  constructor(
    public router: Router
  ) {}

  ngOnInit(): void {
    QiSession(session => {
      console.log('connected!');
      this.session = session;
      this.session.service('ALTextToSpeech').then(
        tts => { tts.say(this.question); this.onQuestionAsked(); },
        error => console.log(error)
      );
    }, function () {
      console.log('disconnected');
    });
  }

  onQuestionAsked() {
    if (!this.session) { console.log('Session not available'); return; }

    this.session.service('ALMemory').then(ALMemory => {
      ALMemory.subscriber('WordRecognized').then(subscriber => {
        subscriber.signal.connect(state => {
          console.log(state === 1 ? this.onYesClicked() : this.onNoClicked());
        });
      });
    });

    this.session.service('ALSpeechRecognition').then(
      sr => sr.setVocabulary(['oui', 'non'], true),
      error => console.log(error)
    );
  }

  onYesClicked() {
    if (this.session) {
      this.session.service('ALTextToSpeech').then(
        tts => { tts.say('Voici ma blague'); console.log('Say: Voici a blague'); },
        error => console.log(error)
      );
    } else { console.log('Session not available'); }
    this.router.navigate(['joke']);
  }

  onNoClicked() {
    if (this.session) {
      this.session.service('ALTextToSpeech').then(
        tts => { tts.say('Oh, quel dommage'); console.log('Say: Oh, quel dommage'); },
        error => console.log(error)
      );
    } else { console.log('Session not available'); }
  }


}
