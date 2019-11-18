import React from 'react';

class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {counter : 0};
    }

    increment()
    {
        this.setState({
            counter: this.state.counter + 1
        });
        console.log(this.state.counter + 1);
    }

    render()
    {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.increment()}>Incrementa</button>
            </div>
        );
    }


}

export default Counter;