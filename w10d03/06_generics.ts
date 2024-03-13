interface IContainer<T, B> {
  name: string;
  contents: T;
  arr?: B[];
}

const stringContainer: IContainer<string, number> = {
  name: 'string container',
  contents: 'hello world',
};

const booleanContainer: IContainer<boolean, boolean> = {
  name: 'boolean container',
  contents: false,
};
