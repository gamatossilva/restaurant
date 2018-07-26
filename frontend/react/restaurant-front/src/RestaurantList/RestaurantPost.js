import React, { Component } from "react";
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class RestaurantPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurantName: ""
        }
    }

    postRestaurant() {
        fetch("http://localhost:8080/restaurantJson", {
            method: "POST",
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.restaurantName
            })
        })
        //console.log(this.state.restaurantName)
        browserHistory.push("/restaurants")
    }

    onHandleChange(event) {
        this.setState({
            restaurantName: event.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Link to={"/restaurants"}>Lista de Restaurantes</Link>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                    <form>
                        <label htmlFor="restaurantName">Nome do Restaurante</label>
                    <input type="text" className="form-control" id="restaurantName" onChange={(event) => this.onHandleChange(event)} placeholder="Nome do restaurante" />
                    <br/>
                        <button onClick={this.postRestaurant.bind(this)} className="btn btn-primary">Enviar</button>
                    </form>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantPost