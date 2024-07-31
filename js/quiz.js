
import { isLogged, getRole, logout } from "./auth.js";
isLogged();
if (getRole() === "Teacher") {
    const navbar = document.getElementById("navbar");
    const newNavLink = document.createElement("a");
    
    newNavLink.textContent = "Minhas Aulas";
    newNavLink.href = "./minhasAulas.html";
    newNavLink.classList.add("hover:text-red-500");
    newNavLink.style.textDecoration = "none";

    navbar.appendChild(newNavLink);
}

const dropdownIcon = document.getElementById("dropdownIcon");
const dropdownModal = document.getElementById("dropdownModal");
const user = JSON.parse(localStorage.getItem("user"));
dropdownModal.innerHTML = `
      <div class="flex items-center mb-4">
        <img src="${user.photoPerfil}" alt="Imagem do usuário" class="w-12 h-12 rounded-full mr-4">
        <div>
          <p class="font-bold text-lg text-gray-600">${user.name}</p>
          <p class="text-gray-600">${user.login}</p>
        </div>
      </div>
      <div class="flex flex-col justify-end">
        ${user.role === "Student" ? `<button id="profileButton" class="text-black hover:bg-gray-100 border-solid border-2 border-gray-400 font-bold py-2 px-4 rounded mb-2">Acessar Perfil</button>` : ""}
        <button id="logoutButton" class="text-black hover:bg-gray-100 border-solid border-2 border-gray-400 font-bold py-2 px-4 rounded">Sair <i class="fas fa-sign-out-alt"></i></button>
      </div>
`;
const profileButton = document.getElementById("profileButton");
const logoutButton = document.getElementById("logoutButton");

dropdownIcon.addEventListener("click", function() {
    dropdownModal.classList.toggle("hidden");
});

window.addEventListener("click", function(event) {
  if (!dropdownIcon.contains(event.target) && !dropdownModal.contains(event.target)) {
    dropdownModal.classList.add("hidden");
  }
});

profileButton?.addEventListener("click", function() {
  window.location.href = "profile.html";
});

logoutButton.addEventListener("click", function() {
    logout();
});







const dataQuizz = [
  {
    description: "O que é um Sistema de Informação?",
    answers: [
      { body: "Conjunto de elementos interrelacionados que coleta, processa, armazena e distribui informações.", correct: true },
      { body: "Um software de gerenciamento de banco de dados.", correct: false },
      { body: "Uma técnica de programação avançada.", correct: false },
      { body: "Uma rede de computadores.", correct: false },
    ],
  },
  {
    description: "Qual é a função principal de um Analista de Sistemas?",
    answers: [
      { body: "Desenvolver hardware para sistemas computacionais.", correct: false },
      { body: "Criar jogos de computador.", correct: false },
      { body: "Analisar, projetar e implementar sistemas de informação.", correct: true },
      { body: "Gerenciar redes de computadores.", correct: false },
    ],
  },
  {
    description: "O que significa a sigla UML?",
    answers: [
      { body: "Unified Markup Language.", correct: false },
      { body: "Unified Modeling Language.", correct: true },
      { body: "Universal Machine Language.", correct: false },
      { body: "Universal Modeling Logic.", correct: false },
    ],
  },
  {
    description: "Qual é o principal objetivo da Análise de Requisitos?",
    answers: [
      { body: "Desenvolver códigos de programação.", correct: false },
      { body: "Entender e documentar as necessidades e expectativas dos usuários para um novo sistema.", correct: true },
      { body: "Testar e implantar sistemas de software.", correct: false },
      { body: "Criar interfaces de usuário atraentes.", correct: false },
    ],
  },
  {
    description: "O que é um Diagrama de Caso de Uso?",
    answers: [
      { body: "Uma representação gráfica do fluxo de dados em um sistema.", correct: false },
      { body: "Um modelo de dados relacionais.", correct: false },
      { body: "Um diagrama que mostra as interações entre atores externos e o sistema.", correct: true },
      { body: "Uma lista de requisitos funcionais.", correct: false },
    ],
  },
  {
    description: "Qual é a diferença entre software e hardware?",
    answers: [
      { body: "Software é físico, enquanto hardware é abstrato.", correct: false },
      { body: "Software é o conjunto de instruções que fazem o hardware funcionar.", correct: true },
      { body: "Hardware é o conjunto de instruções que fazem o software funcionar.", correct: false },
      { body: "Não há diferença; ambos são sinônimos.", correct: false },
    ],
  },
  {
    description: "O que é um Banco de Dados?",
    answers: [
      { body: "Um local físico onde computadores são armazenados.", correct: false },
      { body: "Uma coleção organizada de dados que pode ser facilmente acessada, gerenciada e atualizada.", correct: true },
      { body: "Um tipo de memória volátil.", correct: false },
      { body: "Um software de edição de texto.", correct: false },
    ],
  },
  {
    description: "O que é Programação Orientada a Objetos (POO)?",
    answers: [
      { body: "Uma técnica para melhorar o desempenho de sistemas operacionais.", correct: false },
      { body: "Um paradigma de programação baseado no conceito de 'objetos', que podem conter dados e métodos.", correct: true },
      { body: "Um método para organizar dados em bancos de dados relacionais.", correct: false },
      { body: "Um tipo de linguagem de programação de baixo nível.", correct: false },
    ],
  },
  {
    description: "Qual das alternativas abaixo é um exemplo de linguagem de programação utilizada em Análise e Desenvolvimento de Sistemas?",
    answers: [
      { body: "HTML", correct: false },
      { body: "CSS", correct: false },
      { body: "Java", correct: true },
      { body: "Photoshop", correct: false },
    ],
  },
];


  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const feedbackElement = document.getElementById("feedback");
  const nextButton = document.getElementById("next-question");

  function loadQuestion() {
    const currentQuestion = dataQuizz[currentQuestionIndex];
    questionElement.textContent = currentQuestion.description;
    answersElement.innerHTML = "";
    feedbackElement.textContent = "";
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer.body;
      button.classList.add(
        "answer",
        "bg-gray-200",
        "p-2",
        "w-full",
        "mb-2",
        "rounded",
        "hover:bg-gray-300",
        "duration-150",
        "ease-in-out"
      );
      button.onclick = () => handleAnswerShow(answer, button);
      answersElement.appendChild(button);
    });
  }

  function handleAnswerShow(answer, button) {
    if (answer.correct) {
      correctAnswers++;
      button.classList.add("bg-green-500");
      feedbackElement.textContent = "Correto!";
    } else {
      button.classList.add("bg-red-500");
      feedbackElement.textContent = "Errado!";
    }
    Array.from(answersElement.children).forEach(
      (btn) => (btn.disabled = true)
    );
  }

  nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < dataQuizz.length) {
      loadQuestion();
    } else {
      questionElement.textContent = "Quiz concluído!";
      answersElement.innerHTML = "";
      feedbackElement.textContent = `Você acertou ${correctAnswers} de ${dataQuizz.length} perguntas.`;
      nextButton.disabled = true;
    }
  };

  loadQuestion(); // Carregar a primeira pergunta inicialmente