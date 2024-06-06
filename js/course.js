import { isLogged, getRole, logout } from "./auth.js";
import { showToast } from "./toast.js";

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

dropdownIcon.addEventListener("click", function () {
  dropdownModal.classList.toggle("hidden");
});

window.addEventListener("click", function (event) {
  if (
    !dropdownIcon.contains(event.target) &&
    !dropdownModal.contains(event.target)
  ) {
    dropdownModal.classList.add("hidden");
  }
});

profileButton?.addEventListener("click", function () {
  window.location.href = "profile.html";
});

logoutButton.addEventListener("click", function () {
  logout();
});




const course = JSON.parse(sessionStorage.getItem("course"));

function renderCourseDetails(course) {
  const courseDetails = document.getElementById("course-body");
  const video = course.videos[0];
  courseDetails.innerHTML = `
    <div class="flex flex-col w-10/12">
      <div>
        <h1 class="text-3xl font-bold text-white">${course.name}</h1>
        <p class="text-gray-400 mb-4">${course.description}</p>
      </div>
      <div id="video-list" class="mb-4">
        ${`
          <div class="mb-4">
            <iframe width="950" height="600" src="${video.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2 class="text-xl text-white mb-2">${video.title} - ${video.description}</h2>
            <div class="author flex">
                <img src="${course.teachers[0].photoPerfil}" alt="Imagem do usuário" class="w-12 h-12 rounded-full mr-2">
                <p class="text-gray-300">${course.teachers[0].name}</p>
            </div>
            <div class="p-4 w-3/12 comments mt-10">
                <h3 class="text-2xl text-white mb-4">Comentários</h3>
                <div class="flex mb-2">
                    <img src="${user.photoPerfil}" alt="Imagem do usuário" class="w-8 h-8 rounded-full mr-2">
                    <input type="text" class="w-full p-2 rounded-l-lg" placeholder="Escreva um comentário...">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">Enviar</button>
                </div>
                <p class="text-white mb-2">
                    Avalie o vídeo
                </p>
                <div class="flex star-rating mb-4">
                    <input type="radio" name="rating" value="1" id="rating-1">
                    <label for="rating-1" class="text-white mr-2">1</label>
                    <input type="radio" name="rating" value="2" id="rating-2">
                    <label for="rating-2" class="text-white mr-2">2</label>
                    <input type="radio" name="rating" value="3" id="rating-3">
                    <label for="rating-3" class="text-white mr-2">3</label>
                    <input type="radio" name="rating" value="4" id="rating-4">
                    <label for="rating-4" class="text-white mr-2">4</label>
                    <input type="radio" name="rating" value="5" id="rating-5">
                    <label for="rating-5" class="text-white mr-2">5</label>
                </div>
                <hr class="mb-8">
              ${video.comments.map(comment => `
                <div class="comment mb-4 w-11/12">
                  <div class="flex items-center">
                    <img src="${comment.User.photoPerfil}" alt="Imagem do usuário" class="w-8 h-8 rounded-full mr-2">
                    <p class="text-gray-400">${comment.User.name}</p>
                  </div>
                  <p class="text-gray-300 ml-8">${comment.description}</p>
                  <div class="rating mb-4 ml-8">
                    <p class="text-gray-400">Avaliação: ${comment.rating}</p>
                  </div>
                  <hr>
                </div>
              `).join('')}
            </div>
          </div>
        `}
      </div>
    </div>
    <div>
        <h2 class="text-2xl text-white mb-4">Próximos vídeos</hdiv>
        <div class="flex flex-col">
            ${course.videos.map((video, index) => {
            if (index !== 0) {
                const url = video.link;
                const parts = url.split('/');
                const lastPart = parts[parts.length - 1];
                console.log(`https://i.ytimg.com/vi/${lastPart}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAT2z9RqaI-jehQaQndH-nDKOaiuA`)
                return `
                <div>
                    <a href="${openLink(video.link, user.plan)}" target="_blank" class="flex items-center mb-4">
                        <img src="https://i.ytimg.com/vi/${lastPart}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAT2z9RqaI-jehQaQndH-nDKOaiuA" alt="Imagem do usuário" class="w-28 h-20 rounded-md mr-4">
                        <div>
                            <h3 class="text-lg text-white mb-2">${video.title} - ${video.description}</h3>
                            <p class="text-gray-400 text-sm">${course.teachers[0].name}</p>
                        </div>
                    </a>
                </div>
                `;
            }}).join('')}
    </div>
  `;
}

function openLink(link, plan) {
    return link;
}

renderCourseDetails(course);
