import React from "react";


export default class Home extends React.Component{

    render() {
        console.log(this.props.num)
        return (
            <div>
                <div>
                    <h1>{this.props.num}</h1>
                </div>
                <div className="btn">
                    <button onClick={this.props.onIncrement}>+</button>
                    <button onClick={this.props.onDecrement}>-</button>
                </div>
            </div>
        )
    }
}