import React, {Component} from 'react'
import {Link} from  'react-router-dom'
import  {Notify, Button} from 'zent'

class Hello extends React.Component
  render: ->
    `(
        <div>
            <h1>Hello world !</h1>
            <Operate />
        </div>
    )`


Operate = ->
  `(
      <div>
          <div>
              <Link to="/world">Counter</Link>
          </div>
          <br/>
          <Button onClick={() => Notify.success('Hello')}>Notify</Button>
      </div>
  )`

export default Hello
