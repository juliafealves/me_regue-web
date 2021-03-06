import Model from './model';

class PlantModel extends Model{
  name: string;
  description: string;

  constructor(object?: Partial<any>) {
    super(object);

    if (object) {
      this.restObjectToModel(object);
    }
  }

  public restObjectToModel(object: Partial<any>): void {
    if (object.id) {
      this.id = object.id;
    }

    this.name = object.name;
    this.description = object.description;
  }

  public modelToRestObject(): any {
    return {
      id: this.id,
      name: this.name,
      description: this.description
    };
  }
}

export default PlantModel;
