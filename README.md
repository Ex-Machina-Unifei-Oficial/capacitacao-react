# Capacitação React

## Introdução

React é uma biblioteca JavaScript de código aberto amplamente utilizada para construir interfaces de usuário (UI) interativas. O React permite a criação de componentes declarativos e reutilizáveis que podem ser combinados de diferentes formas a fim de criar interfaces complexas de maneira eficiente, sendo assim, uma ótima ferramenta para o desenvolvimento de aplicações web. No entanto, sozinho, possui algumas limitações, que serão abordadas mais detalhamente nas próximas capacitações.

### Instalação e configuração básica.

[Guia de Criação de um Projeto React](https://www.notion.so/Guia-de-Cria-o-de-um-Projeto-React-3df87027f04c4662a099b8a3f383159d?pvs=21)

## Componentes

### O que são?

Componentes no React são blocos de construção fundamentais para o desenvolvimento de interfaces de usuário. Eles são pedaços modulares de código que encapsulam a estrutura, a estilização e a lógica de uma parte específica da aplicação, sendo, portanto, reutilizáveis, independentes e combináveis.

O próprio nome "componente" é autoexplicativo no sentido de ser um pedaço de um todo maior, mas uma possível analogia é a seguinte: para construir uma casa, a tarefa é subdividida em diversas etapas, nínguem constrói uma casa da noite para o dia. Primeiro de tudo, é preciso fazer cada cômodo que compõe a casa. Porém um cômodo também não é feito da noite para o dia, então cada um também é subdividido, e por aí vai, até que se chegue em uma unidade básica: um tijolo. Com cada tijolo, facilmente reutilizável e independente de outras partes, é possível construir cada parte que vai compor a casa no final. Voltando para a construção do site, como devem imaginar, os tijolos seriam os componentes. No entanto, as paredes também são componentes, mesmo que um pouco mais complexos e dependentes das partes que a compõe. Assim como um cômodo inteiro também pode ser um componente, ainda mais complexo. Dessa forma, a complexidade dos componentes é algo muito variável, desde que cumpram apenas uma função e tenham uma boa base, eles podem variar de botões simples a elementos de interface de usuário complexos, como barras de navegação ou até mesmo páginas inteiras.

Porém, também deve-se tomar cuidado no sentido de ultrapassar os limites nas subdivisões: dividir um tijolo até que se transforme em um átomo, inviabiliza a construção da mesma forma que não dividir a casa.

Exemplos de componentes no Librex:

```jsx
// componente responsável apenas por estilização
// terá erros ao rodar nesse projeto por causa do Tailwind

import { PropsWithChildren } from "react";

export const BgGames = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-[#2179b1] to-blue-200">
      <div className="my-5 h-2/5 w-5/6 rounded-3xl bg-white">{children}</div>
    </div>
  );
};
```

```jsx
// componente um pouco mais complexo:
// possui props e uma verificação

type PlayerProps = {
  url: string
  height: number
}

export function Player({ url, height }: PlayerProps) {
  const youtubeID = url.split("/").pop() || ""

  if (!youtubeID) return <h1>Vídeo não encontrado</h1>

  return (
    <iframe
      className="video"
      seamless
      height={height}
      width={height * 1.7}
      title="Youtube player"
      sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
      src={`https://youtube.com/embed/${youtubeID}?autoplay=0&controls=0&loop=1&playlist=${youtubeID}&modestbranding=1&rel=0&showinfo=0`}
    ></iframe>
  )
}
```

```jsx
// componente um pouco mais complexo em termos de estrutura, depende de outros components já existentes

import { Signal } from "@/core/domain/entities/signal"
import { SignalRepresentation } from "@/core/domain/entities/signal-representation"
import { CarouselElement } from "../CarouselElement"
import { Card } from "antd"

type WordDetailsProps = {
  signal: Signal
  representation: SignalRepresentation
}

export const WordDetails = ({ signal, representation }: WordDetailsProps) => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl p-5">
      <h1
        className="mb-10 text-center text-3xl font-bold uppercase"
        style={{ color: "#283b51" }}
      >
        {signal.name}
      </h1>

      <div className="mb-10 flex grid-cols-3 flex-col justify-center gap-4 sm:grid sm:gap-6 md:gap-10">
        <Card
          title="Descrição"
          bordered={false}
          style={{ color: "#283b51", backgroundColor: "#fbe69d" }}
        >
          <p>{signal.description}</p>
        </Card>
        <Card
          title="Exemplo"
          bordered={false}
          style={{ color: "#283b51", backgroundColor: "#fbe69d" }}
        >
          <p>{signal.portugueseSentence}</p>
        </Card>
        <Card
          title="Exemplo em Libras"
          bordered={false}
          style={{ color: "#283b51", backgroundColor: "#fbe69d" }}
        >
          <p>{signal.signalSentence}</p>
        </Card>
      </div>
      <div className="grid grid-cols-1">
        <CarouselElement representation={representation} />
      </div>
    </div>
  )
}
```

Não se preocupe se os exemplos apresentados aparentarem muito complexos, cada detalhe a respeito da criação de componentes será abordado nessa capacitação. A ideia é que no final seja fácil de ver que esses componentes não são nenhum bicho de 7 cabeças. Inclusive, outro fundamento importante para a criação de componentes é: se ele estiver muito complexo e fazendo muitas coisas diferentes, deve ser subdividido em outras partes mais básicas, mesmo que essas sejam usadas apenas uma vez. Seguindo a analogia apresentada, seria como contruir a casa usando guindastes para posicionar as paredes, no lugar de contruir a parede com tijolos: pode até dar certo, mas uma hora também pode desmoronar.

Você deve ter percebido que uma parte do componente parece muito com a estrutura do HTML, mas, na verdade, se trata do JSX. Ele é uma extensão de sintaxe que permite escrever código realmente semelhante ao HTML, dentro de um arquivo JavaScript. É usado para facilitar a criação de componentes, mesclando a estrutura do DOM (elementos HTML) com a lógica da aplicação sem usar métodos como `createElement()` ou `appendChild()`. Por conta disso, arquivos que descrevem componentes devem ter a extensão `.jsx` ou, se estiver trabalhando com TypeScript, `.tsx`. Essa parte do componente que contém o JSX define o que será renderizado na tela. Renderizar significa simplesmente carregar os componentes definidos para as interfaces propriamente ditas, diretamente no navegador.

É possível criar componentes de duas maneiras principais: componentes de classe ou componentes funcionais.

### Componentes de Classe

Atualmente, estão quase obsoletos em projetos novos por conta dos componentes funcionais, porém é importante saber da sua existência caso esbarre por algum pela internet.

- São classes JavaScript que estendem a classe React.Component;
- Permitem o uso de estado interno usando this.state;
- São usados para componentes mais complexos ou que precisam de ciclo de vida.

Exemplo:

```jsx
import React from "react";

class Saudacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mensagem: `Olá, ${props.nome}!` };
  }

  render() {
    return <h1>{this.state.mensagem}</h1>;
  }
}

export default Saudacao;
```

### Componentes Funcionais

Mais amplamente utilizados desde as últimas versões do React.

- São funções JavaScript que retornam elementos React (geralmente JSX ou TSX).
- São mais simples de escrever e entender.
- Usam Hooks, como **`useState`**, para gerenciar estado.

Exemplo de componente funcional:

```jsx
export function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}
```

### Vantagens de componentes funcionais em relação às classes

1. **Simplicidade:** Os componentes funcionais geralmente têm menos código e são mais fáceis de entender.
2. **Reutilização de Lógica:** Com Hooks como **`useState`** e **`useEffect`**, é mais fácil compartilhar e reutilizar lógica entre componentes funcionais.
3. **Melhor Desempenho:** Os componentes funcionais podem ser otimizados pelo React de maneira mais eficiente do que as classes.
4. **Fácil Testabilidade:** Componentes funcionais tornam os testes mais simples, pois são funções puras.
5. **Tendência Atual:** A comunidade React está migrando cada vez mais para componentes funcionais com Hooks.

Em resumo, os componentes funcionais com Hooks estão se tornando a abordagem preferida no desenvolvimento React por conta das vantagens mencionadas. No entanto, os componentes de classe são úteis principalmente em código legado ou em cenários muito específicos (Não utilizamos nos projetos atuais). Por conta disso, nas próximas seções, todos componentes mencionados serão tratados como componentes funcionais.

### Anatomia de um componente

Um componente é criado seguindo os seguintes passos:

1. Importar o React (não obrigatório mais);
2. Criar uma função com o nome desejado do componente -> É possível utilizar funções tradicionais, arrow ou até async;
3. Definir as props e seu tipo, se necessário (TypeScript);
4. Definir os Hooks utilizados, se necessário;
5. Definir funções internas, se necessário;
6. Retornar o JSX que corresponde à estrutura HTML desejada.

Definição de um componente genérico que possui todas etapas:

```jsx
// import React from "react"
import { useState } from "react";

// definição do tipo das props -> mais aprofundadas na próxima seção
// vem antes da definição do componente, mas geralmente é escrito depois
type MyComponentProps = {
  prop1: number,
  prop2: string,
};

// definição do componente (utilizando arrow function nesse caso)
// os nomes geralmente utilizam PascalCase (palavras iniciam com maiúscula, inclusive a primeira)
export const MyComponent = ({ prop1, prop2 }: MyComponentProps) => {
  // corpo do componente
  // onde ficam os hooks e as funções internas do componente

  // hook useState -> mais aprofundado nas próximas seções
  const [state, setState] = useState(prop1);
  // restante dos Hooks...

  // função interna do componente para executar ao clicar no botão
  // sim, eu gosto de arrow functions, mas não são obrigatórias
  const handleButtonClick = () => {
    setState((prevState) => prevState + 1);
  };

  // também poderia ser definida da seguinte forma:
  //function handleButtonClick() {
  //    setState(prevState => prevState + 1)
  //}
  // restante das funções internas...

  // retorno do componente
  // contém os elementos "HTML" a serem renderizados no navegador
  return (
    <div>
      {/*
        comemtários dentro do JSX devem ser feitos dessa forma
        as chaves indicam o uso de "JavaScript tradicional" dentro do jsx
        barra asterisco indicam comentário em JS, igual C ou C++
      */}
      {/* Note novamente as chaves para indicar o uso de JS, 
      acessando o valor da variável prop1 e não  texto "prop1", como anteriormente*/}
      <h1>prop1: {prop1}</h1>
      <h1>prop2: {prop2}</h1>
      <p>state: {state}</p>
      <button onClick={handleButtonClick}>Incrementar state</button>
    </div>
  );
};

// Dentro de outro componente ele seria chamado da seguinte forma:
// <MyComponent prop1={10} prop2="texto generico"/>
// Exemplo mais concreto na próxima seção
```

Dessa forma, as partes obrigatórias de um componente são apenas a sua definição e seu retorno. E caso use apenas isso (e props, opcionalmente), é possível utilizar uma sintaxe reduzida:

```jsx
type MyComponentProps = {
  prop1: number,
  prop2: string,
};

export const MyComponent = (
  { prop1, prop2 }: MyComponentProps // omissão do return em arrow functions
) => (
  <div>
    <h1>prop1: {prop1}</h1>
    <h1>prop2: {prop2}</h1>
  </div>
);
```

Por fim, também é possível definir componentes async. Sua utilidade rende uma seção inteira, mas também depende de conhecimentos sobre Server Side e Client Side, que serão apresentados quando necessário. Por hora, vale notar a sua existência:

```jsx
// Só a título de curiosidade no momento, será mais detalhado quando necessário
// Gera erro, pois asyncFunction não está definidas
const MyAsyncComponent = async () => {
  const serverValue = await asyncFuntion();

  return (
    <div>
      <h1>serverValue: {serverValue}</h1>
    </div>
  );
};
```

### Composição de componentes

Assim como elementos HTML são aninhados, componentes no JSX também são.

```jsx
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
```

Nesse exemplo o componente DedoDaMao é chamado 5 vezes dentro do componente Mao, então chamamos Mao de componente pai e DedoDaMao de componente filho. No entanto, um componente também pode ser apenas um container para outros componentes serem colocados dentro dele. Pode-se alterar o exemplo anterior para exemplificar esse comportamento:

```jsx
// não se preocupe com a sintaxe por hora
function DedoDaMao({ children }) {
  return <div>{children}</div>;
}

