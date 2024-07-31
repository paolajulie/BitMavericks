import { registerUser } from './api.js';
import { showToast } from './toast.js';

let user = {}

window.onload = function() {
  goToStep1();
}

function goToStep1() {
  const body = document.getElementById('register-page');
  body.innerHTML = `
    <header class="w-full p-4 sticky top-0 flex justify-between items-center z-10">
        <div class="flex items-center">
            <h1 class="text-3xl font-bold text-red-600 mr-8">BIOFLIX</h1>
            <nav class="flex space-x-4 text-white">
            </nav>
        </div>
        <div class="flex items-center space-x-4 text-white text-3xl mr-4">
            <a href="index.html" class="hover:text-red-500 duration-150 ease-in-out">Sair</a>
        </div>
    </header>
    <div class="bg-opacity-75 p-10 rounded-lg flex flex-col items-center max-w-2xl w-full">
      <div class="flex items-center space-x-2 mb-4">
          <span class="step-indicator">Passo</span>
          <span class="step-highlight">1</span>
          <span class="step-indicator">de</span>
          <span class="step-highlight">3</span>
      </div>
      <h1 class="text-3xl font-bold text-white mb-8">Cadastre um nome, e-mail e senha</h1>
      <form id="registerForm" class="w-full">
          <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-red-700">Nome</label>
              <input type="text" id="name" class="mt-1 block w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-700" required>
          </div>
          <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-red-700">Email</label>
              <input type="email" id="email" class="mt-1 block w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-700" required>
          </div>
          <div class="mb-6">
              <label for="password" class="block text-sm font-medium text-red-700">Senha</label>
              <input type="password" id="password" class="mt-1 block w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-700" required>
          </div>
          <button type="submit" class="w-full py-3 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition duration-300">Cadastrar</button>
      </form>
    </div>
  `;

  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    user = {
        login: email,
        password: password,
        name: name,
        photoPerfil: 'https://i.pravatar.cc/150?u=' + email,
        assigment: true,
        role: "Student",
        phone: "(45) 9999-9999"
    };

    goToStep2();
  });
}

function goToStep2() {
  const body = document.getElementById('register-page');
  body.innerHTML = `
  <header class="w-full p-4 sticky top-0 flex justify-between items-center z-10">
    <div class="flex items-center">
        <h1 class="text-3xl font-bold text-red-600 mr-8">BIOFLIX</h1>
        <nav class="flex space-x-4 text-white">
        </nav>
    </div>
    <div class="flex items-center space-x-4 text-white text-3xl mr-4">
        <button id="returnStep" class="hover:text-red-500 duration-150 ease-in-out">Voltar</button>
    </div>
  </header>
    <div class="bg-opacity-75 p-10 rounded-lg flex flex-col items-center w-full">
      <div class="flex items-center space-x-2 mb-4">
          <span class="step-indicator">Passo</span>
          <span class="step-highlight">2</span>
          <span class="step-indicator">de</span>
          <span class="step-highlight">3</span>
      </div>
      <div
      class="w-screen flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-center items-center text-white text-center py-8 gap-x-8"
    >
      <div
        class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8"
      >
        <h5 class="mb-4 text-4xl font-medium text-red-500 tracking-widest">
          GRATUITO
        </h5>
        <div class="flex items-baseline text-gray-900">
          <span class="text-3xl font-semibold">R$</span>
          <span class="text-5xl font-semibold tracking-tight">0</span>
          <span
            class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400"
            >/mês</span
          >
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex items-center">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"
              >2 team members</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"
              >20GB Cloud storage</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"
              >Integration help</span
            >
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3"
              >Sketch Files</span
            >
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3"
              >API Access</span
            >
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3"
              >Complete documentation</span
            >
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3"
              >24×7 phone & email support</span
            >
          </li>
        </ul>
        <button
          type="button"
          plan="free"
          class="confirmPlan text-white font-semibold bg-red-600 border-2 duration-150 ease-in-out border-red-600 hover:bg-transparent hover:text-red-600 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Escolher plano
        </button>
      </div>
      <div
        class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8"
      >
        <h5 class="mb-4 text-4xl font-medium text-red-500 tracking-widest">
          MENSAL
        </h5>
        <div class="flex items-baseline text-gray-900">
          <span class="text-3xl font-semibold">R$</span>
          <span class="text-5xl font-semibold tracking-tight">18,99</span>
          <span
            class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400"
            >/mês</span
          >
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex items-center">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"
              >2 team members</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"
              >20GB Cloud storage</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"
              >Integration help</span
            >
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3"
              >Sketch Files</span
            >
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3"
              >API Access</span
            >
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3"
              >Complete documentation</span
            >
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3"
              >24×7 phone & email support</span
            >
          </li>
        </ul>
        <button
          type="button"
          plan="monthly"
          class="confirmPlan text-white font-semibold bg-red-600 border-2 duration-150 ease-in-out border-red-600 hover:bg-transparent hover:text-red-600 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Escolher plano
        </button>
      </div>
      <div
        class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8"
      >
        <h5 class="mb-4 text-4xl font-medium text-red-500 tracking-widest">
          ANUAL
        </h5>
        <div class="flex items-baseline text-gray-900">
          <span class="text-3xl font-semibold">R$</span>
          <span class="text-5xl font-semibold tracking-tight"> 215,99</span>
          <span
            class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400"
            >/ano</span
          >
        </div>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex items-center">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"
              >2 team members</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"
              >20GB Cloud storage</span
            >
          </li>
          <li class="flex">
            <svg
              class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span
              class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"
              >Integration help</span
            >
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3"
              >Sketch Files</span
            >
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3"
              >API Access</span
            >
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3"
              >Complete documentation</span
            >
          </li>
          <li class="flex line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3"
              >24×7 phone & email support</span
            >
          </li>
        </ul>
        <button
          type="button"
          plan="annual"
          class="confirmPlan text-white font-semibold bg-red-600 border-2 duration-150 ease-in-out border-red-600 hover:bg-transparent hover:text-red-600 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Escolher plano
        </button>
      </div>
    </div>
  </div>
  `;

  const buttons = document.querySelectorAll('.confirmPlan');
  buttons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const plan = event.target.getAttribute('plan');
      user.plan = plan;
  
      switch (plan) {
        case 'free':
          finishRegister()
          break;
        case 'monthly':
        case 'annual':
          goToStep3();
          break;
      }
    });
  })

  document.getElementById('returnStep').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('test')
    goToStep1();
  });
}

