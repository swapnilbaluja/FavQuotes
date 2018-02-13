import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { FavoritePage } from '../favorite/favorite';
import { LibraryPage } from '../library/library';
@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs>
<ion-tab [root]="fav" tabTitle="Favorites" tabIcon="star"></ion-tab>
<ion-tab [root]="lib" tabTitle="Library" tabIcon="book"></ion-tab>

</ion-tabs>`

})
export class TabsPage {
fav=FavoritePage;
lib=LibraryPage;
  
}
