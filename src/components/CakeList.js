import React, { Component } from 'react';
import CakeItem from './CakeItem';


export default class CakeList extends Component {

    constructor() {
        super();
        this.state = {
            cakes: [],
            loading: true,
        };

    }

    performSearch() {
        fetch(`http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
                this.setState({
                    initialSearch: false,
                    loading: false,
                    cakes: data,
                    cakeTotalCount: data.total_count
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    handlePagination(pageUpdate) {
        this.setState({ loading: true });
        this.performSearch();
    }

    componentDidMount() {
        this.performSearch();
    }

    componentDidUpdate() {
        this.performSearch();
    }

    render() {
        let cakes;

        if (this.state.initialSearch === true) {
            cakes = <div className='cake-message'><h3>Please enter a search</h3></div>
        } else if (this.state.cakes) {
            cakes = this.state.cakes.map(cake =>
                <CakeItem
                    key={cake.id}
                    cakeID={cake.id}
                    name={cake.name}
                    imageUrl={cake.imageUrl}
                />);
        } else {
            cakes = <div className='cake-message'><h3>Sorry, no cakes match '{this.props.searchTerm}'.</h3></div>
        }

        return (

            <div className="component">

                {this.state.loading === false &&
                    <div className="cake-search-info">
                        <div className="cake-search-info--count">
                            <p><span>Results: </span>{this.state.cakes.length}</p>
                        </div>
                    </div>
                }

                <div className="cake-list">

                    {
                        (this.state.loading)
                            ? <div className="cake-message"><h3>Loading...</h3></div>
                            : cakes
                    }

                </div>
            </div>

        )
    }
}


