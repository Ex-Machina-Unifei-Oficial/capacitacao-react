import { PropsWithChildren } from "react";

// não se preocupe com a sintaxe por hora
function DedoDaMao({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

// a definição do componente Mao não se altera
export const Mao = () => {
  return (
    <div>
      {/* chamadas do componente DedoDaMao se alteram */}
      <DedoDaMao>Polegar</DedoDaMao>{" "}
      {/* uma tag para abrir e outra para fechar */}
      <DedoDaMao>Indicador</DedoDaMao>
      <DedoDaMao>Médio</DedoDaMao>
      <DedoDaMao>Anelar</DedoDaMao>
      <DedoDaMao>
        {/* também pode ser "aberto" */}
        Mínimo
      </DedoDaMao>
    </div>
  );
};
