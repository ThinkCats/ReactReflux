import React, {Component} from 'react';
import  {Notify, Button} from 'zent';



export default class World extends Component {
    render() {
        return (
            <div>
                <h1>TTT !</h1>
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