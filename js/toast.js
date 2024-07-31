function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .toast {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 50;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            display: none;
            max-width: 90%;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        .toast-success {
            background-color: #48bb78; /* Tailwind green-500 */
            color: #fff;
        }

        .toast-error {
            background-color: #f56565; /* Tailwind red-500 */
            color: #fff;
        }

        .toast-show {
            display: block;
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
}

export function showToast(message, type = 'success') {
    if (!document.querySelector('style[data-toast-styles]')) {
        injectStyles();
    }

    const toastDiv = document.createElement('div');
    toastDiv.classList.add('toast', `toast-${type}`);
    toastDiv.textContent = message;

    document.body.appendChild(toastDiv);

    // Trigger reflow to enable the transition
    toastDiv.offsetWidth;

    // Add the show class to make it visible
    toastDiv.classList.add('toast-show');

    setTimeout(() => {
        toastDiv.classList.remove('toast-show');
        // Wait for the transition to end before removing the element
        toastDiv.addEventListener('transitionend', () => {
            document.body.removeChild(toastDiv);
        }, { once: true });
    }, 3000);
}