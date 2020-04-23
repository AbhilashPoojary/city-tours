import React, { Component } from 'react';
import "./TourList.scss"
import Tour from "../Tour/Tour"
import {tourData} from "../tourData.js"

class TourList extends Component {
    constructor(){
        super()
        this.state={
            tours:tourData
        }
    }
    removeTour = (id) => {
        const {tours} = this.state
        const sortedTours = tours.filter(tour =>{ return tour.id !== id})
        this.setState({
            tours:sortedTours
        })
    }
    render() {
        const {tours} = this.state;
        
        return (
            <section className="tourlist">
                {tours.map(tour =>{
                    return(
                        <Tour 
                        key={tour.id} tour={tour} removeTour={this.removeTour}/>
                    )
                })}
            </section>
        );
    }
}

export default TourList;