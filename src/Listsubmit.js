import React, { Component } from 'react';
import { 
  InputGroup,
  InputGroupAddon,
  Input, 
  Button,
  ListGroup, 
  ListGroupItem 
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Listsubmit extends Component {
  
  constructor(props) {
	  super(props);
	  this.state = {listitems : props.numbers};
	  
  }
  add =() => {
  	 var temp = this.state.listitems;
  	 temp.push(this.state.anyValue);
  	 this.setState({listitems: temp});
  }
  handleInputtingText = (e) => {
    this.setState({ anyValue: e.target.value });
  }
  render() {
   
  	const listItems = this.state.listitems.map((number) =>
	    <ListGroupItem action>
	      {number}
	    </ListGroupItem>
	  );
    
    return (
      <div class="col-md-4 offset-md-4">
        <InputGroup>
          <Input placeholder="Insert text here." onChange={this.handleInputtingText}/>
          <InputGroupAddon addonType="append">
            <Button color="danger" onClick={this.add}>submit</Button>
          </InputGroupAddon>
        </InputGroup>
  	    <ListGroup>{listItems}</ListGroup>
      </div>
	  );
  }
}

export default Listsubmit;