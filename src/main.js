import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";

class Main extends Component {
    render() {
        return(
            <HashRouter>
            <div>
                <h1> Sunil Kumar Balla</h1>
                <ul className="header">
                    <li> <NavLink exact to = "/"> Home </NavLink> </li>
                    <li> <NavLink to= "/about"> About </NavLink> </li>
                    <li> <NavLink to= "/skills"> Skills </NavLink> </li>
                    <li> <NavLink to= "/projects"> Projects </NavLink> </li>
                    <li> <NavLink to= "/contact"> Contact </NavLink> </li>
                </ul>
                <div className ="content">
                    <Route exact path = "/" component = {Home}/>
                    <Route path = "/about" component = {About}/>
                    <Route path = "/skills" component = {Skills}/>
                    <Route path = "/projects" component = {Projects}/>
                    <Route path = "/contact" component = {Contact}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}
export default Main;