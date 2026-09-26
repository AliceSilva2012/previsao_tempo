# Previsão do Tempo 🌤️🌧️

![Interface do Projeto](COLOQUE_O_LINK_DA_SUA_IMAGEM_AQUI)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Uma aplicação web interativa com reconhecimento de voz para consultar o clima em tempo real e receber sugestões de roupas geradas por Inteligência Artificial.

---

## 💻 Sobre o Projeto

O **Previsão do Tempo** é uma plataforma web criada com o objetivo de fornecer informações climáticas precisas e em tempo real de qualquer cidade do mundo. Além da interface intuitiva e busca por texto, o projeto inova ao permitir pesquisas por comando de voz e ao integrar uma IA que sugere o look ideal com base na temperatura e umidade atuais da região pesquisada.

Esse projeto destaca conceitos avançados de manipulação do DOM, consumo de múltiplas APIs RESTful, requisições assíncronas, métodos HTTP (GET/POST) e utilização de recursos nativos do navegador como a Web Speech API.

---

## ⚙️ Funcionalidades

- **Busca Meteorológica:** Consulta em tempo real da temperatura, umidade e ícones climáticos através da API do OpenWeatherMap.
- **Pesquisa por Voz:** Integração com a `SpeechRecognition` nativa do navegador, permitindo que o usuário dite o nome da cidade sem precisar digitar.
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
  - **Web Speech API:** Para captura e transcrição de áudio do microfone.
- **APIs Externas:**
  - `OpenWeatherMap API`: Fornece os dados meteorológicos.
  - `Groq API (Modelos OpenAI)`: Processa as variáveis e gera textos de sugestão.

---

## 🌎 Teste meu projeto no seu navegador! 

- **Previsão do Tempo:** [VEJA ESTE PROJETO NO SEU NAVEGADOR!](https://pprevisaotempo.netlify.app)

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Um navegador web moderno (Google Chrome é recomendado para o uso do microfone).
- [Git](https://git-scm.com) instalado na máquina.
- Um editor de código como o [VS Code](https://code.visualstudio.com/) (opcional).

### ☕ Passo a Passo

1. **Clone este repositório:**
   ```bash
   git clone COLOQUE_O_LINK_DO_SEU_REPOSITORIO_AQUI
