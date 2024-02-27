import React from 'react';
import './App.css';

// import UpdateState from './components/state/UpdateState';
// import Props from './components/props/Props';
import Lifecycle from './components/lifecycle/Lifecycle';

const App = class extends React.Component {

	constructor() {
		console.log('App Constructor');
    super();
    this.state = {
      checked: true
    };
  }

	render(){
		return (
			<div className="App">
				{/* <UpdateState /> */}
				{/* <Props /> */}
				<input onClick={()=>this.setState({checked:!this.state.checked})} checked={this.state.checked} style ={{defaultChecked: this.state.checked}} type="checkbox" className="form-check-input" id="exampleCheck1" />
				{ this.state.checked && <Lifecycle /> }
			</div>
		);
	}

};

export default App;