// a definição do componente Mao não se altera
const Mao = () => {
  return (
    <div>
      {/* chamadas do componente DedoDaMao se alteram */}
      <DedoDaMao>Polegar</DedoDaMao> {/* uma tag para abrir e outra para fechar */}
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
```

Nesse caso, Polegar, Indicador, etc também são filhos (children) de seus respectivos DedoDaMao.

Um ponto a se notar desses dois exemplos é que há muita repetição de código (mesmo que seja uma linha só). Quando progamávamos de maneira imperativa com uma linguagem de programação, caso tenha uma linha que devesse ser executada diversas vezes, utilizávamos um loop (for ou while) para que não precisássemos copiar e colar a linha N vezes. A mesma lógica pode ser aplicada para componentes no React: nos exemplos anteriores renderizamos o mesmo componente 5 vezes, com pequenas alterações, então, podemos transformar isso em um loop:

```jsx
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
```

No entanto, isso é feito pela função map, já vista na capacitaçõ de JavaScript. O exemplo acima utiliza de uma Array de dados (no caso de string, mas também poderia ser de Object ou de outro tipo qualquer) para fazer a chamada dos componentes. Note que é possível que cada componente mantenha suas particularidades de acordo com a estrutura de dado utilizada. Um ponto fundamental dessa abordagem é lembrar de utilizar a propriedade "key" no componente chamado, ela é essencial para que o React consiga diferenciar cada componente e realizar as devidas atualizações. A restrição dessa propriedade é que ela deve ser única para cada componente e manter-se a mesma em diferentes renderizações, justamente por ser utilizada como um ID para o componente.

## Estilização

Antes de tratar de assuntos mais complexos do React, vale notar as diferentes possibilidades oferecidas para a estilização dos componentes.

Estilizar componentes em React pode ser feito de várias maneiras, incluindo o uso de CSS padrão e frameworks como Tailwind CSS. Vamos explorar ambos os métodos e explicar os atributos style e className.

### O atributo style

A primeira maneira de realizar a estilização de componentes React é através do atributo `style`. Ele pode ser entendido como uma adaptação de CSS para JS e está disponível em todas tags importadas do HTML. Geralmente é utilizado para aplicar estilos inline diretamente em um elemento:

```jsx
export const MeuComponente = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "aliceblue",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#333" }}>Hello, World!</h1>
    </div>
  );
};
```

Duas coisas que podem parecer estranhas à primeira vista são a presença de dois pares de chaves no atributo style e as propriedades do CSS estarem escritas em camelCase em vez de kebab-case. Isso acontece porque os estilos são definidos, na veradde, como um objeto JavaScript. Dessa forma, o primeiro par de chaves define que o conteúdo interno deve ser interpretado como JS, o segundo se trata da sintaxe de definição de um objeto. Já o camelCase, é porque o JS não tem suporte a kebab-case, pois ele entende o símbolo "-" como operação de subtração.

Mas, justamente por se tratar de um objeto comum de JS, ele pode ser definido separadamente (Prática é mais comum em React Native):

```jsx
export const MeuComponente2 = () => {
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>Hello, World!</h1>
    </div>
  );
};

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "aliceblue",
};

const h1Style = { fontSize: "36px", color: "#333" };
```

### CSS Padrão

Também é possível utilizar arquivos CSS separados, assim como feito em HTML.

```css
// styles.css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: aliceblue;
}

.title {
  font-size: 36px;
  color: #333;
}
```

```js
import "./styles.css";

export function MeuComponente() {
  return (
    <div className="container">
      <h1 className="title">Hello, World!</h1>
    </div>
  );
}
```

A única diferença desse modo com o HTML é que o atributo em React se chama `className`, isso acontece porque a palavra `class` já é reservada em JS para definição de classes POO, então poderia ficar confuso. Alternativamente, também é possível exportar um módulo com as classes CSS:

```css
// Atenção para o nome do arquivo:
// styles.module.css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: aliceblue;
}

.title {
  font-size: 36px;
  color: #333;
}
```

```js
import styles from "./styles.module.css";

export function MeuComponente() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, World!</h1>
    </div>
  );
}
```

As únicas diferenças desse modo são o nome do arquivo CSS e a forma de utilizar as estilizações, que passam a ser tratadas como um objeto JavaScript.

### Integração com Tailwind CSS

Assim como tratado na capacitação de CSS, Tailwind se trata de uma biblioteca que facilita a estilização de componentes, tornando o processo mais rápido. Com sua crescente popularidade, logo foi possível integrá-lo com componentes React.

Primeiramente é necessário instalá-lo, caso não tenha vindo por padrão no template na criação do projeto. Para isso, siga as instruções de instalação no site oficial do Tailwind CSS:

- **npm install -D tailwindcss**: instala o pacote do tailwind.
- **npx tailwindcss init**: inicializa o tailwind, gerando os arquivos necessários de configuração.

Adicione as seguintes configurações em cada arquivo:

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // em quais arquivos é possível utiilzar o tailwind
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
// src/index.css
// utilitários básicos do tailwind
@tailwind base;
@tailwind components;
@tailwind utilities;

// é possível adicionar estilizações do css normalmente abaixo
```

Para aplicar as classes Tailwind no componente, assim como esperado, basta utilizá-las diretamente no atributo className:

```jsx
export function MeuComponente() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <h1 className="text-2xl text-gray-800">Hello, World Tailwind!</h1>
    </div>
  );
}
```

