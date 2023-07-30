interface IUser {
  id: number;
  name: string;
  email: string;
  tags: string[];
  imageUrl: string;

}

export class User implements IUser {
  id: number;
  name: string;
  email: string;
  tags: string[];
  imageUrl: string;

  constructor(data: IUser) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.tags = data.tags;
    this.imageUrl = data.imageUrl;
  }
}
