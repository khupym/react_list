import React, { Component } from 'react';
import { InputGroup,InputGroupAddon,Input,Button,ListGroup,ListGroupItem} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Listsubmit extends Component {
  
  constructor(props) {
	  super(props);
	  this.state = {listitems : props.numbers};
	  
  }
  add =() => {
  	 let temp = this.state.listitems;
  	 temp.push(this.state.anyValue);
  	 this.setState({listitems: temp});
  }
  inputtext = (e) => {
    this.setState({ anyValue: e.target.value });
  }
  render() {
   
  	const listItems = this.state.listitems.map((number,keyvalue) =>
	    <ListGroupItem key={keyvalue} action>
	      {number}
	    </ListGroupItem>
	  );
    
    return (
    <Row>
      <Col md={{size: 4,offset:4}}>
        <InputGroup>
          <Input placeholder="Insert text here." onChange={this.inputtext}/>
          <InputGroupAddon addonType="append">
            <Button color="danger" onClick={this.add}>submit</Button>
          </InputGroupAddon>
        </InputGroup>
  	    <ListGroup>{listItems}</ListGroup>
      </Col>
    </Row>
	  );
  }
}

export default Listsubmit;