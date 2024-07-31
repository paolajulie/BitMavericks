export function isLogged() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return true;
    } else {
        window.location.href = 'index.html';
        return false;
    }
}

export function getRole() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.role;
}

export function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}