import React, {Component} from "react";
import {connect} from "react-redux";
//import {setAge, setName} from "../app/actions/useraction";
import GrandChild from  "./GrandChildComponent";

export default class NewComponent extends Component{
    constructor(props,context){ //props : immutable we can use it but can't modify
        super(props,context);
        
        this.state = {
            myName : "Test",
            render : false
        }    

        //ref keyword allows us to directly interact with dom
        this.textInput = React.createRef();        
    }

    componentWillUnmount() {
        console.log("New Component unmounted");
    }

    render(){
        return(
            <div>
                <GrandChild>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </GrandChild>
            </div>
        )
    }
}
