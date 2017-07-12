import React, {Component} from 'react';
import {Link} from  'react-router-dom';
import  {Notify, Button} from 'zent';

const Hello = () => (
    <div>
        <h1>Hello world !</h1>
        <Operate />
    </div>
);

export default Hello;

const Operate = () => (
    <div>
        <Button onClick={() => Notify.success('Hello')}>Notify</Button>
        <Link to="/world">World</Link>
    </div>
);