Por fim, também é possível criar módulos CSS separados com tailwind utilizando a diretiva `@apply`:

```css
// styles.module.css
.container {
  @apply flex justify-center items-center h-screen bg-blue-100;
}

.title {
  @apply text-2xl text-gray-800;
}
```

```jsx
import styles from "./styles.module.css";

export function MeuComponente() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, World Tailwind 2!</h1>
    </div>
  );
}
```

## Props (Propriedades)

Assim como uma função pode receber parâmetros para seu funcionamento, um componente também pode. Porém, nesse caso, os parâmetros recebidos são todos armazenados em um único Objeto chamado props (propriedades). Elas são um mecanismo fundamental no React para passar dados de um componente pai para um componente filho, permitindo a comunicação entre componentes e a transferência de informações relevantes.

Para utilizar, basta incluir como parâmetro na função. Por exemplo:

```jsx
type DedoDaMaoProps = {
  cor: string,
  nome: string,
};

function DedoDaMao(props: DedoDaMaoProps) {
  return (
    <div style={{ backgroundColor: props.cor, fontWeight: "bold" }}>
      {props.nome}
    </div>
  );
}

export const Mao = () => {
  return (
    <div>
      <DedoDaMao nome="Dedo Polegar" cor="red" />
      <DedoDaMao nome="Dedo Indicador" cor="orange" />
      <DedoDaMao nome="Dedo Médio" cor="yellow" />
      <DedoDaMao nome="Dedo Anelar" cor="green" />
      <DedoDaMao nome="Dedo Mínimo" cor="blue" />
    </div>
  );
};
```

Neste exemplo, o componente **`DedoDaMao`** recebe **`nome`** e **`cor`** como props e exibe o nome do dedo com a cor de fundo correspondente.

### Desestruturação de Props

É possível desestruturar props em componentes para tornar o código mais limpo.

```jsx
function DedoDaMao({ nome, cor }: DedoDaMaoProps) {
  return <div style={{ backgroundColor: cor }}>{nome}</div>;
}
```

### Props Padrão (Default Props)

Também é possível definir valores padrão para props usando a propriedade **`defaultProps`**, fornecendo valores padrão para props caso não sejam especificadas ou obrigatórias.

```jsx
function DedoDaMao({ nome, cor }: DedoDaMaoProps) {
  return <div style={{ backgroundColor: cor }}>{nome}</div>;
}

DedoDaMao.defaultProps = {
  cor: "purple", // Valor padrão para a cor
};
```

Alternativamente, também é possível utilizar o próprio destruct para isso, deixando os valores padrão junto das props:

```jsx
// Nesse caso é importante definir a propriedade como opcional, para que o TypeScript aceite
// a chamada do componente sem a propriedade. Com default props, não é necessário
type DedoDaMaoProps = {
  cor?: string,
  nome: string,
};

function DedoDaMao({ nome, cor = "grey" }: DedoDaMaoProps) {
  return <div style={{ backgroundColor: cor }}>{nome}</div>;
}
```

Em ambos casos, se a prop **`cor`** não for fornecida ao usar o componente **`DedoDaMao`**, ela terá o valor padrão "cinza".

### Utilizando TypeScript

O TypeScript adiciona várias funcionalidades ao React, uma delas é que ao chamar um componente que possui props, é possível ver as props que ele espera receber e quais são seus tipos, mostrando um erro caso o que for passado seja diferente do que era esperado. Dessa forma, é sempre bom utilizá-lo.

```jsx
type DedoDaMaoProps = {
  nome: string,
  cor: string,
};

function DedoDaMao({ nome, cor = "cinza" }: DedoDaMaoProps) {
  return <div style={{ backgroundColor: cor }}>{nome}</div>;
}
```

Utiliza-se a convenção de definir o tipo das props com o nome do componente seguido de "Props", logo acima da definição do componente.

Vale notar que em todos exemplos a chamada do componente não se altera:

```jsx
export const Mao = () => {
  return (
    <div>
      <DedoDaMao nome="Dedo Polegar" cor="vermelho" />
      <DedoDaMao nome="Dedo Indicador" cor="azul" />
      <DedoDaMao nome="Dedo Médio" cor="verde" />
      <DedoDaMao nome="Dedo Anelar" cor="amarelo" />
      <DedoDaMao nome="Dedo Mínimo" />{" "}
      {/* nos exemplos com default props, gera um dedo roxo ou cinza, nos outros, gera erro */}
    </div>
  );
};
```

### Children

As children mostradas na seção anterior, na verdade, também são props e para utilizá-las basta incluir:

```jsx
import { PropsWithChildren } from "react";

// mesclagem de tipos do TypeScript
type DedoDaMaoProps = PropsWithChildren & {
  cor?: string,
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
```

Vale notar que children representam React Nodes - qualquer elemento do JSX renderizável, sendo os imbutidos do HTML ou componentes criados em outros arquivos. Por conta disso, nem sempre é possível prever o que vai ser passado como children. Por exemplo, nesse caso, por conta da forma que foi estruturado, se espera o nome do dedo como children, podendo até ser um elemento h1, h2, p ou texto direto. Porém se quem for utilizar o componente DedoDaMao passar um input ou um form, provavelmente não vai ter o resultado esperado. Dessa forma, é importante entender que children tem um uso bem restrito, quando realmente não importar o que vai ser passado, um container com algumas estilizações, por exemplo.

## React Hooks

### Características e limitações

Antes de iniciarmos com os Hooks do React, é preciso destacar algumas características importantes sobre eles:

1. Normalmente são funções importadas direto do React, mas é possível criar os próprios;
2. Devem ser executados sempre na mesma ordem em diferentes renderizações, ou seja, devem estar no topo do componente e não podem estar dentro de loops ou condicionais;
3. Na maioria dos casos, tornam o componente Client Side;

### 1. `useState`

