import React, {Component} from 'react';

import {Header} from './Header';

export class Root extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}