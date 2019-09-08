import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
//import { Routes, RouterModule } from '@angular/router';
import { PlacesRoutingModule } from './places-routing.module';
import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: PlacesPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    IonicModule,
    //RouterModule.forChild(routes),
    PlacesRoutingModule
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}
