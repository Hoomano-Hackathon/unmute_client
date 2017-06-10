import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { PopupComponent } from './popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public session: any;

  constructor(public dialog: MdDialog) {}

  ngOnInit(): void {
    QiSession(session => {
      console.log('connected!');
      this.session = session;
    }, function () {
      console.log('disconnected');
    });
  }

  onYesClicked() {
    if (this.session) {
      this.session.service('ALTextToSpeech').then(
        tts => { tts.say('Voici ma blague'); console.log('Say: Voici a blague')},
        error => console.log(error)
      );
    } else { console.log('Session not connected'); }
  }

  onNoClicked() {
    if (this.session) {
      this.session.service('ALTextToSpeech').then(
        tts => { tts.say('Oh, quel dommage'); console.log('Say: Oh, quel dommage')},
        error => console.log(error)
      );
    } else { console.log('Session not connected'); }
  }

}
