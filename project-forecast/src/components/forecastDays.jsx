import React from "react";
import './forecastDays.css';

export default class ForecastDays extends React.Component {
    dateFormatter(date) {
        let day, month, year;
        const splittedDate = date.split('-');
        day = splittedDate[2];
        month = splittedDate[1];
        year = splittedDate[0];

        return `${day}.${month}.${year}`;
    }
    render() {
        return (
            <>
                <div id="days">
                    {this.props.forecastForDays.map(item =>
                        <div className="day">
                            <div className="dayText">
                                <h1 className="dayDate">{this.dateFormatter(item.date)}</h1>
                                <div className="dayInfo">
                                    <p>{item.day.maxtemp_c}</p>
                                    <div></div>
                                    <p>{item.day.condition.text}</p>
                                </div>
                            </div>
                        </div>)}
                </div>
            </>
        )
    }

}