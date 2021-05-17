import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './alert-assignment/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alert-assignment/success-alert/success-alert.component';
import { BasicHighlightDirective } from './directive-deep-dive-assignment/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive-deep-dive-assignment/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directive-deep-dive-assignment/unless.directive';
import { GameControlComponent } from './first-game-data-binding/game-control/game-control.component';
import { EvenComponent } from './first-game-data-binding/even/even.component';
import { OddComponent } from './first-game-data-binding/odd/odd.component';
import { ActiveUsersComponent } from './services-assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './services-assignment/inactive-users/inactive-users.component';
import { CounterService } from './services-assignment/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    EvenComponent,
    OddComponent,
    GameControlComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
