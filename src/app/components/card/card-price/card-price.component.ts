import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {
  @Input()
  gameTipo:string = "Digital PS5"
  @Input()
  gamePreco:string = "R$ 348,98"
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
