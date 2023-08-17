import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{
  @Input() name: string = 'Reinaldo'
  constructor(){}
  ngOnInit(): void {
    this.name = `Ola ${this.name}`
  }
  OnChanges(): void {
    this.name = `Primeiro Onckangee ${this.name}`
  };

}
