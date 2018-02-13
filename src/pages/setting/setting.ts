import { Component } from '@angular/core';
import { IonicPage, Toggle,NavController, NavParams } from 'ionic-angular';
import{SettingService} from "../../service/setting";

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private setting:SettingService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
ontmethod(toggle:Toggle)
{
this.setting.setBackGround(toggle.checked);
	
}
checkbc(){
	return this.setting.isAltBackground();
}
}
