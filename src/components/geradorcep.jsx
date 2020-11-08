import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './geradorcep.css'

export default class geradorcep extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.gerarCEP = this.gerarCEP.bind(this)
  }


RandomNum(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1) + min);
    return num
  }

gerarCEP(){
    
    var logradouro = this.RandomNum(0,999);
    if(logradouro < 10){
      var cep = ''+ this.RandomNum(1300,1313) + this.RandomNum(0,9) + '-' + '0' + '0' + logradouro;
    }
    else if(logradouro < 100){
      var cep = ''+ this.RandomNum(1300,1313) + this.RandomNum(0,9) + '-' + '0' + logradouro;
    }
    else if (logradouro >= 100){
      var cep = '' + this.RandomNum(1300,1313) + this.RandomNum(0,9) + '-' + logradouro;
    }
    document.getElementById('visor4').value = cep;
    
    
}
  render() {
    return (
      <>
      <div className="obj">
          <div className="gerador">
            <h3>Gerador de CEP</h3>
              <div className="visor">
                  <input type="text" id="visor4" placeholder="Clique para gerar..."></input>
              </div>
              <input type="button" id="gcpf" value="Gerar CEP" onClick= {this.gerarCEP} className="btn btn-light"></input>
          </div>
      </div>
    </>
    );
  }
}
