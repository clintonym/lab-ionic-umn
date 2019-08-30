import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activatedRouter: ActivatedRoute,
    private recipesSvc: RecipesService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
    ) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('recipeId')) {return;}
        this.loadedRecipe = this.recipesSvc.getRecipe(paramMap.get('recipeId'));
      }
    )
  }

  async deleteRecipe(){
    const alert = await this.alertController.create({
      header: 'Delete Recipe',
      message: 'Are you sure want to delete this recipe?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.recipesSvc.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
            this.toastRecipe();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }
  async toastRecipe(){
    const toast = await this.toastController.create({
      message: 'Recipes has been deleted.',
      position: 'bottom',
      duration: 2000
    });
    await toast.present();
  }

}
