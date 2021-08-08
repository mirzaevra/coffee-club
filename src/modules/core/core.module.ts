import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {MenuCatalogComponent} from './components/menu-catalog/menu-catalog.component';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MainMenuComponent,
    MenuCatalogComponent,
    ContentComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MainMenuComponent,
    MenuCatalogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
