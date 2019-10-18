import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;
  constructor( 
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
    ) { }
    
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    this.actionSheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });
  }

  openBookingModal(mode: 'select' | 'random') {
    console.log(mode);
    this.modalCtrl
    .create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place, selectedMode: mode }
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if(resultData.role === 'confirm') {
        console.log('BOOKED');
      }
    });
  }

  // async onBookPlace() {
  //   const actionSheet = await this.actionSheetCtrl.create({
  //     header: 'Book Place',
  //     buttons: [{
  //       text: 'Book with Random Date',
  //       handler: () => {
  //         this.modalCtrl
  //         .create({
  //           component: CreateBookingComponent,
  //           componentProps: { selectedPlace: this.place }
  //         })
  //         .then(modalEl => {
  //           modalEl.present();
  //           return modalEl.onDidDismiss();
  //         })
  //         .then(resultData => {
  //           console.log(resultData.data, resultData.role);
  //           if(resultData.role === 'confirm') {
  //             console.log('BOOKED');
  //           }
  //         });
  //       }
  //     },
  //     {
  //       text: 'Cancel',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //     }
  //     }]
  //   });
  //   await actionSheet.present();
  // }
  
  goBack() {
    // this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/discover');
  }

}
