// type DedoDaMaoProps = {
//   cor: string;
//   nome: string;
// };

// function DedoDaMao(props: DedoDaMaoProps) {
//   return <div style={{ backgroundColor: props.cor }}>{props.nome}</div>;
// }

// function DedoDaMao({ nome, cor }: DedoDaMaoProps) {
//   return <div style={{ backgroundColor: cor }}>{nome}</div>;
// }

// DedoDaMao.defaultProps = {
//   cor: "purple", // Valor padrão para a cor
// };

type DedoDaMaoProps = {
  cor?: string;
  nome: string;
};

function DedoDaMao({ nome, cor = "grey" }: DedoDaMaoProps) {
  return <div style={{ backgroundColor: cor }}>{nome}</div>;
}

export const Mao = () => {
  return (
    <div>
      <DedoDaMao nome="Dedo Polegar" cor="red" />
      <DedoDaMao nome="Dedo Indicador" cor="orange" />
      <DedoDaMao nome="Dedo Médio" cor="yellow" />
      <DedoDaMao nome="Dedo Anelar" cor="green" />
      <DedoDaMao nome="Dedo Mínimo" />
    </div>
  );
};
