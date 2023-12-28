export interface IFestival {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export class Festival implements IFestival {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;

  constructor(data: IFestival) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.tags = data.tags;
    this.imageUrl = data.imageUrl;
  }
}
