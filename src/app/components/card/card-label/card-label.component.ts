import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css']
})
export class CardLabelComponent implements OnInit {
  //O Input e a gameLabel são para deixar o componente dinâmico e virar um parâmetro lá na Tag HTML.
  @Input()
  gameLabel:String=""

  constructor() { }

  ngOnInit(): void {
    
  }

}
