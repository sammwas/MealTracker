import { Component,Output,EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
   <h3>FOOD Menu</h3>

  <form>
   <div class="form-group">
    <label>Name:</label>
     <input type="text"  size="40" placeholder="name of food eaten"  #mealname/><br>
     </div>
     <div class="form-group">
     <label>Details:</label>
     <input type="text"  size="40" placeholder="description of food eaten" #mealdet/><br>
     </div>
     <div class="form-group">
     <label>Calories:</label>
     <input type="text"  size="40" placeholder=" calories in the food" #mealcal/><br>
     </div>
     <button (click)="mealMethod(mealname.value,mealdet.value,mealcal.value);mealname.value='';mealdet.value='';mealcal.value=''">SUBMIT</button>
 </form>

  `
})

export class FoodListComponent {

 @Output() clickSender=new EventEmitter();
 mealMethod(name:string,details:string,calories:number) {
   var newMealToAdd:Food =new Food(name,details,calories)
  this.clickSender.emit(newMealToAdd);
}
}
