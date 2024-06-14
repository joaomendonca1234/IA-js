const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quanto é 7x8",
        alternativas: [
            {
                texto: "56",
                afirmacao: "1.Parabens,voce acerto!!!."
            },
            {
                texto: "48",
                afirmacao: "1.ERROUU!!!!!"
            }
        ]
    },
    {
        enunciado: "9x15",
        alternativas: [
            {
                texto: "135.",
                afirmacao: "2.Parabens, voce é otimo."
            },
            {
                texto: "225",
                afirmacao: "2.Voce pode melhorar."
            }
        ]
    },
    {
        enunciado: "85x7",
        alternativas: [
            {
                texto: "595",
                afirmacao: "3.Parabens, voce é otimo"
            },
            {
                texto: "980.",
                afirmacao: "3.Procure melhorar."
            }
        ]
    },
    {
        enunciado: "577x8",
        alternativas: [
            {
                texto: "4.616",
                afirmacao: "4. Aertou, parabens."
            },
            {
                texto: "7.890",
                afirmacao: "4.Errou, voce pode melhorar!"
            }
        ]
    },
    {
        enunciado: "90/5",
        alternativas: [
            {
                texto: "18.",
                afirmacao: "5.Acertou, parabens.."
            },
            {
                texto: "22",
                afirmacao: "5.Procure melhorar."
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

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Gabarito...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
