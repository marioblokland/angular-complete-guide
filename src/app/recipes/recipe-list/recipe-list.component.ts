import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'A tasty Pizza', 'https://recipes.timesofindia.com/photo/53110049.cms?imgsize=148092'),
    new Recipe('Sushi', 'Some tasty Sushi', 'https://recipes.timesofindia.com/thumb/msid-52806533,width-400,resizemode-4/52806533.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
