import { useReducer } from "react";

// estados do reducer
type dedoState = {
  aberto: boolean;
};

// possiveis ações do reducer
type dedoAction = {
  type: "ABRIR" | "FECHAR";
};

// Função reducer que define como o estado é atualizado
const dedoReducer = (state: dedoState, action: dedoAction) => {
  switch (action.type) {
    case "ABRIR":
      console.log("abrindo a mao");
      return { ...state, aberto: true };
    case "FECHAR":
      console.log("fechando a mao");
      return { ...state, aberto: false };
    default:
      return state;
  }
};

export function Mao() {
  const [dedo, dispatch] = useReducer(dedoReducer, { aberto: false });

  return (
    <div>
      <h2>Prótese de Mão</h2>
      <p>Estado do Dedo: {dedo.aberto ? "Aberto" : "Fechado"}</p>
      <button onClick={() => dispatch({ type: "ABRIR" })}>Abrir Dedo</button>
      <button onClick={() => dispatch({ type: "FECHAR" })}>Fechar Dedo</button>
    </div>
  );
}
