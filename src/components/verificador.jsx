import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './verificador.css'

export default class verificador extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cpf: ''
    };
    this.verificar = this.verificar.bind(this)
  }

  verificar(){
      var cpf = document.getElementById('visor').value;
      var cpfc = cpf.replace(/\D/g, "");

      //validação do 1° dígito
      var mult = 10;
      var soma1 = 0;

      for(var i = 0; i <= 8; i++){
        var digito = cpfc[i];
        soma1 += digito * mult;
        mult--;
      }
      var f1 = (soma1 * 10) % 11
      var dv1 = cpfc[9]

      //validação do 2° digito
      mult = 11;
      var soma2 = 0;

      for(var i = 0; i <= 9; i++){
        var digito = cpfc[i];
        soma2 += digito * mult;
        mult--;
      }

      var f2 = (soma2 * 10) % 11
      var dv2 = cpfc[10]

      if(cpf.length !== 0){
        if((f1 == dv1) && (f2 == dv2))
        alert('O CPF: ' + cpf + ' é válido!')
        else
        alert('O CPF: ' + cpf + ' é inválido!')
      }else{
        alert('Você precisa digitar um CPF primeiro!')
      }
      

    document.getElementById('visor').value = '';
  }


  render() {
    return (
      <div className="obj">

        <div className="verificador">
        <h3>Verificador de CPF</h3>
                <div className="visor">
                    <input type="text" id="visor" placeholder="Digite o CPF..."></input>
                </div>
                <input type="button" id="vcpf" value="Verificar CPF" onClick= {this.verificar} className="btn btn-light"></input>
            </div>
      </div>
    
    );
  }
}
