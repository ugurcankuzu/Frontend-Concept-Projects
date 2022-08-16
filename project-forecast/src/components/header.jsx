import React from "react";
import './header.css'
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cityName: ""
        } 
    }
    render() {
        return (
            <>
                <div id="header">
                    <h1 id="title">DailyForecast</h1>
                    <div id="container">
                        <input id="searchbar" type="text" onChange={(event)=>{
                            this.setState({cityName: event.target.value})
                        }} placeholder="Enter a city name" />
                        <Link to={`/forecast/${this.state.cityName}`}>Search</Link>

                    </div>
                </div>
            </>
        )
    }
}

export default Header