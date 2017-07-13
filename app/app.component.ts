import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
   <div class="row">
     <h2>Meal Tracker App</h2>
   </div>
   <button (click)="toggleForm()">ENTER FOOD LOG</button>
   <div *ngIf="showFORM">

   <food-list (clickSender)="addName($event)">
   </food-list>
   </div>

    <div class="row">
     <div>
     <h3>Food Menu</h3>
     <edit-food [foods]="meals"></edit-food>

    </div>
     </div>
     </div>

 `
})

export class AppComponent {
  public meals: Food[] = [];
  showFORM = false;


 addName(newMealFromChild:Food) {
    this.meals.push(newMealFromChild);
    console.log("piano")

 }
  toggleForm() {
    if (this.showFORM == false) {
      this.showFORM = true;
    }
    else { this.showFORM = false }
  }

}
