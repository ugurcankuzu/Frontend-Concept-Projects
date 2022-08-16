import React from "react";
import Header from "./header";
import image from '../resources/fallback.svg';
import {Link} from 'react-router-dom';
import './fallback.css'
export default class Fallback extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <div id="fallback">
                    <img src={image} alt="" />
                    <div>
                        <p>Oops... Something went wrong. <br /> Let's get you to homepage!</p>
                        <Link to={"/"}>Go Homepage</Link>
                    </div>
                </div>
            </>
        )
    }
}