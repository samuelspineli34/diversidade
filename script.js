// Quiz data - 20 perguntas completas
const quizData = [
    {
        question: "Qual porcentagem da população brasileira se declara preta ou parda?",
        options: ["28%", "43%", "56%", "72%"],
        answer: "56%",
        explanation: "Segundo o IBGE (2022), 56% da população brasileira se autodeclara preta ou parda."
    },
    {
        question: "O que significa a sigla LGBTQIA+?",
        options: [
            "Lésbicas, Gays, Bissexuais, Transgêneros, Queer, Intersexo, Assexuais e +",
            "Luta, Garra, Bravura, Talento, Qualidade, Inteligência e Amor",
            "Liberdade, Generosidade, Bondade, Tolerância, Quietude, Inspiração e Alegria",
            "Nenhuma das alternativas"
        ],
        answer: "Lésbicas, Gays, Bissexuais, Transgêneros, Queer, Intersexo, Assexuais e +",
        explanation: "O '+' inclui outras identidades como pansexual, não-binário, entre outras."
    },
    {
        question: "Qual foi o primeiro país a legalizar o casamento entre pessoas do mesmo sexo?",
        options: ["Canadá (2005)", "Holanda (2001)", "Brasil (2013)", "África do Sul (2006)"],
        answer: "Holanda (2001)",
        explanation: "A Holanda foi pioneira em 2001, seguida por Bélgica (2003) e Espanha (2005)."
    },
    {
        question: "O que é transfobia?",
        options: [
            "Medo de transportes públicos",
            "Discriminação contra pessoas transgênero",
            "Uma fobia específica listada no manual médico",
            "Nenhuma das alternativas"
        ],
        answer: "Discriminação contra pessoas transgênero",
        explanation: "Inclui violência verbal, física e negação de direitos básicos."
    },
    {
        question: "Quantos países ainda criminalizam relações entre pessoas do mesmo sexo?",
        options: ["12", "31", "64", "Nenhum"],
        answer: "64",
        explanation: "Dados de 2023 da ILGA World mostram que 64 países ainda criminalizam."
    },
    {
        question: "O que significa não-binário?",
        options: [
            "Pessoa que não usa computador",
            "Identidade de gênero que não se limita a masculino/feminino",
            "Sistema numérico alternativo",
            "Pessoa que não toma partido em discussões"
        ],
        answer: "Identidade de gênero que não se limita a masculino/feminino",
        explanation: "Pode incluir gênero fluido, agênero, entre outros."
    },
    {
        question: "Qual o significado do 'B' em LGBTQIA+?",
        options: ["Brasil", "Bissexual", "Branco", "Bondade"],
        answer: "Bissexual",
        explanation: "Pessoas que se atraem por dois ou mais gêneros."
    },
    {
        question: "Quem foi Marsha P. Johnson?",
        options: [
            "Uma cantora famosa nos anos 80",
            "Ativista trans negra pioneira nos direitos LGBTQIA+",
            "Primeira mulher a ir ao espaço",
            "Inventora do computador pessoal"
        ],
        answer: "Ativista trans negra pioneira nos direitos LGBTQIA+",
        explanation: "Figura central na Rebelião de Stonewall (1969)."
    },
    {
        question: "O que é interseccionalidade?",
        options: [
            "Estudo de formas geométricas",
            "Análise de como diferentes formas de discriminação se sobrepõem",
            "Técnica de agricultura",
            "Tipo de exercício físico"
        ],
        answer: "Análise de como diferentes formas de discriminação se sobrepõem",
        explanation: "Termo cunhado por Kimberlé Crenshaw para discutir raça+gênero+classe."
    },
    {
        question: "Qual a diferença entre orientação sexual e identidade de gênero?",
        options: [
            "São a mesma coisa",
            "Orientação é sobre atração, identidade é sobre quem você é",
            "Orientação é biológica, identidade é psicológica",
            "Nenhuma diferença"
        ],
        answer: "Orientação é sobre atração, identidade é sobre quem você é",
        explanation: "Exemplo: uma mulher trans pode ser heterossexual, lésbica, etc."
    },
    {
        question: "O que foi a Lei Áurea no contexto racial brasileiro?",
        options: [
            "Lei que tornou o racismo crime",
            "Lei que aboliu a escravidão em 1888",
            "Lei que garantiu cotas raciais",
            "Lei sobre herança familiar"
        ],
        answer: "Lei que aboliu a escravidão em 1888",
        explanation: "Assinada pela Princesa Isabel, mas sem políticas de inclusão social."
    },
    {
        question: "Qual o país com maior população negra fora da África?",
        options: ["EUA", "Brasil", "França", "Colômbia"],
        answer: "Brasil",
        explanation: "Com ~56% da população autodeclarada preta ou parda."
    },
    {
        question: "O que é lugar de fala?",
        options: [
            "Local onde discursos são feitos",
            "Posição social que determina quem pode falar sobre certos temas",
            "Técnica de oratória",
            "Estúdio de gravação"
        ],
        answer: "Posição social que determina quem pode falar sobre certos temas",
        explanation: "Conceito importante para entender privilégios e representatividade."
    },
    {
        question: "Qual o significado do termo 'empoderamento' no contexto racial?",
        options: [
            "Aumento de poder econômico",
            "Processo de fortalecimento de grupos oprimidos",
            "Tipo de treinamento corporativo",
            "Sistema de energia alternativa"
        ],
        answer: "Processo de fortalecimento de grupos oprimidos",
        explanation: "Inclui valorização cultural, educação e acesso a direitos."
    },
    {
        question: "O que é racismo estrutural?",
        options: [
            "Racismo explícito e violento",
            "Forma de racismo incorporada nas instituições sociais",
            "Teoria ultrapassada",
            "Preconceito entre etnias diferentes"
        ],
        answer: "Forma de racismo incorporada nas instituições sociais",
        explanation: "Manifesta-se em padrões de desigualdade persistentes."
    },
    {
        question: "Quem foi Carolina Maria de Jesus?",
        options: [
            "Primeira presidente do Brasil",
            "Escritora negra autora de 'Quarto de Despejo'",
            "Cantora de MPB dos anos 60",
            "Ativista pelos direitos indígenas"
        ],
        answer: "Escritora negra autora de 'Quarto de Despejo'",
        explanation: "Importante voz da periferia na literatura brasileira."
    },
    {
        question: "O que são microagressões?",
        options: [
            "Pequenos erros de comunicação",
            "Comentários sutis que perpetuam discriminação",
            "Técnica de defesa pessoal",
            "Doença contagiosa"
        ],
        answer: "Comentários sutis que perpetuam discriminação",
        explanation: "Exemplo: 'Você é bem articulada para uma mulher negra'."
    },
    {
        question: "Qual o significado da bandeira arco-íris?",
        options: [
            "Símbolo da paz mundial",
            "Representação da diversidade LGBTQIA+",
            "Bandeira oficial da ONU",
            "Símbolo religioso"
        ],
        answer: "Representação da diversidade LGBTQIA+",
        explanation: "Criada por Gilbert Baker em 1978, cada cor tem um significado."
    },
    {
        question: "O que é sororidade?",
        options: [
            "Solidariedade entre mulheres",
            "Tipo de irmandade religiosa",
            "Doença rara",
            "Sistema de governo"
        ],
        answer: "Solidariedade entre mulheres",
        explanation: "Importante na luta feminista por equidade."
    },
    {
        question: "Qual o objetivo do Dia da Consciência Negra (20/11)?",
        options: [
            "Homenagear Zumbi dos Palmares",
            "Refletir sobre a inserção do negro na sociedade",
            "Ambas as alternativas",
            "Nenhuma das alternativas"
        ],
        answer: "Ambas as alternativas",
        explanation: "Data estabelecida pela Lei 12.519/2011 para reflexão sobre igualdade racial."
    }
];