Outra característica muito importante de um componente no React são seus estados. Eles podem ser tratados como "variáveis especiais", que, quando alteradas, desencadeiam um processo de re-renderização do componente (nem sempre sendo necessário re-renderizar a página inteira). Re-renderizar significa recarregar o componente, gerando uma nova interface, possivelmente com a aparência um pouco diferente. Mas por que isso é tão importante? Justamente para que o que for mostrado na tela possa ser alterado: não é possível alterar um título ou parágrafo, por exemplo, na tela sem que ele seja recarregado. Porém isso também pode se tornar um problema se não utilizado corretamente, gerar diversas re-renderizações causam bugs e afetam a fluidez do site.

Os estados, em componentes funcionais, são gerenciado pelo **`useState`**. Tornando os componentes dinâmicos e capazes de reagir a ações do usuário (interativos). Ele retorna um par de valores: o valor atual do estado e uma função para atualizar esse estado.

```jsx
import { useState } from "react";

export function Mao() {
  // Inicializa o estado com "aberta" como valor padrão
  const [estadoDaMao, setEstadoDaMao] = useState("aberta");

  return (
    <div>
      <p>Estado da Mão: {estadoDaMao}</p>
      <button onClick={() => setEstadoDaMao("aberta")}>Abrir Mão</button>
      <button onClick={() => setEstadoDaMao("fechada")}>Fechar Mão</button>
    </div>
  );
}
```

Neste exemplo, usamos o **`useState`** para criar o estado **`estadoDaMao`** e inicializá-lo com o valor "aberta". Em seguida, usamos botões para permitir que o usuário abra ou feche a mão. A função **`setEstadoDaMao`**, acionada ao pressionar o botão, é usada para atualizar o estado criado, re-renderizando o componente com o novo valor.

Nesse momento, algumas perguntas devem estar passando pela cabeça:

1. Que sintaxe doida é essa?
2. Como um valor const é alterado?
3. Por que eu preciso de uma função para alterar o valor de uma variável?
4. Por que eu não posso simplesmente usar uma variável "let" qualquer?

Respostas:

1. Primeiramente, essa sintaxe é apenas a utilização da operação de desestruturação do JavaScript, ou seja, na verdade, a função useState retorna um array, que é muito comumente separado, logo na atribuição, no estado atual e na função para alterar esse estado.
2. O valor const é alterado nesse caso, porque dentro da sua implementação, o React cuida das variáveis de estado um componente separadamente e apenas retorna o valor mais atual do estado através da função useState, que em cada renderização será constante. Além disso, para impossibilitar que o usuário altere o valor diretamente, sem utilizar a função. OBS: Por conta da natureza declarativa do React, as variáveis na maioria das vezes serão const, com raras exceções que utilizam let.
3. Essa função de alteração do estado é necessária para que o React saiba que o valor foi alterado e inicie o processo de re-renderização da página.
4. E, justamente por conta disso, não é possível utilizar uma variável qualquer como estado, o React precisa inicializar as ferramentas necessárias e saber de todas alterações no valor para que funcione como esperado.

#### A função de atualização

A função de atualização do estado pode, na verdade, ser utilizada de duas formas:

- Passando um novo valor (como no exemplo anterior)
- Utilizando uma função para atualizar o valor

Para explicar melhor essa segunda opção, pense em um componente contador:

```jsx
import { useState } from "react";

export const Contador = () => {
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
```

E se desejasse alterar o valor de dois em dois? Uma maneira utilizar o seguinte código:

```jsx
import { useState } from "react";

const Contador = () => {
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
```

No entanto, ao rodar, pode-se perceber que o valor é alterado apenas uma vez, porque, na segunda chamada da função, o React está passando o mesmo valor que na primeira. Isso acontece porque o estado ainda não foi de fato atualizado (ainda não aconteceu a re-renderização). Pode-se corrigir o problema da seguinte forma:

```jsx
import { useState } from "react";

const Contador = () => {
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
```

Nesse exemplo, é utilizada uma função arrow anônima dentro da atualização do estado. Ela recebe como parâmetro sempre o estado mais recente e retorna o estado novo para fazer a alteração. Dessa maneira, o React consegue entender que tem um valor mais atual que o que está na tela, e utiliza ele na segunda chamada da função, ocasionando o efeito desejado: um incrmento de dois com apenas um clique. Por conta da possibilidade desse comportamento indesejado, sempre que um estado depender do valor anterior é uma boa prática utilizar esse método para atualizar o valor.

Claro, isso também poderia, e em uma situação real deveria, ser feito trocando o +1 por +2. Esse exemplo foi dado por fins didáticos, caso aconteça alguma situação em que seja realmente preciso chamar a função mais de uma vez antes da re-renderização (é mais fácil de acontecer do que se imagina a princípio).

Outro aspecto importante da função de atualização é que, para melhor otimização, antes de disparar a re-renderização, ela faz uma comparação rasa entre o estado atual e o estado novo passado para a atualização, caso os estados forem "iguais", não é necessário re-renderizar o componente. Essas aspas em "iguais", justamente por conta da comparação rasa: ela apenas verifica se os estados apontam para endereços de memória distintos. Ou seja, para variáveis "simples" (number, string, etc) funciona perfeitamente, para variáveis mais "complexas" (Arrays, Objetos, etc) é preciso ter um pouco mais de atenção e fazer uma cópia do estado, para forçar que, na hora de atualizar, eles apontarão para lugares distintos na memória. Nas próximas seções serão apresentados exemplos para demonstrar esse funcionamento.

#### Uso de Múltiplos Estados

Você pode usar **`useState`** várias vezes em um componente para gerenciar múltiplos estados independentes. Por exemplo, para gerenciar o estado de cada dedo da mão:

```jsx
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
```

Neste exemplo, cada dedo da mão tem seu próprio estado independente gerenciado pelo **`useState`**, permitindo que você abra e feche cada dedo separadamente. Alternativamente, em situações em que as informações são correlacionadas, é possível utilizar variáveis mais complexas como Objeto ou Array para controlar os estados.

```jsx
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
```

