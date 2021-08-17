let nextId = 1;

export class Todo {
  id: number;
  title: string;
  body: string;

  constructor(title: string, body: string) {
    this.id = nextId++;
    this.title = title;
    this.body = body;
  }
}
