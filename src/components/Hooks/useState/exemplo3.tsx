import { useState } from "react";

export function DedoDaMao() {
  const [estadoDedo1, setEstadoDedo1] = useState("aberto");
  const [estadoDedo2, setEstadoDedo2] = useState("aberto");

  return (
    <div>
      <p>Dedo 1 - Estado: {estadoDedo1}</p>
      <button onClick={() => setEstadoDedo1("aberto")}>Abrir Dedo</button>
      <button onClick={() => setEstadoDedo1("fechado")}>Fechar Dedo</button>

      <p>Dedo 2 - Estado: {estadoDedo2}</p>
      <button onClick={() => setEstadoDedo2("aberto")}>Abrir Dedo</button>
      <button onClick={() => setEstadoDedo2("fechado")}>Fechar Dedo</button>
    </div>
  );
}

export function DedoDaMao2() {
  const [dedos, setDedos] = useState({
    dedo1: "aberto",
    dedo2: "aberto",
  });

  return (
    <div>
      <p>Dedo 1 - Estado: {dedos.dedo1}</p>
      {/* utilização do mesmo nome não causa conflito por conta da preferência por variáveis mais locais, porém pode causar confusão} */}
      <button
        onClick={() => setDedos((dedos) => ({ ...dedos, dedo1: "aberto" }))}
      >
        Abrir Dedo
      </button>
      <button
        onClick={() => setDedos((dedos) => ({ ...dedos, dedo1: "fechado" }))}
      >
        Fechar Dedo
      </button>

      <p>Dedo 2 - Estado: {dedos.dedo2}</p>
      <button
        onClick={() =>
          setDedos((dedosPrev) => ({ ...dedosPrev, dedo2: "aberto" }))
        }
      >
        Abrir Dedo
      </button>
      <button
        onClick={() =>
          setDedos((dedosPrev) => ({ ...dedosPrev, dedo2: "fechado" }))
        }
      >
        Fechar Dedo
      </button>
    </div>
  );
}

export function DedoDaMao3() {
  const [dedos, setDedos] = useState(["dedo1"]);

  return (
    <div>
      <p>Dedos: {dedos.join("\n")}</p>
      <button
        onClick={() =>
          setDedos((dedos) => [...dedos, `dedo${dedos.length + 1}`])
        }
      >
        Adicionar dedo
      </button>
      <button
        onClick={() =>
          setDedos((dedos) => [...dedos.slice(0, dedos.length - 1)])
        }
      >
        Remover dedo
      </button>
    </div>
  );
}

export function DedoDaMao4() {
  const [dedos, setDedos] = useState({
    dedo1: "aberto",
    dedo2: "aberto",
  });

  const alteraDedos = () => {
    const dedosCopia = { ...dedos };
    dedosCopia["dedo1"] = "fechado";
    dedosCopia["dedo2"] = "fechado";
    setDedos(dedosCopia);
  };

  return (
    <div>
      <button onClick={alteraDedos}>Fechar Dedos</button>

      <p>Dedo 1 - Estado: {dedos.dedo1}</p>
      <button
        onClick={() => setDedos((dedos) => ({ ...dedos, dedo1: "aberto" }))}
      >
        Abrir Dedo
      </button>

      <p>Dedo 2 - Estado: {dedos.dedo2}</p>
      <button
        onClick={() =>
          setDedos((dedosPrev) => ({ ...dedosPrev, dedo2: "aberto" }))
        }
      >
        Abrir Dedo
      </button>
    </div>
  );
}
