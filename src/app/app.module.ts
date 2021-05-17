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

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
