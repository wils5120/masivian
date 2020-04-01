import React, { Component } from 'react';
import APIService from '../services/APIservices';
import Rating from 'material-ui-rating'
import '../assets/scss/main.css';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            value: 0,
        }
    }

    componentDidMount = async () => {
        let n = Math.floor(Math.random() * (2 - 0)) + 0;
        let url;
        if (n === 1) {
            url = '614/info.0.json';
        } else {
            url = 'info.0.json';
        }
        await APIService.GetAPI(url).then((Data) => {
            this.setState({ data: Data });
        }).catch((error) => {
            console.log(error);
        });
    }

    recibeValue = (value) => {
        this.setState({ value: value })
    }

    render() {
        let data;
        if (this.state.data !== undefined) {
            data = this.state.data;
            return (
                <div className="content">
                    <div>
                        <h2> {data.title} </h2>
                        <h4> {data.alt} </h4>
                    </div>
                    <div className="contentImg">
                        <img className="img" src={data.img} />
                    </div>
                    <div className="valSel">
                        <Rating
                            value={this.state.value}
                            max={5}
                            onChange={(value) => this.recibeValue(value)}
                        />
                        {
                            this.state.value !== 0 ?
                                <span> {this.state.value} </span>
                                :
                                <span></span>
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Cargando...</h2>
                </div>
            )
        }

    }
}