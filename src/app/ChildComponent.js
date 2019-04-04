import React from "react";

export default class Child extends React.Component{
    constructor(props, context){
        super(props, context);//avoid data inconsistancy 
        //props: immutable should not change
        this.title = "We are in Child Component";
        this.state = {
            Name: "Duy",
            Age:22,
            Country : "United States",
            Techonology : "Object Oriented Javascript"//,
        } 
        console.log("Constructor Initialized");      
    }  

    componentWillUnmount() {
        console.log("Child component unmounted");
    }

    render(){  
        console.log(this.state.Age == 22 ? "Child Rendering" : "Child Re-Rendering");     
        return(            
            <div>
                <h4><b>{"Props passed from parent: "}</b>{this.props.parent}</h4>

                <button className={"btn btn-primary"} onClick={() => this.props.callbackFromParent(this.state.Name)}>Greet In Parent</button>
            </div>
        )
    }
}
