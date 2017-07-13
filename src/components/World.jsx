import React, {Component} from 'react';
import  {Notify, Button} from 'zent';



export default class World extends Component {

    hanldeOK = () => {
        console.log('hello')
    }

    render() {
        return (
            <div>
                <h1 onClick={this.hanldeOK}>TTT !</h1>
                <Operate />
            </div>
        );
    }
}

class Operate extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => Notify.success('World')}>Notify</Button>
            </div>
        )
    }
}