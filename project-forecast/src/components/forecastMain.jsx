import React from "react";
import './forecastMain.css';

export default class ForecastMain extends React.Component {
    render() {
        return (
            <>

                <div id="mainCard">
                    <div id="info">
                        <h1>{this.props.cityName}</h1>
                        <div id="subInfo">
                            <p>{this.props.currentC}°C</p>
                            <div></div>
                            <p>{this.props.currentText}</p>
                        </div>
                    </div>
                </div>



            </>
        )
    }
}