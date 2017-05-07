import * as React from 'react';
import './App.css';
import Form from './components/Form';
import { AppState, Person } from '../../types/interfaces';
import { connect } from 'react-redux';
import savePerson from './actions/peopleActions'

class App extends React.Component<any, AppState> {
  constructor() {
    super();
    this.state = {
      person: {
        firstName: '',
        lastName: '',
        age: 0,
        cars: []
      }
    }
    this.changehandler = this.changehandler.bind(this);
    this.savePerson = this.savePerson.bind(this);
  }

  changehandler(e: any) {
    let person = this.state.person;
    person[e.target.name] = e.target.value;
    this.setState({ person });
  }

  savePerson() {
    this.props.savePerson(this.state.person);
  }

  render() {
    return (
      <div className="App">
        <Form
          person={this.state.person}
          saveFunc={this.savePerson}
          changeHandler={this.changehandler} />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return state;
}

function mapDispatchToProps(dispatch: any) {
  const actions = {
    savePerson: (person: Person) => dispatch(savePerson(person))
  }
  return actions;
}
  

export default connect(mapStateToProps, mapDispatchToProps)(App);










