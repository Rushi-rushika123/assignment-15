import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse', 
})
export class PipesPipe implements PipeTransform {
  value:string=''
  transform(value: any, ...args:any): any{
    this.value = value.split('').reverse().join('');
    return this.value;
  }

}
