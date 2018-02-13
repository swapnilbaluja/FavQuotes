import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

import{Quote} from "../../data/quote.interface";
@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewctrl:ViewController) {
  }
  onclose(remove = false){
  	this.viewctrl.dismiss(remove);

  }
  
receivedata:Quote;
  ionViewDidLoad() {
    this.receivedata=this.navParams.data;

  }

}
