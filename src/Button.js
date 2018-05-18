import React, { Component } from 'react';


class Changebtn extends Component {
	constructor(props){
		super(props);
		this.state = {button: "on"}
	}
	onClick = () => {
		if(this.state.button = "on"){
			this.setState ({button: "off"})
		}else{
			this.setState ({button: "on"})
		}
	}
	
};

exports default Changebtn;