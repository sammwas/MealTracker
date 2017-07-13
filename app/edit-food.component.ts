import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <ul *ngFor='let meal of foods'>
    <li>{{meal.name}}</li>
    <li>{{meal.details}}</li>
    <li>{{meal.calories}}</li>
  </ul>

  `
})

export class EditFoodComponent {
  @Input() foods: Food[] = [];
}
