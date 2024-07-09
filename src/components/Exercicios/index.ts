/*
Os exercícios a seguir devem ser resolvidos sempre utilizando TypeScript (.tsx) 
em um arquivo ou pasta para cada compoenente criado. Utilize o arquivo "App.tsx" para chamar e testar 
os componentes criados, um por vez. Dê preferência para utilizar nomes em inglês.
*/

// 1) Crie um componente funcional chamado "Greeting" que renderiza uma mensagem de saudação. Adicione uma
// estilização básica do componente, com style.
// a) Utilizando uma function
// b) Utilizando uma arrow function

// 2) Modifique o componente "Greeting" para aceitar as props name e age e exibí-las junto com a mensagem.
// Lembre-se de adicionar o tipo GreetingProps

// 3) Crie uma lista de strings constante (use a criatividade). Crie um componente pai "ListContainer",
// que transforma a lista em componentes filhos "ListItem", que deve exibir na tela o indice do item e
// a string original. Adicione uma estilização básica do componente, com Tailwind.
// Dicas: uitilize a função map. Para o ItemList, é possível receber uma prop index e uma prop name
// ou apenas uma prop name. No último caso, a string deve ser alterada dentro do map para conter o índice.

// 4) Modifique a lista criada no exercício anterior e os componentes "ListContainer" e "ListItem"
// para trabalharem com um uma lista de objetos com pelo menos dois atributos, que devem ser mostrados na tela.
// Se tiver sem criatividade, uma sugestão é fazer uma lista de matérias com name e grade.
// Lembre-se de adicionar o tipo do objeto criado.

// 5) Crie um componente "Countdown" que decrementa um valor de 10 a 0 a cada clique em um botão.
// Toda vez que o usário clicar, deve aparecer uma mensagem no console. Utilize useState e useEffect.
// a) Faça com que o botão seja desativado quando o valor chegar a 0.

// 6) Crie um componente "Random" que sorteia um número de 0 a 100 e mostra na tela ao clicar em um botão.
// Utilize o hook useState.
// a) Altere o componente para sortear um item em uma lista recebida por props.

// 7) Crie um componente "ToggleText" que alterna entre exibir dois textos diferentes quando um botão é clicado.
// Adicione uma estilização básica do componente, com CSS.

// 8) Crie um componente "CheckText" que deve conter uma checkbox (procure na internet qual tag html utilizar)
// e um texto. Ao marcar a checkbox o texto deve ser riscado, ao desmarcar, o texto deve voltar ao normal.

// 9) O intuito desse exercício é mostrar que um componente filho pode alterar o estado de um componente pai.
// Para isso, crie um componente "Parent" com o estado (text, setText) e um componente filho "Child" com
// um input e um botão. Adiciona uma estilização básica, com qualquer ferramenta, para que seja possível
// distinguir o componente pai do filho. o componente Child deve receber como prop a função "setText",
// para que possa atualizar o estado do pai. o componente Parent deve mostrar o valor de text na tela,
// que deve ser alterado através do input de Child.

// 10) Crie um componente "LoginForm" com campos de entrada para usuário e senha e um botão para enviar.
// Ao clicar no botão, utilize a função "alert" para mostrar o usuário e senha digitados.

// 11) Crie um componente "Timer" que exibe o tempo passado, em segundos, desde que o componente foi renderizado,
// usando useEffect para atualizar o tempo.

// 12) Crie um componente "DataFetcher" que busca dados de uma API quando o componente é renderizado
// e exibe esses dados. Não copie e cole o exemplo na documentação, tente fazer sozinho para fixar.

// 13) Crie um custom hook "useMousePosition" que retorna a posição atual x e y do mouse. Os valores
// devem ser atualizados quando o mouse mexer. Crie um componente simples para testar a funcionalidade.
// Dica: utilize o evento "mousemove", ele possui os atributos clientX e clientY.

// 14) Utilize as lógicas criadas nos exerícios 4, 8 e 9 para criar uma lista de tarefas:
// renomeie o componente "ListContainer" para "TodoList", que deve receber uma lista de tarefas iniciais.
// o componente "ListItem" deve exibir o indice da tarefa e funcionar igual o "CheckText", no entanto, apenas
// "TodoList" deve ter um estado contendo a lista de tarefas, o componente "ListItem" não deve ter estados próprios.

// Dicas:
// type Chore = {
//  name: string
//  done: boolean
// }
// const initialChores = [{"Do the dishes", false}, {"Study React", true}, {"Walk the dog", false}]
// dentro de TodoList: const [chores, setChores] = useState(inicialChores)

// 15) Faça com que seja possível adicionar novas tarefas ao "TodoList": para isso crie um componente "NewChore",
// que deve conter um input e um botão para adicionar. Utilize a função append para adicionar um novo item ao estado
// "chores", lembre-se que é necessário utilizar a função "setChores".
// Desafio: faça com que uma tarefa se mova para o final da lista ao ser marcada como feita e volte para o topo,
// caso seja desmarcada.

// 16) Desafio: Crie um arquivo JSON para armazenamento e leitura das tarefas, fazendo com que os dados persistam
// após o recarregamento da página ou reinicialização do servidor

// qualquer arquivo deve ter um export
export {};
