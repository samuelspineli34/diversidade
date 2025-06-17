// Quiz data
const quizData = [
    {
        question: "Qual porcentagem da população brasileira se declara preta ou parda?",
        options: ["28%", "43%", "56%", "72%"],
        answer: "56%",
        explanation: "Segundo o IBGE (2022), 56% da população brasileira se declara preta ou parda."
    },
    {
        question: "Quantos países no mundo criminalizam relações entre pessoas do mesmo sexo?",
        options: ["12", "31", "64", "Nenhum"],
        answer: "64",
        explanation: "Ainda em 2023, 64 países criminalizam relações entre pessoas do mesmo sexo."
    },
    {
        question: "Qual foi o primeiro país do mundo a legalizar o casamento entre pessoas do mesmo sexo?",
        options: ["Holanda", "Canadá", "Brasil", "Espanha"],
        answer: "Holanda",
        explanation: "A Holanda foi o primeiro país, legalizando em 2001."
    }
];

// Quiz functionality
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('quiz-question');
const optionsElement = document.getElementById('quiz-options');
const nextButton = document.getElementById('quiz-next');
const resultElement = document.getElementById('quiz-result');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    
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