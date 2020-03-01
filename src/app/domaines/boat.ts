export class Boat {
  id: number;
  name: string;
  type: typeBoat[];
  weight: string;
  status: string;
  storage: Hangar;
  riggers: string;
  make: string;
  year: Date;
  comments: string;
  serialNumber: string;

  constructor(id?: number, name?: string, type?: typeBoat, weight?: string, status?: string, storage?: Hangar, riggers?: string,
              make?: string, year?: Date, comments?: string, serialNumber?: string) {

    this.id = id;
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.status = status;
    this.storage = storage;
    this.riggers = riggers;
    this.make = make;
    this.year = year;
    this.comments = comments;
    this.serialNumber = serialNumber;

  }
}