Note que para atualizar um estado que utiliza objeto, é preciso fazer o destructing e spreading do estado, ou seja, uma cópia. Isso é necessário por conta da comparação relizada pela função de atualização de estado, apresentada anteriormente. Por isso que utilizar algo como `setDedos(dedosPrev => dedosPrev.dedo2 = "fechado")` não funciona, porque o objeto continuaria com o mesmo endereço de memória, fazendo com que o React entenda que não é preciso atualizar o estado. Para contornar esse problema, é criado um novo objeto, copiando seus valores e adicionando o novo valor que deseja atualizar, nessa ordem.

O mesmo se aplica para Arrays:

```jsx
import { useState } from "react";

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
```

Outra abordagem típica para Objects ou Arrays é criar uma cópia do estado, fazer as alterações necessárias e posteriormente passar essa cópia para a função de atualização. Por exemplo:

```jsx
import { useState } from "react";

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
```

OBS: Lembre-se das cópias rasas e cópias profundas ao trabalhar dessa maneira, evita uma grande dor de cabeça pensar nisso.

Outra consequência da comparação rasa realizada na atualização de estado é que trabalhar com estados que possuem aninhamento de Objetos e/ou Arrays muitas vezes gera bugs difíceis de contornar, então, se possível, é bom evitar essa prática. Alternativamente, é possível utilizar o Hook useReducer, que tem uma abordagem diferente.

#### Integração com TypeScript

Nos exemplos apresentados anteriormente, o Hook useState recebeu um parâmetro, referente ao valor inicial para o estado, porém isso não é obrigatório. Algo como:
`const [state, setState] = useState()` é válido (tirando o nome ruim para o estado).

Ao passar um valor inicial para o estado, geralmente o TypeScript consegue inferir o tipo corretamente:

```jsx
import { useState } from "react";

export const Contador = () => {
  // o TypeScript entende perfeitamente que contagem será um number e que setContagem deverá receber um number
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
```

Porém, caso não deseje incializar o estado, é possível utilizar o generics do TypeScript para informar qual será o tipo:

```jsx
import { useState } from 'react';

export function Mao() {
    const [estadoDaMao, setEstadoDaMao] = useState<string>();

    return (
        <div>
            <p>Estado da Mão: {estadoDaMao}</p>
            <button onClick={() => setEstadoDaMao("aberta")}>Abrir Mão</button>
            <button onClick={() => setEstadoDaMao("fechada")}>Fechar Mão</button>
        </div>
    );
}
```

Nesse caso, o estadoDaMao poderá adquirir qualquer valor desde que seja uma string. Para limitar um pouco mais isso, nesse cenário, podemos utilizar um Union Type:

```jsx
import { useState } from 'react';

export function Mao() {
    const [estadoDaMao, setEstadoDaMao] = useState<"aberta" | "fechada">();

    return (
        <div>
            <p>Estado da Mão: {estadoDaMao}</p>
            <button onClick={() => setEstadoDaMao("aberta")}>Abrir Mão</button>
            <button onClick={() => setEstadoDaMao("fechada")}>Fechar Mão</button>
        </div>
    );
}
```

Dessa forma, ao tentar passar qualquer valor para o estado diferente de "aberta" ou "fechada", o TypeScript irá gerar um erro.

Por fim, um último ponto que vale ser mencionado é que, ao utilizar tipos criados por você, é uma boa prática passar o generics para o useState também, para evitar possíveis problemas:

```jsx
import { useState } from "react";

type Dedos = {
  // define a chave como qualquer string e o valor como "aberto" ou "fechado"
  ["key": string]: "aberto" | "fechado",
};

export function DedoDaMao({ nome }) {
  const [dedos, setDedos] =
    useState <
    Dedos >
    {
      dedo1: "aberto",
      dedo2: "aberto",
    };

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
```

#### Conclusão

O Hook **`useState`** é uma ferramenta poderosa para gerenciar estados em componentes, sendo amplamente utilizado nas aplicações. No entando, possui vários detalhes que devem ser lembrados. Então, ao desenvolver algo mais complexo, inicialmente, é bom voltar a esse guia caso surja alguma dúvida relacionada e sempre entrar em contato com os membros responsáveis pela capacitação caso tenha dificuldade, é de extrema importância não deixar as dúvidas acumularem.

### 2. useEffect

Com o useState é possível fazer com que componentes re-renderizem, atualizando sua aparência na tela. Imagine agora que, além de renderizar novamente o componente, também seja necessário realizar uma ação sempre que um determinado valor for alterado. Isso se chama **efeitos colaterais** e é justamente a utilidade principal do Hook useEffect, por isso o nome.

Efeitos colaterais comuns são chamadas de APIs, adição de eventListeners, manipulações de DOM (com React puro), entre outros. Ele é essencialmente uma forma de executar um determinado código após a renderização do componente. Sua estrutura completa é a seguinte:

```jsx
import { useState, useEffect } from "react";

export function MeuComponente() {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");

  useEffect(
    () => {
      // Código a ser executado após a renderização
      console.log("O item1 ou o item2 foi alterado");

      return () => {
        // Código de limpeza do efeito
      };
    },
    [item1, item2] /* Array de dependências */
  );

  return (
    <div>
      <h1>
        Meu Componente - {item1}, {item2}
      </h1>
      <button onClick={() => setItem1("Qualquer coisa")}>Alterar item 1</button>
      <button onClick={() => setItem1("Outra coisa")}>Alterar item 1</button>
      <button onClick={() => setItem2("Terceira coisa")}>Alterar item 2</button>
    </div>
  );
}
```

A parte do useState já ficou mais simples de entender, porém a quantidade de aninhamentos do useEffect acabam atrapalhando um pouco a compressão no primeiro contato, então vamos dar um passo para trás e analisá-lo por partes.

#### Uso básico

