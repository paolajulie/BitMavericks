import { isLogged, getRole, logout } from "./auth.js";
import { fetchCategoriesWithCourses } from "./api.js";
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
        <img src="${
          user.photoPerfil
        }" alt="Imagem do usuário" class="w-12 h-12 rounded-full mr-4">
        <div>
          <p class="font-bold text-lg text-gray-600">${user.name}</p>
          <p class="text-gray-600">${user.login}</p>
        </div>
      </div>
      <div class="flex flex-col justify-end">
        ${
          user.role === "Student"
            ? `<button id="profileButton" class="text-black hover:bg-gray-100 border-solid border-2 border-gray-400 font-bold py-2 px-4 rounded mb-2">Acessar Perfil</button>`
            : ""
        }
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

document.getElementById("closePopUp").addEventListener("click", () => {
  const popup = document.getElementById("overlay");
  popup.classList.add("hidden");
});

function createCarousel(category, index) {
  const categoryContainer = document.createElement("div");
  const categoryTitle = document.createElement("h1");
  categoryTitle.className = "text-2xl mb-3 mx-[9vw] my-12";
  categoryTitle.textContent = category.category;
  categoryContainer.appendChild(categoryTitle);

  const carouselContainer = document.createElement("div");
  carouselContainer.className = "custom-carousel-container";

  const prevButton = document.createElement("button");
  prevButton.id = `custom-prev-${index}`;
  prevButton.classList.add("custom-carousel-button", "custom-prev", "selected-none");
  prevButton.innerHTML =
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';

  const nextButton = document.createElement("button");
  nextButton.id = `custom-next-${index}`;
  nextButton.classList.add("custom-carousel-button", "custom-next");
  nextButton.innerHTML =
    '<span class="carousel-control-next-icon p-0" aria-hidden="true"></span>';

  const carousel = document.createElement("div");
  carousel.id = `custom-carousel-${index}`;
  carousel.className = "custom-carousel";

  category.courses.forEach((course) => {
    let carouselItem;
    if (course.banner) {
      carouselItem = document.createElement("img");
      carouselItem.classList.add("custom-carousel-item-image", "bg-cover");
      carouselItem.src = `${course.banner ? course.banner : "./img/notebook.jpg"}`;
      console.log(course.banner);
    } else {
      carouselItem = document.createElement("div");
      carouselItem.classList.add("custom-carousel-item", "bg-cover");
    }
    carouselItem.addEventListener("click", () => {
      const popup = document.getElementById("overlay");
      popup.classList.remove("hidden");
      const banner = document.getElementById("banner");
      console.log(course.banner)
      banner.style.backgroundImage = `url(${course.banner ? course.banner : "./img/notebook.jpg"})`;
      const registerCourse = document.getElementById("register-course");
      registerCourse.addEventListener("click", () => {
        showToast(`Inscrito em ${course.name} com sucesso!`);
        popup.classList.add("hidden");
      });
      const toFirstClass = document.getElementById("toFirstClass");
      toFirstClass.addEventListener("click", () => {
        sessionStorage.setItem("course", JSON.stringify(course));
        window.location.href = `course.html`;
      });
    });
    const courseTitle = document.createElement("h3");
    courseTitle.className = "text-xl font-bold";
    courseTitle.textContent = course.name;

    carouselItem.appendChild(courseTitle);
    carousel.appendChild(carouselItem);
  });

  carouselContainer.appendChild(prevButton);
  carouselContainer.appendChild(carousel);
  carouselContainer.appendChild(nextButton);

  categoryContainer.appendChild(carouselContainer);

  return categoryContainer;
}

function initializeCarousel(index) {
  const customCarousel = document.getElementById(`custom-carousel-${index}`);
  const customPrevButton = document.getElementById(`custom-prev-${index}`);
  const customNextButton = document.getElementById(`custom-next-${index}`);

  let customCurrentIndex = 0;
  const itemsPerPage = 5;

  function updateCustomCarousel() {
    const itemWidth = customCarousel.children[0].getBoundingClientRect().width;
    customCarousel.style.transform = `translateX(${-customCurrentIndex * (itemWidth + 10)}px)`;
  }

  customPrevButton.addEventListener("click", () => {
    if (customCurrentIndex > 0) {
      customCurrentIndex--;
      updateCustomCarousel();
    }
  });

  customNextButton.addEventListener("click", () => {
    if (customCurrentIndex < customCarousel.children.length - itemsPerPage) {
      customCurrentIndex++;
      updateCustomCarousel();
    }
  });

  window.addEventListener("resize", updateCustomCarousel);
  document.addEventListener("DOMContentLoaded", updateCustomCarousel);
}

window.onload = async function () {
  const categoriesWithCourses = await fetchCategoriesWithCourses();
  const carouselsContainer = document.getElementById("carousels-container");

  categoriesWithCourses.forEach((category, index) => {
    const categoryCarousel = createCarousel(category, index);
    carouselsContainer.appendChild(categoryCarousel);
    initializeCarousel(index);
  });
};

const customPatrocinadorCarousel = document.getElementById(
  "custom-patrocinadores-carousel"
);
const customPatrocinadorPrevButton = document.getElementById(
  "custom-patrocinadores-prev"
);
const customPatrocinadorNextButton = document.getElementById(
  "custom-patrocinadores-next"
);

let customPatrocinadorCurrentIndex = 0;
const itemsPerPagePatrocinador = 4;

function updateCustomPatrocinadorCarousel() {
  const itemWidth =
    customPatrocinadorCarousel.children[0].getBoundingClientRect().width;
  customPatrocinadorCarousel.style.transform = `translateX(${
    -customPatrocinadorCurrentIndex * (itemWidth + 10)
  }px)`;
}

customPatrocinadorPrevButton.addEventListener("click", () => {
  if (customPatrocinadorCurrentIndex > 0) {
    customPatrocinadorCurrentIndex--;
    updateCustomPatrocinadorCarousel();
  }
});

customPatrocinadorNextButton.addEventListener("click", () => {
  if (
    customPatrocinadorCurrentIndex <
    customPatrocinadorCarousel.children.length - itemsPerPagePatrocinador
  ) {
    customPatrocinadorCurrentIndex++;
    updateCustomPatrocinadorCarousel();
  }
});

window.addEventListener("resize", updateCustomPatrocinadorCarousel);

document.addEventListener("DOMContentLoaded", updateCustomPatrocinadorCarousel);

