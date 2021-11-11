import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <img src={require('../images/logo.png')} alt = 'logo'/>
                <h3>ReactsFacts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
        )
    }
}


export default Navbar