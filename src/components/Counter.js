import React, {Component} from 'react';

class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {counter : 0};
        console.log(this);
    }

    add()
    {
        this.setState({counter : this.state.counter + 1},
            ()=>{console.log(`Counter: ${this.state.counter}`)});
    }

    render()
    {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={() => this.add()}>Incrementa</button>
            </div>
        );
    }


}

export default Counter;