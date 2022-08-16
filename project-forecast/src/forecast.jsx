import React from "react";
import { useParams } from "react-router-dom";
import Header from "./components/header";
import ForecastMain from './components/forecastMain';
import ForecastDays from "./components/forecastDays";

export default function PassParam(props) {

    const { city } = useParams();

    return (<Forecast city={`${city.toLowerCase()}`} />)

}

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: "",
            currentC: "",
            currentText: "",
            forecastForDays: []
        }


    }
    getInfo() {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_FORECAST_API_KEY}&q=${this.props.city}&days=3&aqi=no&alerts=no
        `).then(res => res.json()).then(result => {
            this.setState({
                cityName: result.location.name,
                currentC: result.current.temp_c,
                currentText: result.current.condition.text,
                forecastForDays: result.forecast.forecastday
            })
        })
    }
    componentDidMount() {
        this.getInfo();
    }
    componentDidUpdate(){
        this.getInfo();
    }
    render() {

        return (
            <>
                <Header />
                <ForecastMain cityName={this.state.cityName} currentC={this.state.currentC} currentText={this.state.currentText} />
                <ForecastDays forecastForDays={this.state.forecastForDays} />
            </>
        )
    }
}

