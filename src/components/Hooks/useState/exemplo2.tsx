import { useState } from "react";

export const Contador1 = () => {
  const [contagem, setContagem] = useState(0);

  const incrementar = () => {
    setContagem(contagem + 1);
  };

  return (
    <div>
      <p>Contagem: {contagem}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export const Contador2 = () => {
  const [contagem, setContagem] = useState(0);

  const incrementar = () => {
    setContagem(contagem + 1);
    setContagem(contagem + 1);
  };

  return (
    <div>
      <p>Contagem: {contagem}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export const Contador3 = () => {
  const [contagem, setContagem] = useState(0);

  const incrementar = () => {
    setContagem((contagemAnterior) => contagemAnterior + 1);
    setContagem((contagemAnterior) => contagemAnterior + 1);
  };

  return (
    <div>
      <p>Contagem: {contagem}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};
