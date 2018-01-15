import React, {Component} from 'react';

//gives this class a bunch of functionalty
class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = { term: ''}
    };

    render() {
      // this is how we handle events on class components
      //remember curly braces
      //prop = property
      //this is an event handler on a class component
      //event handler
      return (
        <div>
        <input
        value={this.state.term}
        onChange={event => this.setState({term: event.target.value})} />
        value of the input: {this.state.term}
        </div>
    )
  }
}
export default SearchBar;
