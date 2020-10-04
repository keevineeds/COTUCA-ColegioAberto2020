import React, { Component } from 'react';
import './rastreadorcep.css'

export default class rastreadorcep extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cep: ''
    };
  }
  rastrearcep(){

      var cep = document.getElementById('visor3').value;
      if(cep.length === 0){
          alert('Você precisa digitar o CEP primeiro.')
      }else{
        var url = `https://viacep.com.br/ws/${cep}/json/`
        fetch(url).then(res=>{
          return res.json()
      }).then(json =>{
          var end = json.logradouro
          var localidade = json.localidade
          var uf = json.uf
          if(uf === undefined){
              alert('Este CEP ainda não foi registrado.')
          }else{
            alert(end + ', ' + localidade + ' - ' + uf)
          }
          
      })
      }
  }

  render() {
    return (
        <div className="obj">
            <div className="rastreadorcep">
              <h3>Rastreador de CEP</h3>
                    <div className="visor">
                        <input type="text" id="visor3" placeholder="Digite o CEP..."></input>
                    </div>
                  <input type="button" id="rcep" value="Rastrear CEP" onClick= {this.rastrearcep} className="btn btn-light"></input>
            </div>
        </div>
    
    );
  }
}
