import React, { Component } from "react";

class RestaurantPost extends Component{
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        fetch("http://localhost:8080/restaurantJson",{
            method: "POST",
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                name: "Restaurante Dummy"
            })
        })
    }

    render(){
        return(
            <p></p>
        )
    }
}

export default RestaurantPost