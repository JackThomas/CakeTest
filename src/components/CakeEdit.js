import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';




export default class CakeEdit extends Component {

    constructor() {
        super();
        this.state = {
            cake: [],
            loading: true,
        };

    }

    performSearch() {

        const cakeID = this.props.match.params.id;

        fetch(`http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/${cakeID}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                this.setState({
                    cake: data,
                    loading: false
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    componentDidMount() {
        
        this.performSearch();
    }

    render() {
        let cakes;

        if (this.state.initialSearch === true) {
            cakes = <div className='cake-message'><h3>Please enter a search</h3></div>
        } else if (this.state.cake) {
            cakes = 
                <div className="cake-edit-item" key={this.state.cake.id}>
                    <img src={this.state.cake.imageUrl} alt={this.state.cake.name} />
                    <p><span>Name: </span>{this.state.cake.name}</p>
                    <p><span>Comment: </span>{this.state.cake.comment}</p>
                    <p><span>Yum Factor: </span>{this.state.cake.yumFactor}</p>
                </div>;
        } else {
            cakes = <div className='cake-message'><h3>Sorry, no cakes match '{this.props.searchTerm}'.</h3></div>
        }
        

        return (

            <div className="component">

                {
                    (this.state.loading)
                        ? <div className="cake-message"><h3>Loading...</h3></div>
                        : cakes
                } 

                <NavLink exact to={'/'} className="cake-return">&larr; Return to list</NavLink>
            </div>

        )
    }
}


