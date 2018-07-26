import React, { Component } from 'react';
import { Link } from 'react-router';


class RestaurantMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            restaurant: {
                restaurantName: "",
                menuItems: []
            }
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/restaurantJson/" + this.props.params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        restaurant: {
                            restaurantName: result.name,
                            menuItems: result.menuItems
                        }
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
        const { error, isLoaded, restaurant } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to={"/restaurants"}>Lista de Restaurantes</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Link to={"/restaurant/" + this.props.params.id + "/menu/post"}>Adicionar item ao Menu</Link>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{restaurant.restaurantName}</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Tipo</th>
                                        <th scope="col">Descrição</th>
                                        <th scope="col">Preço</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {restaurant.menuItems.map(item => (
                                        <tr key={item.codigo}>
                                            <td>{item.name}</td>
                                            <td>{item.course}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default RestaurantMenu