// [O resto do código permanece igual...]

// Quiz functionality
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('quiz-question');
const optionsElement = document.getElementById('quiz-options');
const nextButton = document.getElementById('quiz-next');
const resultElement = document.getElementById('quiz-result');

function loadQuestion() {
    // Atualiza a barra de progresso
    const progressPercent = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progressPercent}%`;
    
    // Mostra o número da pergunta (ex: "Pergunta 3/20")
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = `Pergunta ${currentQuestion + 1}/${quizData.length}: ${currentQuizData.question}`;
    
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
    
    resultElement.textContent = '';
    nextButton.style.display = 'none';
}

function selectAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    const buttons = optionsElement.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuizData.answer) {
            button.style.backgroundColor = '#4CAF50';
        } else if (button.textContent === selectedOption && selectedOption !== currentQuizData.answer) {
            button.style.backgroundColor = '#F44336';
        }
    });
    
    if (selectedOption === currentQuizData.answer) {
        score++;
        resultElement.textContent = 'Correto! ' + currentQuizData.explanation;
        resultElement.style.color = '#4CAF50';
    } else {
        resultElement.textContent = 'Incorreto. A resposta correta é: ' + currentQuizData.answer + '. ' + currentQuizData.explanation;
        resultElement.style.color = '#F44336';
    }
    
    nextButton.style.display = 'inline-block';
}

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    questionElement.textContent = `Quiz completo! Você acertou ${score} de ${quizData.length} perguntas.`;
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';
    resultElement.textContent = 'Obrigado por testar seus conhecimentos sobre diversidade!';
    resultElement.style.color = '#333';

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Reiniciar Quiz';
    restartButton.id = 'quiz-restart';
    restartButton.addEventListener('click', restartQuiz);
    optionsElement.appendChild(restartButton);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize quiz
loadQuestion();