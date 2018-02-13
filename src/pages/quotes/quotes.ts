import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{Quote} from "../../data/quote.interface";
import{ AlertController} from "ionic-angular";
import{QuotesService} from '../../service/quotes';
@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private quoteservice:QuotesService) {
  }
  groupQuote:{category:string,quotes:Quote[],icon:string};

  ngOnInit(){
  	this.groupQuote=this.navParams.data;
  }

call(selected:Quote){
let alert=this.alertCtrl.create({
	title:'You Want to add this Quote?',
	subTitle:'Are You Sure You Want To Add This Quote?',
	buttons:[
{
	text:'Yes,Sure Go Ahead',
	handler:()=>{
		this.quoteservice.addQuoteToFavorites(selected);
	}
},
{
	text:'Opps , Soory',
	handler:()=>{
		console.log('No!');
	}
}
	
	]

});
	alert.present();
}
uncall(t1:Quote){
this.quoteservice.removeQuoteFromFavorities(t1);
	
}
isFav(cq:Quote){
	return this.quoteservice.isFavorite(cq);
}
}
