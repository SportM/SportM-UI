import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StuctureError} from '../../../utils/stucture-error';

export class ErrorMessages {
  dob: StuctureError[];
  weight: StuctureError[];
  size: StuctureError[];
  height: StuctureError[];
  category: StuctureError[];
  boatPreference: StuctureError[];
  side: StuctureError[];
  sex: StuctureError[];
  rcaNumber: StuctureError[];
  firstName: StuctureError[];
  lastName: StuctureError[];
}


@Component({
  selector: 'app-athletes-profile',
  templateUrl: './athletes-profile.component.html',
  styleUrls: ['./athletes-profile.component.css']
})

export class AthletesProfileComponent implements OnInit {

  public profileForm: FormGroup;
  public errorMessages: ErrorMessages;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      dob: new FormControl('', [Validators.required]),
      weight: new FormControl(''),
      size: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      boatPreference: new FormControl('', [Validators.required]),
      side: new FormControl('', [Validators.required]),
      sex: new FormControl('', [Validators.required]),
      rcaNumber: new FormControl('', [Validators.required]),
      membershipType: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    });
    this.errorMessages = {
      dob: [
        {type: 'required', message: 'The date of birth is required.'}
      ],
      weight: [
        {type: 'required', message: 'The weight is required.'}
      ],
      size: [
        {type: 'required', message: 'The size is required.'}
      ],
      height: [
        {type: 'required', message: 'The height is required.'}
      ],
      category: [
        {type: 'required', message: 'The weight category is required.'}
      ],
      boatPreference: [
        {type: 'required', message: 'The boat preference is required.'}
      ],
      side: [
        {type: 'required', message: 'The side preference is required.'}
      ],
      sex: [
        {type: 'required', message: 'The sex is required.'}
      ],
      rcaNumber: [
        {type: 'required', message: 'The RCA number is required.'}
      ],
      firstName: [
        {type: 'required', message: 'The firstname is required.'}
      ],
      lastName: [
        {type: 'required', message: 'The lastname is required.'}
      ]
    };

  }



}
