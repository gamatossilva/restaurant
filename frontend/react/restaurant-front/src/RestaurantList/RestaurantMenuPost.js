import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class RestaurantMenuPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            course: "",
            description: "",
            price: 0.0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.postRestaurantMenu = this.postRestaurantMenu.bind(this);
    }

    postRestaurantMenu(event) {
        fetch("http://localhost:8080/restaurantJson/" + this.props.params.id + "/menu", {
            method: "POST",
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                course: this.state.course,
                description: this.state.description,
                price: this.state.price
            })
        })
        browserHistory.push("/restaurant/" + this.props.params.id)
    }

    handleInputChange(event) {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Link to={"/restaurant/" + this.props.params.id}>Menu do Restaurante</Link>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-12">
                        <form method="post">
                            <div className="form-group">
                                <label htmlFor="menuItemName">Nome</label>
                                <input type="text" name="name" className="form-control" id="menuItemName" onChange={this.handleInputChange} placeholder="Nome do item" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="menuItemCourse">Tipo</label>
                                <input type="text" name="course" className="form-control" id="menuItemCourse" onChange={this.handleInputChange} placeholder="Tipo do item" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="menuItemDescription">Descrição</label>
                                <input type="text" name="description" className="form-control" id="menuItemDescription" onChange={this.handleInputChange} placeholder="Descrição do item" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="menuItemPrice">Preço</label>
                                <input type="text" name="price" className="form-control" id="menuItemPrice" onChange={this.handleInputChange} placeholder="Preço do item" />
                                <br/>
                            </div>
                            <button type="button" onClick={this.postRestaurantMenu} className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantMenuPost