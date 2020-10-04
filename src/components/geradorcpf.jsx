import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './geradorcpf.css'

export default class geradorcpf extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cpf: ''
    };
    this.gerarCPF = this.gerarCPF.bind(this)
  }


  Random (n){
    var num = Math.round(Math.random()* n)
    return num;
  }

  mod (dividendo, div){
    return Math.round(dividendo - Math.floor(dividendo/div)* div);
  }

    gerarCPF () {
      var cpf = "5555534345"
      while(!this.verificar(cpf)){
        var Pontos = true;
        var n1 = this.Random(9);
        var n2 = this.Random(9);
        var n3 = this.Random(9);
        var n4 = this.Random(9);
        var n5 = this.Random(9);
        var n6 = this.Random(9);
        var n7 = this.Random(9);
        var n8 = this.Random(9);
        var n9 = this.Random(9);
        var digito1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
          
        if((this.mod(digito1, 11)) < 2 )
            digito1 = 0;  
        else 
        digito1 = 11 - this.mod(digito1,11);

        var digito2 =  digito1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;

        if((this.mod(digito2, 11) < 2 )){
            digito2 = 0;
          
        }
        else{
            digito2 = 11 - this.mod(digito2, 11);
        }
        
        if (Pontos){
          var cpf = ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+digito1+digito2;
        }

        if(this.verificar(cpf)){
          document.getElementById('visor2').value=cpf
          break;
        }
      }
  }

  verificar(v){
    var cpf = v
    var cpf = cpf.replace(/\D/g, "");

    //validação
    var mult = 10;
    var soma1 = 0;

    for(var i = 0; i <= 8; i++){
      var digito = cpf[i];
      soma1 += digito * mult;
      mult--;
    }
    var f1 = (soma1 * 10) % 11
    var dv1 = cpf[9]

    mult = 11;
    var soma2 = 0;

    for(var i = 0; i <= 9; i++){
      var digito = cpf[i];
      soma2 += digito * mult;
      mult--;
    }

    var f2 = (soma2 * 10) % 11
    var dv2 = cpf[10]

    if((dv1 == f1) && (dv2 == f2)){
      return true;
    }else{
      return false;
    }
    
}

  render() {
    return (
      <div className="obj">
        <div className="gerador">
          <h3>Gerador de CPF</h3>
                <div className="visor">
                    <input type="text" id="visor2" placeholder="Clique para gerar..."></input>
                </div>
                <input type="button" id="gcpf" value="Gerar CPF" onClick= {this.gerarCPF} className="btn btn-light"></input>
            </div>
      </div>
   
    );
  }
}
