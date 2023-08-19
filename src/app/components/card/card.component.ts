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
  gameLabel:String="Exclusivo"
  @Input()
  gameTipo:string = "Digital PS5"
  @Input()
  gamePreco:string = "R$ 348,98"

  constructor() { }

  ngOnInit(): void {
    
  }

}
