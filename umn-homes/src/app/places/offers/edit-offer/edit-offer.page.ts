import { Component, OnInit, OnDestroy } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
// import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {

  place: Place;
  form: FormGroup;
  private placesSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      // this.place = this.placesService.getPlace(paramMap.get('placeId'));
      this.placesSub = this.placesService.getPlace(paramMap.get('placeId')).subscribe(place => {
        this.place = place;
      })
      this.form = new FormGroup({
        title: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(180)]
        })
      });
    });
  }

  onEditOffer() {
    console.log(this.form);
  }

  ngOnDestroy() {
    if(this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }
}
