import { calcStatus, robotSupplies } from '../helpers';

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(calcStatus()).toBe('Waiting');
  });
});

// a function to choose the robot item
describe('robotSupplies function', () => {

  test('if isCheating is true, then function returns the winning item', () => {
    const playerSelection = 'Moai';
    const isCheating = true;
    const actual = robotSupplies(playerSelection, isCheating);

    const expected = 'Tree';

    expect(actual).toBe(expected);
  });

  test('if isCheating is false, returns a valid item', () => {
    const playerSelection = 'Moai';
    const actual = robotSupplies(playerSelection);

    const options = ['Moai', 'Axe', 'Tree'];
    // expect(options.includes(actual)).toBe(true);
    expect(options).toContain(actual);
  });

});
