import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarouselComponent} from './carousel/carousel.component';
import {TabsComponent} from './tabs/tabs.component';
import {ModalComponent} from './modal/modal.component';

const routes: Routes = [
  { path: '', component: CarouselComponent},
  { path: 'tabs', component: TabsComponent},
  { path: 'modal', component: ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