function goToStep3() {
  const body = document.getElementById('register-page');
  body.innerHTML = `
    <header class="w-full p-4 sticky top-0 flex justify-between items-center z-10">
      <div class="flex items-center">
          <h1 class="text-3xl font-bold text-red-600 mr-8">BIOFLIX</h1>
          <nav class="flex space-x-4 text-white">
          </nav>
      </div>
      <div class="flex items-center space-x-4 text-white text-3xl mr-4">
          <button id="returnStep" class="hover:text-red-500 duration-150 ease-in-out">Voltar</button>
      </div>
    </header>
    <div class="bg-opacity-75 p-10 rounded-lg flex flex-col items-center max-w-2xl w-full">
      <div class="flex items-center space-x-2 mb-4">
          <span class="step-indicator">Passo</span>
          <span class="step-highlight">3</span>
          <span class="step-indicator">de</span>
          <span class="step-highlight">3</span>
      </div>
      <h1 class="text-3xl font-bold text-white mb-2">Forma de Pagamento</h1>
      <h2 class="text-2xl font-bold text-white mb-8">Plano ${user.plan === 'monthly' ? 'Mensal ' : 'Anual '}R$ ${user.plan === 'monthly' ? '18,99' : '215,99'}</h2>
      <form id="paymentForm" class="w-full">
        <div class="mb-4">
          <label for="cardNumber" class="block text-sm font-medium text-red-700">Número do Cartão</label>
          <input type="text" id="cardNumber" class="mt-1 block w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-700" required>
        </div>
        <div class="mb-4">
          <label for="cardName" class="block text-sm font-medium text-red-700">Nome no Cartão</label>
          <input type="text" id="cardName" class="mt-1 block w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-700" required>
        </div>
        <div class="mb-4">
          <label for="expiryDate" class="block text-sm font-medium text-red-700">Data de Validade</label>
          <input type="text" id="expiryDate" class="mt-1 block w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-700" placeholder="MM/AA" required>
        </div>
        <div class="mb-4">
          <label for="cvv" class="block text-sm font-medium text-red-700">CVV</label>
          <input type="text" id="cvv" class="mt-1 block w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-700" required>
        </div>
        <button type="submit" class="w-full py-3 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition duration-300">Finalizar Cadastro</button>
      </form>
    </div>
  `;

  document.getElementById('cardNumber').addEventListener('input', function(event) {
    const value = event.target.value.replace(/\D/g, '').slice(0, 16);
    event.target.value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
  });

  document.getElementById('expiryDate').addEventListener('input', function(event) {
    const value = event.target.value.replace(/\D/g, '').slice(0, 4);
    event.target.value = value.replace(/(\d{2})(?=\d)/g, '$1/');
  });

  document.getElementById('cvv').addEventListener('input', function(event) {
    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 4);
  });

  document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '').trim();
    const cardName = document.getElementById('cardName').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!isValidCardNumber(cardNumber)) {
      showToast('Número do cartão inválido.', 'error');
      return;
    }
    if (!cardName.match(/^[a-zA-Z\s]+$/)) {
      showToast('Nome no cartão inválido.', 'error');
      return;
    }

    if (!isValidExpiryDate(expiryDate)) {
      showToast('Data de validade inválida.', 'error');
      return;
    }

    if (!cvv.match(/^\d{3,4}$/)) {
      showToast('CVV inválido.', 'error');
      return;
    }

    user.paymentDetails = {
      cardNumber: cardNumber,
      cardName: cardName,
      expiryDate: expiryDate,
      cvv: cvv,
      nextPaymentDate: new Date(new Date().setDate(new Date().getDate() + (user.plan === 'monthly' ? 30 : 365))).toISOString().split('T')[0] // Data do próximo pagamento daqui a 30 dias
    };

    finishRegister();
  });

  document.getElementById('returnStep').addEventListener('click', function(event) {
    event.preventDefault();
    goToStep2();
  });
}

function isValidCardNumber(cardNumber) {
  const regex = new RegExp("^[0-9]{16}$");
  if (!regex.test(cardNumber)) return false;

  let sum = 0;
  for (let i = 0; i < cardNumber.length; i++) {
    let intVal = parseInt(cardNumber.substr(i, 1));
    if (i % 2 === 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return (sum % 10) === 0;
}

function isValidExpiryDate(expiryDate) {
  const regex = new RegExp("^(0[1-9]|1[0-2])\/?([0-9]{2})$");
  if (!regex.test(expiryDate)) return false;

  const today = new Date();
  const month = parseInt(expiryDate.split('/')[0], 10);
  const year = parseInt(`20${expiryDate.split('/')[1]}`, 10);

  const expiry = new Date(year, month - 1);
  return expiry > today;
}

function finishRegister() {
  registerUser(user).then(response => {
    if (response.success) {
      showToast('Conta criada com sucesso!', 'success');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1000);
    } else {
      showToast('Erro ao criar conta. Tente novamente.', 'error');
    }
  });
}
