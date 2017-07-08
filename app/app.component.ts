import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container-fluid">

    <h1>Meal Tracker App</h1>
  <div class="col-md-6">
  <div class="menuForm" *ngFor="let meal of meals">

    <h3> {{ meal.name }}</h3>
    <button (click)="showDetails(meal)">Submit</button>
  </div>
  </div>

    <div class="col-md-6">
    <div *ngIf="selectedFood" class="col-md-6">
      <h1>Edit Form</h1>
      <div>
      <label>Enter Food Name:</label>
      <input [(ngModel)]="selectedFood.name">
    </div>
    <div>
      <label>Enter Food Details:</label>
      <input [(ngModel)]="selectedFood.details">
    </div>
    <div>
    <label>Enter Food Name:</label>
    <input [(ngModel)]="selectedFood.calories">
    <button (click)="doneEditing()">Done</button>
     </div>
    </div>
  </div>
  </div>
  `
})

export class AppComponent {
  public meals: Food[] = [
    new Food("Pilau","served hot with kachumbari",220),
    new Food("Spaghetti","cooked with meatballs",370),
    new Food("Chapati","soft chapatis",100),
    new Food("Ugali","real energy-giving food",180),
    new Food("Hamburger","extra cheese on the burger",400)
  ];
  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  doneEditing() {
   this.selectedFood = null;
 }
}

export class Food{
  public done: boolean = false;
  constructor(public name:string, public details:string, public calories:number){ }
}
