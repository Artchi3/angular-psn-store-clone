import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.scss'
})
export class CardPricingComponent {
  @Input()
  gameType:string = 'Digital PS4'
  @Input()
  gamePrice:string = 'R$399,00'
  constructor(){
    
  }
  ngOnInit():void{

  }

}
