# Previsão do Tempo 🌤️🌧️

<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/963d8c4f-f3fb-4011-a373-e493a4f550a8" />

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Uma aplicação web interativa de previsão do tempo para consultar a condiçáo do clima em tempo real e receber sugestões de roupas geradas por Inteligência Artificial.

---

## 💻 Sobre o Projeto

O **Previsão do Tempo** é uma plataforma web criada com o objetivo de fornecer informações climáticas precisas e em tempo real de qualquer cidade do mundo. Além da interface intuitiva e busca por texto, o projeto inova ao integrar uma IA que sugere roupas adequadas com base na temperatura e umidade atuais da região pesquisada.

Esse projeto destaca conceitos avançados de manipulação do DOM, consumo de múltiplas APIs RESTful, requisições assíncronas, métodos HTTP (`GET`/`POST`) e utilização de recursos nativos do navegador como a Web Speech API.

---

## ⚙️ Funcionalidades

- **Busca Meteorológica:** Consulta em tempo real da temperatura, umidade e ícones climáticos através da API do OpenWeatherMap.
- **Sugestão de Roupas (IA):** Envio dos dados climáticos atuais (temperatura e umidade) para a IA (via Groq API), que processa e retorna em tela uma sugestão de vestimenta adequada.
- **Tratamento de Assincronicidade:** Uso de `async/await` e blocos `try/catch` para lidar com requisições na web e garantir uma experiência fluida.

---

## 📊 Estrutura de Retorno dos Dados

Abaixo está o formato de como os dados processados pelas APIs são exibidos na interface para o usuário:

| Dado | Origem | Exemplo de Retorno |
| :--- | :--- | :--- |
| **Cidade** | OpenWeatherMap | São Paulo |
| **Temperatura** | OpenWeatherMap | 25 ºC |
| **Umidade** | OpenWeatherMap | Umidade: 60% |
| **Ícone** | OpenWeatherMap | 🌤️ *(Imagem dinâmica)* |
| **Sugestão de Roupa** | Groq API (IA) | "Use uma camiseta leve e bermuda. Não esqueça os óculos de sol." |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação da página, campos de input, botões de ação e contêineres dinâmicos.
- **CSS3:** Estilização visual, layout estruturado com Flexbox, responsividade de elementos com a função matemática `clamp()` e microinterações de UI (transições de estado e `hover`).
- **JavaScript (Vanilla):**
  - Requisições HTTP (`fetch`) utilizando os métodos `GET` (clima) e `POST` (IA).
  - Lógica assíncrona com `async` / `await`.
  - Manipulação do DOM (`querySelector`, `innerHTML`, `textContent`).
- **APIs Externas:**
  - `OpenWeatherMap API`: Fornece os dados meteorológicos.
  - `Groq API (Modelos OpenAI)`: Processa as variáveis e gera textos de sugestão.

---

## 🌎 Teste meu projeto no seu navegador! 

- **Previsão do Tempo:** [VEJA ESTE PROJETO NO SEU NAVEGADOR!](https://pprevisaotempo.netlify.app)

---

## 🚀 Como Executar o Projeto Localmente

Caso queira clonar o projeto e rodar o código diretamente na sua máquina, siga os passos abaixo:

### Pré-requisitos
- Um navegador web moderno (Google Chrome, Firefox, Edge, etc.).
- [Git](https://git-scm.com) instalado na máquina.
- Um editor de código como o [VS Code](https://code.visualstudio.com/) (opcional).

### ☕ Passo a Passo

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/AliceSilva2012/previsao_tempo.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd previsao_tempo
   ```

3. **Execute a aplicação:**
   - Dê um duplo clique no arquivo `index.html` para abri-lo no navegador, ou
   - Clique com o botão direito no `index.html` e selecione **Open with Live Server**.

---

## 📁 Estrutura do Arquivo

```mermaid
graph LR;
    Root[📁 Projeto Previsão do Tempo]
    Root --> HTML[📄 index.html - Estrutura principal]
    Root --> CSS[🎨 style.css - Estilização visual]
    Root --> JS[📜 script.js - Lógica das APIs e voz]
