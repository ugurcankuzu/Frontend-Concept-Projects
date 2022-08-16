import React from "react";
import './section.css';
import cover from '../resources/cover.jpg';
import { Link } from 'react-router-dom';

export default class Section extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
    }
    render(){
        return(
            <>
            <div id="section">
                <div id="content">
                    <p>
                    Look weather forecasts before your trip. Don't let unexpected weather conditions ruin your vacation. <br /><br />
                    You can search forecasts immediately any time you want.
                    </p>
                    <div id="search">
                        <input id="city" onChange={(event)=>{
                            this.setState({search: event.target.value});
                        }} type="text" placeholder="Enter a City name" />
                        <Link to={`/forecast/${this.state.search}`}id="btn">Search</Link>
                    </div>
                </div>
                <div id="image-container"><img id="image" src={cover} alt="rainy day" /></div>
            </div>
            </>
        )
    }
}