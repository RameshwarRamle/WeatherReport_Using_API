import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allPipes'
})
export class AllPipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
