import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h2>Meal Tracker</h2>
    <h3>Breakfast</h3>



    <form>

      <label>Name:</label>
      <input type="text"  #breakfastname/>
      <label>Details:</label>
      <input type="text" #breakfastdet/>
      <label>Calories:</label>
      <input type="text" #breakfastcal/>
      <button (click)='addName(breakfastname.value,breakfastdet.value,breakfastcal.value)'>submit</button>

   </form>

    <hr/>

    <h3>Lunch</h3>
      <div>
      <form>
        <label>Name:</label>
        <input type="text" #lunchname>
        <label>Details:</label>
        <input type="text" #lunchdet>
        <label>Calories:</label>
        <input type="text" #lunchcalc>
        <button (click)='addLunch(lunchname.value,lunchdet.value,lunchcalc.value)'>submit</button>
        </form>
      </div>
    <hr/>

    <h3>Diner</h3>
      <div>
      <form>
        <label>Name:</label>
        <input type="text" #dinername>
        <label>Details:</label>
        <input type="text" #dinerdet>
        <label>Calories:</label>
        <input type="text" #dinnercalc>
        <button (click)='addDinner(dinername.value,dinerdet.value,dinnercalc.value)'>submit</button>
        </form>
    </div>

    <div>
    <h3>Breakfast</h3>
     <ul *ngFor='let meal of breakfast'>
       <li>{{meal.name}}</li>
       <li>{{meal.details}}</li>
       <li>{{meal.calories}}</li>
     </ul>
     <h3>Lunch</h3>
        <ul *ngFor='let meal2 of lunch'>
          <li>{{meal2.name}}</li>
          <li>{{meal2.details}}</li>
          <li>{{meal2.calories}}</li>
        </ul>
      <h3>Diner</h3>
       <ul *ngFor='let meal3 of diner'>
         <li>{{meal3.name}}</li>
         <li>{{meal3.details}}</li>
         <li>{{meal3.calories}}</li>
       </ul>
    <div>

  `
})

export class AppComponent {
public breakfast: Food[]=[];
public lunch: Food[]=[];
public diner: Food[]=[];

addName(breakfastname,breakfastdet,breakfastcal){
  var newFoodItem=new Food(breakfastname,breakfastdet,breakfastcal)
  this.breakfast.push(newFoodItem);
  console.log("yes")

}
addLunch(lunchname,lunchdet,lunchcalc){
  var newLunch =new Food(lunchname,lunchdet,lunchcalc)
  this.lunch.push(newLunch);
  console.log('lunch')
}
addDinner(dinername,dinerdet,dinnercalc){
  var newDinner=new Food(dinername,dinerdet,dinnercalc)
  this.diner.push(newDinner);
  console.log('dinner')

}


}

export class Food{
  constructor(public name:string, public details:string, public calories:number){ }
}
