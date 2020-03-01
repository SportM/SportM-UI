import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-athletes-profile',
  templateUrl: './athletes-profile.component.html',
  styleUrls: ['./athletes-profile.component.css']
})
export class AthletesProfileComponent implements OnInit {

  public profileForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
