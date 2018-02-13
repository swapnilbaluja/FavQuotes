import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
import{QuotesService} from "../../service/quotes";
import{Quote} from "../../data/quote.interface";
import{QuotePage} from "../quote/quote";
import{SettingService} from "../../service/setting";
@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
quote:Quote[];
Quotes:Quote[];
  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  private quoteservice:QuotesService,
  private modalctrl:ModalController,
  private setting:SettingService

  ) {
  }
  
  viewquote(quotes:Quote)
  {
  	let modal=this.modalctrl.create(QuotePage,quotes);
  	modal.present();
  	modal.onDidDismiss((remove:boolean)=>{
  	if(remove){
  		this.ondel(quotes);
			}
  	});
  }
  ionViewWillEnter(){
	
  	this.quote=this.quoteservice.getFavoritieQuote();
  }
ondel(t1:Quote){
this.quoteservice.removeQuoteFromFavorities(t1);
  		
  		const position=this.quote.findIndex(
		(
		quoteelemenet:Quote
		)=>
			{
		      		return quoteelemenet.id == t1.id;
			}
		);
			this.quote.splice(position,1);
	
}
getbac(){
return this.setting.isAltBackground()? 'altbc':'my';
  
}

  }

