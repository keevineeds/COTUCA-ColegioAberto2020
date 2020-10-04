import React, { Component } from 'react';
import LogoCotuca from '../logocotuca.png'
export default class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
          <nav className="navbar navbar-dark bg-light">
              <div className="container">        
                  <a className="navbar-brand" href="#">
                      <img src={LogoCotuca} width="30" className="d-inline-block align-top" alt=""/>
                      Validadores e Geradores
                  </a>
              </div>
          </nav>
        </div>
        
    );
  }
}
