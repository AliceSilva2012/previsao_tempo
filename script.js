async function cliqueBotao() {
    let cidade = document.querySelector('.input-cidade').value;
    let caixa = document.querySelector('.caixa-media');
    let chave = 'f7fc4ccec2e0cc8d47fa3f418178de34';

    let endereco = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`;

    let respostaServidor = await fetch(endereco);
    let dadosJson = await respostaServidor.json();

    caixa.innerHTML = `
        <h2 class="cidade">${dadosJson.name}</h2>
        <p class="temp">${Math.floor(dadosJson.main.temp)} ºC</p>
        <img class="icone" src="https://openweathermap.org/img/wn/${dadosJson.weather[0].icon}.png">
        <p class="umidade">Umidade: ${dadosJson.main.humidity}%</p>
        <button class="botao-ia" onclick="pedirSugestaoRoupa()">Sugestão de roupa</button>
        <p class="respostaIA"></p>
    `;
}

function detectaVoz() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert('Seu navegador não suporta reconhecimento de voz. Use o Google Chrome.');
        return;
    }

    let reconhecimento = new SpeechRecognition();

    reconhecimento.lang = 'pt-BR';
    reconhecimento.continuous = false;
    reconhecimento.interimResults = false;

    reconhecimento.start();

    reconhecimento.onstart = function() {
        console.log('Ouvindo...');
    };

    reconhecimento.onresult = function(evento) {
        let textoTranscrito = evento.results[0][0].transcript;
        console.log(textoTranscrito);

        document.querySelector('.input-cidade').value = textoTranscrito;
        cliqueBotao();
    };

    reconhecimento.onerror = function(evento) {
        console.log('Erro:', evento.error);
    };
}

const chaveIA = window.GROQ_API_KEY || '';

async function pedirSugestaoRoupa() {
    let temperatura = document.querySelector('.temp').textContent;
    let umidade = document.querySelector('.umidade').textContent;
    let cidade = document.querySelector('.cidade').textContent;
    let elementoResposta = document.querySelector('.respostaIA');

    elementoResposta.textContent = 'Gerando sugestão...';

    try {
        let resposta = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + chaveIA
            },
            body: JSON.stringify({
                model: 'openai/gpt-oss-120b',
                messages: [
                    {
                        role: 'user',
                        content: `Me dê uma sugestão de qual roupa usar hoje. Estou na cidade de: ${cidade}. A temperatura atual é: ${temperatura} e a umidade está em: ${umidade}. Me dê sugestões em duas frases curtas.`
                    }
                ]
            })
        });

        let dados = await resposta.json();

        if (dados.choices && dados.choices[0]) {
            elementoResposta.textContent = dados.choices[0].message.content;
        } else {
            elementoResposta.textContent = 'Erro na sugestão, resposta não encontrada.';
        }
    } catch (erro) {
        console.error('Erro na requisição:', erro);
        elementoResposta.textContent = 'Erro ao obter resposta da IA.';
    }
}
