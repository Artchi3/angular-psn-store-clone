import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricingComponent } from "./card-pricing/card-pricing.component";

@Component({
  selector: 'app-card',
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent{

  @Input()
  gameCover:string =''
  @Input()
  gameLabel:string =''
  @Input()
  gamePrice:string =''
  @Input()
  gameType:string =''
  constructor(){}
  ngOnInit():void{

  }
}
