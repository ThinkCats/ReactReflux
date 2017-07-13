import React, {Component} from 'react';
import {Link} from  'react-router-dom';
import  {Notify, Button} from 'zent';

class Hello extends Component {

    render() {
        return (
            <div>
                <h1>Hello world !</h1>
                <Operate />
            </div>
        )
    }
}

export default (Hello);

const Operate = () => (
    <div>
        <div>
            <Link to="/world">Counter</Link>
        </div>
        <br/>
        <Button onClick={() => Notify.success('Hello')}>Notify</Button>
    </div>
);
