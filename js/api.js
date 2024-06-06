import { data } from "./data.js";

export function fetchCategorys() {
  
}

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let users = [];
      data.forEach((category) => {
        users = users.concat(
          category.courses.flatMap((course) => [
            ...course.teachers,
            ...course.presencialList,
          ])
        );
      });

      resolve(users);
      console.log(users);
    }, 500);
  });
}


export async function loginUser(email, password) {
  try {
    const users = await fetchUsers();
    const user = users.find(
      (user) => user.login === email && user.password === password
    );
    if (user) {
      return Promise.resolve(user);
    } else {
      return Promise.reject("Email ou senha inválidos.");
    }
  } catch (error) {
    return Promise.reject("Erro ao buscar usuários.");
  }
}

export async function registerUser(newUser) {
  try {
    const users = await fetchUsers();
    const userExists = users.some((user) => user.login === newUser.login);
    if (userExists) {
      return Promise.reject("Email já cadastrado.");
    } else {
      data.courses[0].presencialList.push(newUser);
      return Promise.resolve(newUser);
    }
  } catch (error) {
    return Promise.reject("Erro ao registrar usuário.");
  }
}


// Função para importar as categorias e seus respectivos cursos
export function fetchCategoriesWithCourses() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const categoriesWithCourses = data.map((category) => ({
        category: category.name,
        courses: category.courses.map((course) => ({
          name: course.name,
          banner: course.banner,
          teachers: course.teachers,
          presencialList: course.presencialList,
          videos: course.videos,
          description: course.description,
          comments: course.comments,
          quiz: course.quiz,
          hours: course.hours
        }))
      }));
      resolve(categoriesWithCourses);
    }, 500);
  });
}