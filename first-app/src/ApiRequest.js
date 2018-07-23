import React, { Component } from 'react';

class ApiRequest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
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
                },
                
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            console.log(this.state.items);
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                        Id: {item.id} <br/>
                        UserId: {item.userId} <br/>
                        Title: {item.title} <br/>
                        Body: {item.body} <br/>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default ApiRequest;