import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log({email})

    return of({
      emailTaken: true
    }).pipe(
      delay(2000)
    )
  }


  /*validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log({email})

    return of({
      emailTaken: true
    }).pipe(
      delay(2000)
    )
  }*/

}