Assim como qualquer outro Hook, o useEffect não passa de uma função do JavaScript. Nesse caso, diferentemente do useState, ele não retorna nenhum valor, porém possui dois parâmetros obrigatórios: O primeiro deles é a função que deve ser executada após a renderização do componente, podendo ser assíncrona ou não. Porém, não queremos que a função execute absolutamente todas as vezes que o componente re-renderizar, então o segundo parâmetro é um Array de dependências, ou seja, as variáveis (normalmente estados) que, quando alteradas, ocasionam a execução da função passada no primeiro parâmetro.

```jsx
import { useState, useEffect } from "react";

export function Mao() {
  const [estadoDaMao, setEstadoDaMao] = useState("aberta");

  useEffect(async () => {
    // código que representa uma chamada de API -> não funciona de vdd
    await fetch(`https://exmachina/mover-protese/${estadoDaMao}`);
  }, [estadoDaMao]);

  return (
    <div>
      <p>Estado da Mão: {estadoDaMao}</p>
      <button onClick={() => setEstadoDaMao("aberta")}>Abrir Mão</button>
      <button onClick={() => setEstadoDaMao("fechada")}>Fechar Mão</button>
    </div>
  );
}
```

Esse exemplo segue o que já vinha sendo trabalhado anteriormente, no entanto agora, toda vez que o estadoDaMao mudar para "aberta" ou "fechada", o componente, além de atualizar o valor na tela, também executará uma chamada a uma API fictícia responsável por de fato abrir ou fechar a mão da prótese. Vale destacar que a primeira vez que o componente renderiza, a função também é executada.

Vale destacar que variáveis "let" comuns do JavaScript não desencadeiam a execução da função, pois não são gerenciadas pelo React e não causam re-renderização do componente quando alteradas, porém, existem casos em que é interessante utilizar as props como dependência.

```jsx
import { useState, useEffect } from "react";
import axios from "axios";

type Repository = {
  name: string;
  id: number;
};

export function MeuComponente() {
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // GitHub fornece um limite de 60 chamadas por hora sem autenticação
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setRepositories(
          response.data.map((repo: Repository) => ({
            name: repo.name,
            id: repo.id,
          }))
        );
      } catch (err) {
        console.log("Usuario não encontrado!");
      }
    };

    console.log("Buscando dados...");
    fetchData();
  }, [username]);

  return (
    <div>
      <p>Usuario do GitHub:</p>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      {repositories.map((repo) => (
        <h2 key={repo.id}>
          {repo.id}: {repo.name}
        </h2>
      ))}
    </div>
  );
}
```

Nesse exemplo, é utilizada uma API verdadeira, sendo possível passar um nome de usuário do GitHub e obter seus repositórios.

#### Inicialização do componente

Em alguns casos, é preciso que a função seja executada apenas uma vez, assim que o componente renderizar a primeira vez na tela. Isso pode ser feito passando um Array vazio de dependências, fazendo com que não tenha variáveis que ocasionem a re-execução da função.

```jsx
import { useState, useEffect } from "react";
import axios from "axios";

type Repository = {
  name: string;
  id: number;
};

export function MeuComponente() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    // GitHub fornece um limite de 60 chamadas por hora sem autenticação
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.github.com/users/Ex-Machina-Unifei-Oficial/repos`
      );
      setRepositories(
        response.data.map((repo: Repository) => ({
          name: repo.name,
          id: repo.id,
        }))
      );
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Repositórios Ex Machina:</p>
      {repositories.map((repo) => (
        <h2 key={repo.id}>
          {repo.id}: {repo.name}
        </h2>
      ))}
    </div>
  );
}
```

Essa funcionalidade era muito comumente utilizada quando era necessário chamar uma determinada API uma única vez para que o componente carregasse suas informações. "Era" por conta dos componentes assíncronos introduzidos na versão 18 do React, que permitem essa chamada diretamente dentro do componente (mais detalhes sobre isso na capacitação de Next).

#### Limpeza de efeitos

Em alguns casos é necessário que haja uma limpeza quando o componente deixar de ser renderizado na tela (troca de página dentro da aplicação, por exemplo), essa limpeza é realizada pelo retorno da função passada como parâmetro.

```jsx
import { useEffect, useState } from "react";

const MeuComponente1 = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Intervalo executado");
    }, 3000);

    // Função de limpeza
    return () => {
      clearInterval(timer);
      console.log("Intervalo limpo");
    };
  }, []);

  return <h1>Meu componente 1 renderizado</h1>;
};

const MeuComponente2 = () => {
  return <h1>Meu componente 2 renderizado</h1>;
};

export function MeuComponente() {
  const [comp, setComp] = useState(1);

  return (
    <div>
      <button onClick={() => setComp((comp) => (comp === 1 ? 2 : 1))}>
        Toggle Comp
      </button>
      {comp === 1 ? <MeuComponente1 /> : <MeuComponente2 />}
    </div>
  );
}
```

Esse exemplo fará com que o console imprima "Intervalo executado" após 3 segundos da renderização do `MeuComponente1` (muito útil para um componente que seja um timer, por exemplo), porém se o usuário deixar de renderizar o componente antes disso, a mensagem não aparecerá, pois a função de limpeza será executada e imprimirá "Intervalo limpo" no lugar. Tente comentar o return dentro do useEffect e perceba que mesmo se `MeuComponente1` deixar de ser renderizado, ainda aparecerá a mensagem no console.

OBS: a função setTimeout do JavaScript permite a execução de uma função (primeiro parâmetro) após um intervalo de N milissegundos (segundo parâmetro). A função clearInterval, também nativa do JS, interrompe a execução de alguma função passada no setTimeout.

#### Conclusão

Dessa forma foram abordados os principais casos de uso do useEffect: ao renderizar o componente pela primeira vez, ao renderizar o componente por conta da mudança de algum estado e ao deixar de renderizar o componente (limpeza). Há uma discussão na comunidade quanto ao uso desse Hook, porque ele apresenta 3 utilidades distintas, ou seja, ele possui as 3 reponsabilidades mencionadas, quebrando o S do SOLID - Single Responsability. Em componentes de classe, cada uma das utilidades eram definidas por funções distintas. No entanto, não é algo que dependa de nós meros desenvolvedores e ainda existem vários casos que é necessário utilizá-lo.

