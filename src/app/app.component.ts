import { Component } from '@angular/core';
import { UserService } from './services-assignment/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //styles: [`
    //h3 {
      //color: dodgerblue;//
  providers: [UserService]

})

export class AppComponent {
  name = 'Jana';
  username = '';
  showSecret = false;
  log = [];
  //numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;

onToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    //this.log.push(new Date());
    //I tried to use this.log.push(new Date()); but there was an error of parameter set to never.
  }
  odd1Numbers: number [] = [];
  even1Numbers: number [] = [];

  onIntervalFired(firedNumber: number){
    if (firedNumber % 2 === 0){
      this.even1Numbers.push(firedNumber);
    } else {
      this.odd1Numbers.push(firedNumber);


      }
}


}
