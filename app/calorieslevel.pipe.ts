import {Pipe,PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe ({
  name:"calories",
  pure:false
})

export class CaloriesLevelPipe implements PipeTransform{
  transform
}
