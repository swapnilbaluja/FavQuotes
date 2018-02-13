import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoritePage } from '../pages/favorite/favorite';
import { LibraryPage } from '../pages/library/library';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotesService} from '../service/quotes';
import { SettingService} from '../service/setting';
import { QuotePage } from '../pages/quote/quote';
import{ SettingPage} from '../pages/setting/setting';

@NgModule({
  declarations: [
    MyApp,
    FavoritePage,TabsPage,LibraryPage,QuotesPage,QuotePage,SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritePage,TabsPage,LibraryPage,QuotesPage,QuotePage,SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},QuotesService,SettingService
  ]
})
export class AppModule {}
