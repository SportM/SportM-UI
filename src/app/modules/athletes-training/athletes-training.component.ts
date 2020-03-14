import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-athletes-training',
  templateUrl: './athletes-training.component.html',
  styleUrls: ['./athletes-training.component.css']
})
export class AthletesTrainingComponent implements OnInit {
  public trainingAttendenceForm: FormGroup;
  public currentMonth: string;
  public weekDays: string[] = [];
  public categoryMock = 'master';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.trainingAttendenceForm = this.fb.group({});
    this.displayWeek();
    this.displayMonth();
  }

  create() {
    console.log('ee');
    if (this.trainingAttendenceForm.valid){
      const t = this.trainingAttendenceForm.value;
      return t;
    }
  }

  displayMonth() {
    this.currentMonth = moment().format('MMMM');
    return this.currentMonth;
  }

  displayWeek() {
    for (let i = 0; i < 7; i++) {
      const day = moment().startOf('isoWeek').add(i, 'days').format('dddd MMMM Do');
      if ((i === 0 || i === 2 || i === 4) && this.categoryMock === 'master') {
        this.trainingAttendenceForm.addControl('presence' + i , new FormControl('', [Validators.required]));
        this.weekDays.push(day);
      }



    }
    return this.weekDays;
  }
}
