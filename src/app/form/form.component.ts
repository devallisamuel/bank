import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Details } from '../details';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 forms: Details[];
cardForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.cardForm = new FormGroup ({
      'cardNumber': new FormControl(null, Validators.required),
      'cardHolder': new FormControl(null, Validators.required),
      'date': new FormControl(null),
      'ccv': new FormControl(null, Validators.maxLength(3)),
      'amount': new FormControl(null, [Validators.minLength(1), Validators.required]),
    });
  }
onSubmit ():void {
  this.forms = this.cardForm.value;
  console.log(this.forms);
}

}
