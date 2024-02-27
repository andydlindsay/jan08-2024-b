import './App.css';
import SayHello from './SayHello';
import ContentBlock from './ContentBlock';
import Timer from './Timer';
import Counter from './Counter';
import ChangeTitle from './ChangeTitle';

function App() {
  return (
    <>
      <ChangeTitle />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Timer />
      <ContentBlock
        title='React'
        phrase='React is a JavaScript library for building component-based web UIs.'
      />
      <ContentBlock
        title='jQuery'
        phrase='jQuery is a JavaScript library for easy web page DOM manipulation.'
      />
      {SayHello('World')} {/* Try passing in names and see what happens! */}
      {SayHello('Lighthouse Labs')}
    </>
  );
}

export default App;