import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,

} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
  OnInit, DoCheck, AfterContentChecked, AfterContentInit {

    quantity: number = 0;

  constructor() {
    console.log('Eu sou o constructor.');
    
   }

   add(){
    this.quantity += 1;
   }

   desc(){
    this.quantity -= 1;
   }

   reset(){
    this.quantity = 0;
   }
  ngAfterContentChecked(): void {
    console.log('Method not implemented.');
  }
  ngAfterContentInit(): void {
    console.log('Method not implemented.');
  }
  ngDoCheck(): void {
    console.log('Method not implemented.');
  }
  ngOnInit(): void {
    console.log('Method not implemented.');
  }

}
