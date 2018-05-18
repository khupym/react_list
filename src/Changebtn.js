import React, { Component } from 'react';
import { Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
class Changebtn extends Component {
	constructor(props){
		super(props);
		this.state = {btn: "on"}
	}
	onClick = () => {
		if(this.state.btn == "on"){
			this.setState ({btn: "off"});
		}
		else{
			this.setState ({btn: "on"});
		}
	}
	render () {//<button type="button" class="btn btn-success">Success</button>
		return (
			<div>
			<Button color="primary" onClick={this.onClick}>{this.state.btn}</Button>
			</div>
			);

	}
	
};

export default Changebtn;