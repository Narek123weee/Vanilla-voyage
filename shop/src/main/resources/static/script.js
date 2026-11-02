// Tab switching
function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
        btn.classList.toggle('active', (tab === 'login' && i === 0) || (tab === 'register' && i === 1));
    });
    document.getElementById('panel-login').classList.toggle('active', tab === 'login');
    document.getElementById('panel-register').classList.toggle('active', tab === 'register');
}

// ─── Google Identity Services ──────────────────────────────────────────────
// Called once the GIS script loads (async defer on the <script> tag).
// Replace YOUR_GOOGLE_CLIENT_ID below with your actual OAuth 2.0 client ID
// from https://console.cloud.google.com/apis/credentials
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

window.addEventListener('load', function () {
    if (typeof google === 'undefined') return; // GIS not loaded yet

    google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleCredential,
        auto_select: false,
        cancel_on_tap_outside: true,
    });

    // Render buttons in both panels
    const loginContainer = document.getElementById('google-btn-login');
    const registerContainer = document.getElementById('google-btn-register');

    const btnConfig = { theme: 'outline', size: 'large', width: 340, text: 'signin_with', shape: 'rectangular' };

    if (loginContainer) google.accounts.id.renderButton(loginContainer, btnConfig);
    if (registerContainer) google.accounts.id.renderButton(registerContainer, { ...btnConfig, text: 'signup_with' });
});

// Handles the credential response from Google
async function handleGoogleCredential(response) {
    const idToken = response.credential;

    try {
        const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken })
        });

        if (res.ok) {
            const user = await res.json();
            localStorage.setItem('userId', user.id);
            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('userName', user.name || user.email);
            window.location.href = 'index.html';
        } else {
            const err = await res.text();
            alert('Google sign-in failed: ' + err);
        }
    } catch (e) {
        alert('Server connection error!');
    }
}

// ─── Email / Password Registration ─────────────────────────────────────────
async function register() {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    if (!email || !password) { alert('Please fill all fields!'); return; }
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if (response.ok) {
            const user = await response.json();
            localStorage.setItem('userId', user.id);
            localStorage.setItem('userEmail', user.email);
            alert('Account created!');
            window.location.href = 'index.html';
        } else {
            const error = await response.text();
            alert('Error: ' + error);
        }
    } catch (e) {
        alert('Server connection error!');
    }
}

// ─── Email / Password Login ─────────────────────────────────────────────────
async function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if (!email || !password) { alert('Please fill all fields!'); return; }
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if (response.ok) {
            const user = await response.json();
            localStorage.setItem('userId', user.id);
            localStorage.setItem('userEmail', user.email);
            window.location.href = 'index.html';
        } else {
            alert('Incorrect email or password!');
        }
    } catch (e) {
        alert('Server connection error!');
    }
}

// ─── Cart (backend) ─────────────────────────────────────────────────────────
async function addToCartBackend(productId, quantity = 1) {
    const userId = localStorage.getItem('userId');
    if (!userId) {
        alert('Please sign in first!');
        window.location.href = 'login.html';
        return;
    }
    try {
        const response = await fetch('/api/cart/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'userId': userId },
            body: JSON.stringify({ productId, quantity })
        });
        if (response.ok) {
            alert('Added to cart!');
        } else {
            alert('Could not add to cart!');
        }
    } catch (e) {
        alert('Server connection error!');
    }
}
