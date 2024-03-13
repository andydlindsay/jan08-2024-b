interface IMyPet {
  name: string;
  breed: string;
}

interface IMyObj {
  id?: number;
  username: string;
  age: number;
  pet: IMyPet;
}

const myObj: IMyObj = {
  id: 42,
  username: 'carol',
  age: 32,
  pet: {
    name: 'Bongo',
    breed: 'Labrador',
  }
};

const myArr: IMyObj[] = [];

myArr.push(myObj);
// myArr.push({});
