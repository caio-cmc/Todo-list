# To-Do List App
#### Este é um projeto de aplicativo de lista de tarefas construído com React Native. O aplicativo permite que os usuários adicionem, excluam e marquem tarefas como concluídas, além de alternar entre temas claro e escuro.

## Funcionalidades
* Adicionar novas tarefas com título e descrição.
* Marcar tarefas como concluídas ou pendentes.
* Filtrar tarefas por status (todas, completas, incompletas).
* Excluir e editar tarefas.
* Barra de progresso para acompanhar a porcentagem de tarefas concluídas.
* Alternar entre os modos de tema claro e escuro.
* As tarefas são salvas localmente usando o AsyncStorage, bem como o tema, garantindo que os mesmos persistam entre sessões.

## Tecnologias Utilizadas
* #### React Native - Estrutura principal para construir o aplicativo.
* #### TypeScript - Utilizado para tipagem estática no projeto.
* #### Context API - Gerenciamento de estado global.
* #### AsyncStorage - Persistência de dados local no dispositivo do usuário.

## Instalação e Execução
#### Pré-requisitos
* Node.js
* npm ou yarn
* Expo CLI
* App Expo Go no celular

## Passos para rodar o projeto
Clone o repositório:
```
git clone git@github.com:caio-cmc/Todo-list.git
```
Navegue até o diretório do projeto:
```
cd Todo-list
```
Instale as dependências:
```
npm install
```
ou
```
yarn install
```
Inicie o projeto
```
npm start
```
Espere o comando iniciar e no aplicativo Expo go no seu celular leia o QR Code na tela!

## Exemplos de Uso
#### Adicionar uma Tarefa
O usuário pode adicionar uma nova tarefa, fornecendo um título (obrigatoriamente) e uma descrição (opcional), clicando no botão "+".

<img src="/assets/addTask.gif">

#### Alternar Modo Escuro/Claro
Basta clicar no cacho de uvas para alternar entre o modo escuro e o modo claro. Esta configuração é salva localmente e aplicada automaticamente nas próximas execuções.

<img src="/assets/darkmode.jpeg">
<img src="/assets/lightmode.jpeg">
<img src="/assets/themetoggle.gif">

#### Barra de Progresso
A barra de progresso indica a porcentagem de tarefas concluídas, que é animada conforme a conclusão de novas tarefas.

<img src="/assets/progress.gif">

#### Edição e exclusão de tarefas
Ao lado de cada uma das tarefas, existem dois botões, um para a exclusão de tarefas e outro para a edição. Caso o usuário tente editar uma tarefa com o espaço de nova tarefa ou descrição preenchidos, um alerta aparecerá na tela informando ao usuário que termine de criar a nova tarefa antes de editar. 

<img src="/assets/warning.gif">

#### Filtro de tarefas
Consiste em um dropdown onde podemos filtrar as tarefas em completas, incompletas e todas as tarefas. 

<img src="/assets/filter.gif">

## Decisões técnicas

Neste projeto, tomei decisões focadas em otimização de código e eficiência no desenvolvimento. Por exemplo, utilizei componentes reutilizáveis, como o componente de tarefas, que é renderizado repetidamente à medida que novos itens são adicionados à lista. Isso não só melhora a organização do código, mas também facilita a manutenção e a escalabilidade da aplicação.

Com foco na experiência do usuário, implementei uma barra de progresso animada que cresce e muda de cor conforme as tarefas são concluídas. Para isso, explorei o uso da Animated API do React Native, uma funcionalidade que eu ainda não havia utilizado, assim enriquecendo não só a interação visual do app, mas também meus conhecimentos técnicos.

Outra decisão técnica relevante foi armazenar o estado do tema (modo claro ou escuro) no AsyncStorage. Isso garante que a preferência do usuário seja preservada entre sessões, aumentando a satisfação por não precisar reconfigurar manualmente a interface sempre que o aplicativo for aberto.
## 
 
A aplicação pode não ser otimizada para tablets ou dispositivos com diferentes tamanhos de tela.

O AsyncStorage não criptografa os dados localmente, então deve-se tomar cuidado com a confidencialidade das informações.
