import React,{ Component } from "react";
import Count from './containers/Count'
import Person from "./containers/Person";

export default class App extends Component{
    render(){
        return(
            <div>
               <h2>11/25</h2>
               <Count/>
               <hr/>
               <Person/>
            </div>
        )
    }
}