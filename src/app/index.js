import React from "react";
import Child from "./ChildComponent";
import {render} from "react-dom";
//import {Provider} from "react-redux";
//import store from "./store";
import Header, {Footer as Ftr, Body} from "./HeaderComponent";
import NewComponent from "./NewComponent";
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component{//state
    constructor(){
        super();     
        this.state ={
            parentprop :"Testing parentprop"
        }
    }

    myCallback(dataFromChild){
        alert("Name passed from child: " + dataFromChild)
    }

    render(){
        console.log("Parent Rendering");
        return(     //JSX : Javascript XML
            <div>
                <Router>
                    <div>                            
                        <Header>   
                        </Header>                
                        <Switch>                             
                            <Route path="/child" exact component={Child}/>
                            <Route path="/new" component={NewComponent}/>
                        </Switch>
                        <Ftr>
                        </Ftr>                        
                    </div>  
                </Router>
            </div>
        )
    }
}

render(<App/>, document.getElementById("app"))
