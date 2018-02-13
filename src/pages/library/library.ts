import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import q from "../../data/quotes";
import {Quote} from "../../data/quote.interface";
import {QuotesPage} from '../quotes/quotes';
@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  quoteCollection:{category:string,quotes:Quote[],icon:string}[];

  ngOnInit(){
  	this.quoteCollection=q;
  }
  selectedquote:{category:string,quotes:Quote,icon:string};
  go(selectedquote)
  {
  	this.navCtrl.push(QuotesPage,selectedquote);
  }

}
