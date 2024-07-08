import { PropsWithChildren } from "react";

// mesclagem de tipos do TypeScript
type DedoDaMaoProps = PropsWithChildren & {
  cor?: string;
};

function DedoDaMao({ children, cor = "grey" }: DedoDaMaoProps) {
  return <div style={{ backgroundColor: cor }}>{children}</div>;
}

export const Mao = () => {
  return (
    <div>
      <DedoDaMao cor="red">Polegar</DedoDaMao>
      <DedoDaMao cor="orange">Indicador</DedoDaMao>
      <DedoDaMao cor="yellow">Médio</DedoDaMao>
      <DedoDaMao>Anelar</DedoDaMao>
      <DedoDaMao>Mínimo</DedoDaMao>
    </div>
  );
};
