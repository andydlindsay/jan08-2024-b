interface IWriter {
  penName: string;
  books: string[];
  writeBook: (bookTitle: string) => boolean;
}

const writer: IWriter = {
  penName: 'Agatha Christie',
  books: [],
  writeBook: (bookTitle: string) => { return false; }
}
