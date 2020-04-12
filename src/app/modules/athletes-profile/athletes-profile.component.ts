import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StuctureError} from '../../../utils/stucture-error';
import {Athletes} from '../../domaines/athletes';
import {Auth} from 'aws-amplify';
import {AthleteTrainingService} from '../../services/athlete-training.service';
import {MarkAsTouch} from '../../../utils/mark-as-touch';

export class ErrorMessages {
  dob: StuctureError[];
  email: StuctureError[];
  height: StuctureError[];
  weightCategory: StuctureError[];
  boatPreference: StuctureError[];
  side: StuctureError[];
  sex: StuctureError[];
  firstName: StuctureError[];
  lastName: StuctureError[];
}


@Component({
  selector: 'app-athletes-profile',
  templateUrl: './athletes-profile.component.html',
  styleUrls: ['./athletes-profile.component.css']
})

export class AthletesProfileComponent extends MarkAsTouch implements OnInit {

  public profileForm: FormGroup;
  public errorMessages: ErrorMessages;
  public boats: [{ id: 1, name: 'single' }];
  public sides: [{ id: 1, name: 'port' }];
  public sex: [{ id: 1, name: 'M' }];
  public athlete: Athletes;


  constructor(private fb: FormBuilder, private service: AthleteTrainingService) {
    super();
  }

  ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.athlete.id = user.attributes.sub;
      this.athlete.firstName = user.attributes;
      this.athlete.lastName = user.username;
      this.athlete.membershipType = user.username;
      this.athlete.email = user.username;
      this.athlete.dob = user.username;
      this.athlete.weight = user.username;
      this.athlete.height = user.username;
      this.athlete.weightCategory = user.username;
      this.athlete.boatPreference = user.username;
      this.athlete.side = user.username;
      this.athlete.sex = user.username;
      this.athlete.athleteCategory = user.username;
    })
      .catch(err => console.log(err));
    this.profileForm = this.fb.group({
      dob: new FormControl(this.athlete.dob, [Validators.required]),
      email: new FormControl(this.athlete.email, [Validators.required]),
      weight: new FormControl(this.athlete.weight),
      height: new FormControl(this.athlete.height, [Validators.required]),
      weightCategory: new FormControl(this.athlete.weightCategory, [Validators.required]),
      boatPreference: new FormControl('', [Validators.required]),
      side: new FormControl(this.athlete.side, [Validators.required]),
      sex: new FormControl(this.athlete.sex, [Validators.required]),
      // rcaNumber: new FormControl(this, [Validators.required]),
      membershipType: new FormControl(this.athlete.membershipType, [Validators.required]),
      firstName: new FormControl(this.athlete.firstName, [Validators.required]),
      lastName: new FormControl(this.athlete.lastName, [Validators.required]),
    });
    this.errorMessages = {
      dob: [
        {type: 'required', message: 'The date of birth is required.'}
      ],
      email: [
        {type: 'required', message: 'The email is required.'}
      ],
      height: [
        {type: 'required', message: 'The height is required.'}
      ],
      weightCategory: [
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
      firstName: [
        {type: 'required', message: 'The firstname is required.'}
      ],
      lastName: [
        {type: 'required', message: 'The lastname is required.'}
      ]
    };
  }

  getAthlete() {

  }

  save() {
    if (this.profileForm.valid) {
      const a = this.profileForm.value;
      const e = new Athletes();
      e.id = this.athlete.id;
      e.firstName = a.firstName;
      e.lastName = a.lastName;
      e.membershipType = a.membershipType;
      e.email = a.email;
      e.dob = a.dob;
      e.weight = a.height;
      e.weightCategory = a.weightCategory;
      e.boatPreference = a.boatPreference;
      e.side = a.side;
      e.sex = a.sex;
      e.rcaNumber = a.rcaNumber;
      e.athleteCategory = a.athleteCategory;
      this.service.save(e);
    } else {
      this.markAsTouched(this.profileForm);
    }


  }


  // async updateProfile() {
  //   const user = {
  //     id: this.userId,
  //     username: this.user.firstName + '_' + this.user.lastName,
  //     firstName: this.user.firstName,
  //     lastName: this.user.lastName,
  //     bio: this.user.aboutMe
  //   }
  //   await this.api.CreateUser(user);
  // }
}



