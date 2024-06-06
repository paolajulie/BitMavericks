import { isLogged, getRole, logout } from "./auth.js";
isLogged();
if (getRole() === "Teacher") {
    window.location.href = "home.html";
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

const profile = document.getElementById("profile");
profile.innerHTML = `
      <div class="flex flex-col items-center justify-center mb-4">
        <img src="${user.photoPerfil}" alt="Imagem do usuário" class="w-12 h-12 rounded-full">
        <p class="font-bold text-lg text-gray-600">${user.name}</p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <p class="text-gray-600"><i class="fas fa-envelope"></i> ${user.login}</p>
        <p class="text-gray-600"><i class="fas fa-phone"></i> ${user.phone}</p>
        <button id="editButton" class="text-red-700 font-bold py-2 px-4 rounded mt-4">Editar Perfil</button>
      </div>
`;