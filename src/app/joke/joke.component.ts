import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { routerTransition } from 'app/animations/inout.animation';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class JokeComponent implements OnInit {

  public joke = { content: 'Ceci est une blague par défault. Les gens ne doivent surtout pas l\'entendre !' };
  public session: any;

  constructor(private http: Http) { }

  ngOnInit() {
    QiSession(session => {
      console.log('connected!');
      this.session = session;
    }, function () {
      console.log('disconnected');
    });

    this.http.get('http://raspberrypi.local/jokes/1')
      .subscribe(
        joke => this.onJokeReceived,
        error => console.log(error.message),
        () => console.log('Completed')
      );
  }

  onJokeReceived(joke: any) {
    if (!joke) { return; }
    this.joke = joke;

    if (this.session) {
      this.session.service('ALTextToSpeech').then(
        tts => { tts.say(this.joke['content']); console.log(this.joke['content']); },
        error => console.log(error)
      );
    } else { console.log('Session not available'); }
  }

  onJokeTold() {

  }

}
