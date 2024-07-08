import { PropsWithChildren } from "react";

// Array que contém as informações distintas entre cada componente
const dedos = ["Polegar", "Indicador", "Médio", "Anelar", "Mínimo"];

function DedoDaMao({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

// a definição do componente Mao não se altera
export const Mao = () => {
  return (
    <div>
      Dedos com map
      {/* chamadas do componente DedoDaMao através do map */}
      {dedos.map((dedo) => (
        // Não se esqueça da propriedade "key" -> deve ser única para cada componente
        // Não utilize o "index" da função map, também pode causar bugs
        <DedoDaMao key={dedo}>{dedo}</DedoDaMao>
      ))}
    </div>
  );
};
