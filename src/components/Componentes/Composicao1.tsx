// definição do componente DedoDaMao
function DedoDaMao() {
  return <div>Dedo</div>;
}

// definição de outro componente, Mao, utilizando arrow function
export const Mao = () => {
  return (
    <div>
      {/* chamadas do componente definido anteriormente */}
      <DedoDaMao /> {/* apenas uma tag de abertura e fechamento */}
      <DedoDaMao />
      <DedoDaMao />
      <DedoDaMao />
      <DedoDaMao />
    </div>
  );
};

// OBS: É uma boa prática definir apenas um componente por arquivo, por menor que seja
// Nesse exemplo foram definidos dois por simplicidade e didática
