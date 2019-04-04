import React from "react";

export default class GrandChild extends React.Component{
     constructor(props, context){
            super(props);
     }  

    // componentWillUnmount() {
    //     console.log("Child component unmounted");
    // }

    render(){    
        return(            
            <div>
                <div>Children ({this.props.children.length}):</div>
                {this.props.children}
            </div>
        )
    }
}