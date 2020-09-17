import { Model } from 'mongoose';

export default class BaseCrudService {
  protected model: Model<any>;
  constructor(model: Model<any>) {
    this.model = model;
  }

  public async index(query?: any) {
    return await this.model.find(query);
  }

  public async create(data: any) {
    const document = new this.model(data);
    return await document.save();
  }

  public async read(id: any, key?:string) {
    if (key) {
      const query: any = {};
      query[key] = id;
      return await this.model.findOne(query);
    }
    return await this.model.findById(id);

  }

  public async update(id: any, data: any, key?:string) {
    if (key) {
      const query: any = {};
      query[key] = id;
      return await this.model.findOneAndUpdate(query, data, { new: true });
    }
    return await this.model.findByIdAndUpdate(id, data, { new: true });

  }

  public async delete(id: any, key?:string) {
    if (key) {
      const query: any = {};
      query[key] = id;
      return await this.model.findOneAndDelete(query);
    }
    return await this.model.findByIdAndDelete(id);

  }
}
