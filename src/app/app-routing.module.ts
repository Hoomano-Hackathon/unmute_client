import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AskComponent } from './ask/ask.component';
import { JokeComponent } from './joke/joke.component';

const appRoutes: Routes = [
  { path: '', component: AskComponent },
  { path: 'joke', component: JokeComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}