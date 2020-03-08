import {User} from './users';
import {Boat} from './boat';
import {Side} from './side';
import {WeightCategory} from './weight-category';

export class Athletes extends User {
  dob: Date;
  weight: string;
  height: string;
  weightCategory: WeightCategory;
  athleteCategory: string;
  boatPreference: Boat[];
  side: Side[];
  sex: string;
  rcaNumber: string;

  constructor(dob?: Date, weight?: string, height?: string, weightCategory?: WeightCategory, boatPreference?: Boat[],
              side?: Side[], sex?: string, rcaNumber?: string, athleteCategory?: string) {
    super();

    this.dob = dob;
    this.weight = weight;
    this.height = height;
    this.weightCategory = weightCategory;
    this.boatPreference = boatPreference;
    this.side = side;
    this.sex = sex;
    this.rcaNumber = rcaNumber;
    this.athleteCategory = athleteCategory;
  }
}
