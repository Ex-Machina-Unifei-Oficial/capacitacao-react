import { useState, useEffect } from "react";

type WindowSize = {
  width: number;
  height: number;
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Vincula o evento de "resize" da tela (sempre a tela for redimensionada) com a função handleResize
    window.addEventListener("resize", handleResize);

    // Remover o listener quando o componente desmontar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

// normalmente, os componentes que utilizam o Hook ficam em outros arquivos próprios
// import { useWindowSize } from ".../useWindowSize";

export const MeuComponente = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl">Dimensões da Janela</h1>
      <p>Largura: {width}px</p>
      <p>Altura: {height}px</p>
    </div>
  );
};
