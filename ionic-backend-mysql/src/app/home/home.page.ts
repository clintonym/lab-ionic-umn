import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Booking } from './booking.interface';
import { NewBookingPage } from './new-booking/new-booking.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private bookings: Booking[] = [];

  constructor(
    private bookingSrvc: BookingsService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    
  }
  
  getBookings() {
    this.bookingSrvc.fetchBookings().subscribe((bookings) => {
      console.log(bookings);
    })
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Delete a booking',
      inputs: [
        {
          name: 'bookingId',
          type: 'text',
          placeholder: 'Enter your booking ID'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.bookingSrvc.deleteBooking(data.bookingId).subscribe(() => {
              this.bookingSrvc.fetchBookings().subscribe((bookings) => {
                console.log(bookings);
              });
              console.log("DELETED");
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: NewBookingPage
    });
    return await modal.present();
  }

  newBooking() {
    this.presentModal();
  }

  deleteBooking() {
    this.presentAlertPrompt();
  }

}
