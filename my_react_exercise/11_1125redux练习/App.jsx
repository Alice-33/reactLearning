import React,{ Component } from "react";
import Count from './components/Count'
import Person from "./components/Person";

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