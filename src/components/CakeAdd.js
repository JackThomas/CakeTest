import React, { Component } from 'react';

// const inputParsers = {
//     date(input) {
//         const [month, day, year] = input.split('/');
//         return `${year}-${month}-${day}`;
//     },
//     uppercase(input) {
//         return input.toUpperCase();
//     },
//     number(input) {
//         return parseFloat(input);
//     },
// };


export default class CakeAdd extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

        const options = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.get('cakeName'),
                comment: data.get('cakeComment'),
                imageUrl: data.get('cakeImage'),
                yumFactor: parseInt(data.get('cakeRating'))
            })

        }

        fetch('http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes', options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then( this.props.history.push('/'))
            .catch( error => console.log(error));
    }

    render() {
        return (
            
            <div className="component">
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="cakeName">Cake Name</label>
                    <input id="cakeName" name="cakeName" type="text" />

                    <label htmlFor="cakeComment">Cake Comment</label>
                    <input id="cakeComment" name="cakeComment" type="text" />

                    <label htmlFor="cakeImage">Cake Image</label>
                    <input id="cakeImage" name="cakeImage" type="text" />

                    <label htmlFor="cakeRating">Cake Rating</label>
                    <input type="number" min="1" max="5" id="cakeRating" name="cakeRating" /> 

                    <button>Send data!</button>
                </form>
            </div>
        );
    }
}
