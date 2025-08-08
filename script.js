const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o nome do protagonista principal de Red Dead Redemption 2?",
        alternativas: [
            {
                texto: "Arthur Morgan",
                afirmacao: "Acertou"
            },
            {
                texto: "Dutch van der Linde",
                afirmacao: "Errou"
            },
            {
                texto: "John Marston",
                afirmacao: "Errou"
            },
            {
                texto: "Sadie Adler",
                afirmacao: "Errou"
            }            
        ]
    },
    {
        enunciado: "Em que ano se passa a história de Red Dead Redemption 2?",
        alternativas: [
            {
                texto: "1883",
                afirmacao: "Errou"
            },
            {
                texto: "1911",
                afirmacao: "Errou"
            },
            {
                texto: "1899",
                afirmacao: "Acertou"
            },
            {
                texto: "1905",
                afirmacao: "Errou"
            }            
        ]
    },
    {
        enunciado: "Qual é o nome da gangue liderada por Dutch van der Linde?",
        alternativas: [
            {
                texto: "Gangue Braithwaite",
                afirmacao: "Errou"
            },
            {
                texto: "Gangue van der Linde",
                afirmacao: "Acertou"
            },
            {
                texto: "Gangue O'Driscoll",
                afirmacao: "Errou"
            },
            {
                texto: "Gangue Lemoyne Raiders",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "Qual é o nome da cidade fictícia inspirada em Nova Orleans no jogo?",
        alternativas: [
            {
                texto: "Saint Denis",
                afirmacao: "Acertou"
            },
            {
                texto: "Valentine",
                afirmacao: "Errou"
            },
            {
                texto: "Blackwater",
                afirmacao: "Errou"
            },
            {
                texto: "Rhodes",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "Qual animal lendário pode ser encontrado na região de Grizzlies West?",
        alternativas: [
            {
                texto: "Cervo lendário",
                afirmacao: "Errou"
            },
            {
                texto: "Lobo lendário",
                afirmacao: "Errou"
            },
            {
                texto: "Urso lendário",
                afirmacao: "Acertou"
            },
            {
                texto: "Puma lendário",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do cavalo que Arthur Morgan recebe de Hosea Matthews?",
        alternativas: [
            {
                texto: "Shire",
                afirmacao: "Acertou"
            },
            {
                texto: "Dutch Warmblood",
                afirmacao: "Errou"
            },
            {
                texto: "Morgan",
                afirmacao: "Errou"
            },
            {
                texto: "Arabian",
                afirmacao: "Errou"
            }
        ]
    },    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    const totalPerguntas = perguntas.length;
    const totalAcertos = contagemAfirmacoes["Acertou"] || 0; // Se não houver acertos, considera como 0
    const porcentagemAcertos = (totalAcertos / totalPerguntas) * 100;

    caixaPerguntas.textContent = "Resultado do Quiz!";
    textoResultado.textContent = `Você acertou ${totalAcertos} de ${totalPerguntas} perguntas. Sua taxa de acerto foi ${porcentagemAcertos.toFixed(2)}%.`;
    caixaAlternativas.textContent = "";
}

