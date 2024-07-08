import { useState } from "react";

export function Mao() {
  // Inicializa o estado com "aberta" como valor padrão
  const [estadoDaMao, setEstadoDaMao] = useState("aberta");

  return (
    <div>
      <p>Estado da Mão: {estadoDaMao}</p>
      <button onClick={() => setEstadoDaMao("aberta")}>Abrir Mão</button>
      <button onClick={() => setEstadoDaMao("fechada")}>Fechar Mão</button>
    </div>
  );
}
