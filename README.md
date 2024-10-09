# Atividade-02-Componentes---Front-end

Este projeto foi desenvolvido em **React** com **TypeScript**, e aborda as características do personagem **Pantera Negra**, um dos super-heróis mais icônicos da Marvel. O objetivo é praticar a criação de componentes reutilizáveis e responder algumas questões solicitadas com base na estrutura e funcionalidade do projeto.

## Estrutura do Projeto

O projeto consiste em vários componentes React, cada um com uma funcionalidade específica:

### 1. Componente de Cabeçalho (Cabecalho)
- **Função**: Exibe o título e a descrição do Pantera Negra.
- **Uso**:
  ```tsx
  <Cabecalho titulo="Pantera Negra" descricao="O rei de Wakanda e guardião do vibranium." />
  ```

### 2. Componente de Título (Titulo)
- **Função**: Renderiza um título principal para a página.
- **Uso**:
  ```tsx
  <Titulo texto="Título Principal: A História do Pantera Negra" />
  ```

### 3. Componente de Parágrafo (Paragrafo)
- **Função**: Renderiza um parágrafo com informações personalizadas.
- **Uso**:
  ```tsx
  <Paragrafo texto="T'Challa, conhecido como Pantera Negra, é um super-herói da Marvel, que luta para proteger Wakanda." />
  ```

### 4. Componente de Quadrado (Quadrado)
- **Função**: Renderiza um quadrado estilizado.
- **Uso**:
  ```tsx
  <Quadrado />
  ```

> **Nota**: Embora este componente possa não ter uma relação direta com o tema do Pantera Negra, ele foi incluído para fins de prática de componentes estilizados.

### 5. Componente de Imagem (Imagem)
- **Função**: Renderiza uma imagem com URL e descrição alternativos personalizados.
- **Uso**:
  ```tsx
  <Imagem url="https://hqrock.com.br/wp-content/uploads/2018/02/black-panther-standart-image-full.jpg?w=616" alt="Imagem do Pantera Negra" />
  ```

### 6. Componente de Lista de Itens (ListaItens)
- **Função**: Exibe uma lista de características ou habilidades do Pantera Negra.
- **Uso**:
  ```tsx
  <ListaItens itens={['Força sobre-humana', 'Habilidades de combate', 'Tecnologia avançada de Wakanda']} />
  ```

### 7. Componente de Botão (Botao)
- **Função**: Renderiza um botão que dispara uma ação de clique.
- **Uso**:
  ```tsx
  <Botao texto="Clique Aqui para saber mais!" onClick={() => alert('Descubra mais sobre Pantera Negra!')} />
  ```

### 8. Componente de Rodapé (Rodape)
- **Função**: Exibe informações no rodapé da página.
- **Uso**:
  ```tsx
  <Rodape informacoes="Pantera Negra - Uma lenda da Marvel" />
  ```

## Respostas para as Questões

1. **Componente de Quadrado**:
   - **Questão**: O componente de quadrado é necessário?
   - **Resposta**: Sim, o componente de quadrado foi incluído como parte da prática de estilização com CSS e para cumprir o requisito da questão, mas não está diretamente relacionado ao conteúdo do Pantera Negra.

2. **Componente de Título**:
   - **Questão**: O título é personalizável?
   - **Resposta**: Sim, o componente de título permite que o texto seja passado como `prop` e é totalmente personalizável.

3. **Componente de Botão**:
   - **Questão**: O botão tem uma função de clique?
   - **Resposta**: Sim, o componente de botão tem uma função de clique que pode ser definida via `prop`.

4. **Componente de Lista de Itens**:
   - **Questão**: A lista é personalizável?
   - **Resposta**: Sim, a lista é personalizável, permitindo que os itens sejam passados como uma `prop` do tipo array.

5. **Componente de Imagem**:
   - **Questão**: A URL da imagem e a descrição são personalizáveis?
   - **Resposta**: Sim, o componente de imagem permite que tanto a URL quanto a descrição da imagem sejam passadas como `props`.

6. **Componente de Parágrafo**:
   - **Questão**: O texto do parágrafo é personalizável?
   - **Resposta**: Sim, o texto é passado como uma `prop` e pode ser ajustado conforme necessário.

7. **Componente de Cabeçalho**:
   - **Questão**: O cabeçalho tem título e descrição personalizáveis?
   - **Resposta**: Sim, ambos o título e a descrição do cabeçalho são personalizáveis através de `props`.

8. **Componente de Rodapé**:
   - **Questão**: O rodapé tem informações personalizáveis?
   - **Resposta**: Sim, o rodapé permite que informações sejam passadas como `prop` para exibição.

## Como Rodar o Projeto

### Pré-requisitos:
- Node.js instalado (versão recomendada: 22.8.0)
- Gerenciador de pacotes npm ou yarn

### Passos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/pantera-negra.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd pantera-negra
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Rode o projeto:
   ```bash
   npm start
   ```

5. Para rodar os testes:
   ```bash
   npm test
   ```

## Tecnologias Utilizadas

- React.js
- TypeScript
- CSS
- Jest (para testes)