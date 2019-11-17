import React, {Component} from 'react';

class Message extends React.Component
{
    constructor()
    {
        super();
        this.subsribed = false;
        this.state = {
            message : "Benvenuto visitatore",
            btn_text : "Iscriviti!"
        };
    }

    changeMessage = () =>
    {
        //Per modificare lo stato di una classe componente bisogna 
        //usare il metodo this.setState

        if(!this.subsribed)
        {
            this.setState({
                message: "Grazie!",
                btn_text: "Annulla"
            });
        }
        else
        {
            this.state = {
                message : "Benvenuto visitatore",
                btn_text : "Iscriviti!"
            };
        }

        this.subsribed = !this.subsribed;
      
    }

    render()
    {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => {this.changeMessage()}}>{this.state.btn_text}</button>
            </div>
            ); 
    }
}

export default Message;