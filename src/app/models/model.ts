class Model {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(object?: Partial<any>) {
    if (object) {
      this.restObjectToModel(object);
    }
  }

  public restObjectToModel(object: Partial<any>): void {
    if (object.id) {
      this.id = object.id;
    }

    this.createdAt = object.created_at;
    this.updatedAt = object.updated_at;
  }

  public modelToRestObject(): any {
    return {
      id: this.id,
      created_at: this.createdAt,
      updated_at: this.updatedAt
    };
  }
}

export default Model;
