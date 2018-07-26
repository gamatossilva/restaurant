import React, { Component } from "react";
import { Link } from 'react-router';

class RestaurantList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/restaurantJson")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to={"restaurants/post"}>Adicionar Restaurante</Link>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                {items.map(item => (
                                    <li key={item.codigo}>
                                        <Link to={"/restaurant/" + item.codigo}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default RestaurantList