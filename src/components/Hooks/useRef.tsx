import { useRef } from "react";

export function Mao() {
  const dedoRef = useRef<HTMLDivElement | null>(null);

  const clicarNoDedo = () => {
    if (dedoRef.current) {
      // Usando a referência para interagir com o elemento DOM do dedo
      dedoRef.current.style.backgroundColor = "red";
    }
  };

  return (
    <div>
      <h2>Prótese de Mão</h2>
      <button onClick={clicarNoDedo}>Clicar no Dedo</button>
      <div ref={dedoRef} style={{ backgroundColor: "gray" }}>
        Dedo da Prótese
      </div>
    </div>
  );
}
