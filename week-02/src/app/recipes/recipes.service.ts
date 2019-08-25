import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://cdn.idntimes.com/content-images/community/2018/04/big-slider-gado-gado-enak-dan-lezat-d15989179c334422677c80293a7b51c0_600x400.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://www.maggi.com.my/sites/default/files/ketupat-a.jpg',
      ingredients: ['Beras', 'Garam', 'Penyedap']
    },
    {
      id: 'r3',
      title: 'Pizza Margherita',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg',
      ingredients: ['Adonan pizza', 'Keju mozzarella', 'Minyak zaitun', 'Saus tomat', 'Lada dan garam', 'Kemangi']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return [this.recipes];
  }
}
