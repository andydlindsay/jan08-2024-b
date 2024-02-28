import React from 'react';
import ReactDOM from 'react-dom'; 
import App from '../App';
import {render, fireEvent, prettyDOM} from '@testing-library/react';

describe('tests for the computer component', () => {

  test('clicking on the robot head icon toggles the cheating state', () => {
    const { getByTestId, container, debug } = render(<App />);
    const robotHeadIcon = getByTestId('robot-head');

    // console.log(prettyDOM(container));
    // debug();

    fireEvent.click(robotHeadIcon);
    expect(robotHeadIcon).toHaveClass('cheating');

    fireEvent.click(robotHeadIcon);
    expect(robotHeadIcon).not.toHaveClass('cheating');
  });


});

it('renders without crashing', () => { 
  const div = document.createElement('div'); 
  ReactDOM.render(<App />, div); 
  ReactDOM.unmountComponentAtNode(div); 
});
