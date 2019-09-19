import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Schnitzel',
            // tslint:disable-next-line:max-line-length
            imageUrl: 'https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
            ingredients: ['French Fries', 'Pork Meat', 'Salad']
        },
        {
            id: 'r2',
            title: 'Spaghetti',
            // tslint:disable-next-line:max-line-length
            imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
            ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
        }
    ];

    constructor() {
    }

    getAllRecipes() {
        return [...this.recipes];
    }

    getRecipe(recipeId: string) {
        return {
            ...this.recipes.find(recipe => {
                return recipe.id === recipeId;
            })
        };
    }

    deleteRecipe(recipeId: string) {
        this.recipes = this.recipes.filter(recipe => {
            return recipe.id !== recipeId;
        });
    }

}
