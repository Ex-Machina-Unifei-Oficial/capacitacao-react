import React from "react";

class Saudacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mensagem: `Olá, ${props.nome}!` };
  }

  render() {
    return <h1>{this.state.mensagem}</h1>;
  }
}

export default Saudacao;
