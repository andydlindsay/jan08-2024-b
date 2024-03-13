interface IUser {
  id?: number;
  username: string;
  password: string;
}

const login = (user: IUser): boolean => {
  // user.moreStuff
  return true;
};

const user = {
  username: 'jstamos',
  password: '1234',
  moreStuff: 42,
};

login(user);
