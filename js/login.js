import { loginUser } from './api.js';
import { showToast } from './toast.js';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    loginUser(email, password)
    .then(user => {
      localStorage.setItem('user', JSON.stringify(user));
      showToast(`Bem vindo ${user.name}`, 'success');
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 1000);
    })
    .catch(error => {
      showToast(error, 'error');
      console.error('Erro ao fazer login:', error);
    });
});