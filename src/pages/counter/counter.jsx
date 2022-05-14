import React from "react";

class Counter extends React.Component{
    constructor (props){
        super(props);
        this.count = 0;
    };
    increase()  {
        this.count = this.count +1;
        return this.count;

    }
    render(){
        return (
            <div>
                <h1>{this.count}</h1>
                <button className="btn" onClick={this.increase}>+</button>
            </div>
            );
    }
}

export default Counter;