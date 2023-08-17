import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  Input,
  OnChanges,
  SimpleChanges

} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements
  OnInit, DoCheck, AfterContentChecked, AfterContentInit, OnChanges {
[x: string]: any;

    num:string = 'add'
    num1:string = 'desc'
    res:string = 'reset'
    mudar:string = ''
    checkMudate:string = 'check'

    quantity: number = 0;

  constructor() {
    console.log('Eu sou o constructor.');
    
   }

   checkClass(target: any): void {
    const { value } = target;
    if (value === '1'){
      this.checkMudate = 'check';
      this.mudar = 'Uau!!!'
    }
    if (value === '2') {
      this.checkMudate = 'noCheck'
      this.mudar = 'Mudei a classe agora para red!'
    }
   }

   mudate(target:any): void {
    const { value } = target;
    let alterar = '';
    alterar += value;
    this.mudar = alterar;
   }
  ngOnChanges(): void {
    this.mudar = this.mudar;
    this.checkMudate = this.checkMudate;
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
