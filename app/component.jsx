import React, {Component} from 'react';
import  {Notify, Button} from 'zent';

export default class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello world !</h1>
                <Operate />
            </div>
        );
    }
}

class Operate extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => Notify.success('Hello')}>Notify</Button>
            </div>
        )
    }
}