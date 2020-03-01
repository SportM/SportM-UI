import {Roles} from './roles';
import {User} from './users';
import {Boat} from './boat';
import {Side} from './side';
import {WeightCategory} from './weight-category';

export class Athletes extends User {
  dob: Date;
  weight: string;
  size: string;
  height: string;
  category: WeightCategory;
  boatPreference: Boat[];
  side: Side[];
  sex: string;
  rcaNumber: string;

  constructor(dob?: Date, weight?: string, size?: string, height?: string, category?: WeightCategory, boatPreference?: Boat[], side?: Side[],
              sex?: string, rcaNumber?: string) {
    super();

    this.dob = dob;
    this.weight = weight;
    this.size = size;
    this.height = height;
    this.category = category;
    this.boatPreference = boatPreference;
    this.side = side;
    this.sex = sex;
    this.rcaNumber = rcaNumber;
  }
}
