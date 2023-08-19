import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gameCover:string = ""
  @Input()
  gameLabel:String=""
  @Input()
  gameTipo:string = ""
  @Input()
  gamePreco:string = ""

  constructor() { }

  ngOnInit(): void {
    
  }
}