Uma última atenção deve ser tomada ao passar as dependências para o useEffect, garantindo que todas estejam lá e que não haja nenhuma desnecessária. Não fazer isso de forma correta pode gerar ciclos infinitos de renderização, quebrando a aplicação desenvolvida (literalmente, o React detecta quando isso acontece e interreompe a execução).

### 3. Hooks Adicionais

#### useContext - Gerenciamento de Contexto

O **`useContext`** é um Hook do React que permite acessar valores do contexto em componentes funcionais. Isso é especialmente útil quando você deseja compartilhar dados ou configurações em toda a árvore de componentes sem a necessidade de passá-los manualmente como props. Vamos considerar um exemplo com a UNIFEI:

```jsx
import { createContext, PropsWithChildren, useContext } from "react";

// Criando um contexto para armazenar informações da UNIFEI
const UNIFEIContext = createContext({ nome: "", localizacao: "" });

// Componente que fornece informações da UNIFEI via contexto
function UNIFEIProvider(props: PropsWithChildren) {
  const unifeiData = {
    nome: "Universidade Federal de Itajubá",
    localizacao: "Itajubá, MG",
  };

  return (
    <UNIFEIContext.Provider value={unifeiData}>
      {props.children}
    </UNIFEIContext.Provider>
  );
}

// Componente que consome informações da UNIFEI via useContext
function UNIFEIInfo() {
  const unifei = useContext(UNIFEIContext);

  return (
    <div>
      <h2>{unifei.nome}</h2>
      <p>Localização: {unifei.localizacao}</p>
    </div>
  );
}

// Uso dos componentes
export function MeuComponente() {
  return (
    // É necessário que o Provider seja pai do componente que utiliza as informações
    <UNIFEIProvider>
      <div>
        <h1>Informações da UNIFEI</h1>
        <UNIFEIInfo />
      </div>
    </UNIFEIProvider>
  );
}
```

Neste exemplo, usamos **`useContext`** para acessar as informações da UNIFEI fornecidas pelo componente **`UNIFEIProvider`**.

#### useRef - Referências a Elementos DOM

O **`useRef`** é um Hook que permite criar referências a elementos DOM em componentes funcionais. Isso é útil quando você precisa interagir diretamente com elementos DOM, como no caso de acessibilidade. Vamos considerar um exemplo relacionado à prótese de mão do projeto Ex Machina:

```jsx
import { useRef } from "react";

export function Mao() {
  const dedoRef = (useRef < HTMLDivElement) | (null > null);

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
```

Neste exemplo, usamos **`useRef`** para criar uma referência ao elemento DOM do dedo da prótese de mão. Ao clicar no botão, a cor de fundo do dedo é alterada usando a referência.

#### useReducer - Gerenciamento de Estados Mais Complexos

O **`useReducer`** é um Hook que permite gerenciar estados mais complexos em componentes funcionais, usando uma abordagem semelhante à API **`Reducer`** do Redux. Com o reducer, o estado acaba se transformando em uma Máquina de Estados propriamente dita. Vamos considerar um exemplo relacionado à prótese de mão do projeto Ex Machina:

```jsx
import { useReducer } from "react";

// estados do reducer
type dedoState = {
  aberto: boolean,
};

// possiveis ações do reducer
type dedoAction = {
  type: "ABRIR" | "FECHAR",
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
```

Neste exemplo, usamos **`useReducer`** para gerenciar o estado do dedo da prótese de mão. O estado é atualizado com base nas ações de abrir e fechar o dedo, controlando o estado de abertura/fechamento do dedo. Nesse caso acaba apenas adicionando complexidade a mais para uma situação que poderia ser resolvida facilmente com useState, no entanto é muito útil para gerenciar estados complexos e transições em componentes funcionais.

### 4. Criando Seus Próprios Hooks

Em alguns casos, os Hooks nativos do React acabam ficando um pouco limitados com relação às suas funcionalidades, sendo preciso reescrever a mesma lógica em vários componentes. Existe uma grande chance de que em algum momento algo irá mudar e toda essa lógica deverá ser reescrita, então, em casos assim, deverá ser procurado e alterado o código escrito em cada arquivo. Para evitar esse tipo de problema, é possível criar Hooks customizados.

Criar um Hook customizado em React permite encapsular uma lógica de estado ou efeito que pode ser reutilizada em vários componentes, sendo necessário, caso precise, alterar o código em apenas um lugar. Um hook customizado nada mais é que uma função que usa um ou mais hooks internos (como useState, useEffect, etc.) e retorna valores ou funções para serem usados em outros componentes. Por padrão, os Hooks seguem o nome "useAlgumaCoisa", devem seguir todas restrições de Hooks nativos e geralmente possuem uma pasta própria, fora de "Components".

Por exemplo, podemos criar um Hook que sempre possui o valor atual da janela, que pode ser útil em diversos componentes:

```js
import { useState, useEffect } from "react";

type WindowSize = {
  width: number,
  height: number,
};

export function useWindowSize() {
  const [windowSize, setWindowSize] =
    useState <
    WindowSize >
    {
      width: window.innerWidth,
      height: window.innerHeight,
    };

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

  // retorna os valores que serão acessados pelos componentes
  return windowSize;
}
```

Agora o Hook useWindowSize pode ser utilizado em qualquer componente para obter as dimensões da janela, sempre atualizadas:

```jsx
import { useWindowSize } from ".../useWindowSize";

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
```

## Conclusão

Isso encerra a parte fundamental de React, que será, em geral, válida para qualquer ambiente: apenas React, NextJS (e outros frameworks) e React Native. No Ex Machina, não temos o costume de utilizar React puro e as peculiaridades de cada ambiente serão tratadas em suas próprias capacitações, assumindo o conhecimento dessa parte inicial.

## conteúdos complementares

[React: o que é, como funciona e um Guia da biblioteca JS | Alura](https://www.alura.com.br/artigos/react-js)
