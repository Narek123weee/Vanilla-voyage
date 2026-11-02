// ═══════════════════════════════════════════════
//  Vanilla Voyage — Cart & Checkout system
//  Cart persists in localStorage so it follows the
//  visitor across index.html / collection.html.
// ═══════════════════════════════════════════════

const CART_KEY = 'vv_cart';

/* ── State helpers ─────────────────────────────── */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

function cartCount(cart) {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function formatAMD(amount) {
  return Math.round(amount).toLocaleString('en-US') + ' AMD';
}

function productDisplayName(item) {
  if (item.nameKey && typeof I18N !== 'undefined') {
    const t = I18N.t(item.nameKey);
    if (t && t !== item.nameKey) return t;
  }
  return item.nameFallback || item.nameKey || 'Product';
}

/* ── Add to cart (called from product cards) ──── */
function addToCart(cardEl) {
  const id = cardEl.dataset.productId;
  if (!id) return;
  const price = parseFloat(cardEl.dataset.price);
  const imgEl = cardEl.querySelector('.scent-img-placeholder img');
  const img = cardEl.dataset.img || (imgEl ? imgEl.src : '');
  const nameEl = cardEl.querySelector('h3');
  const nameKey = nameEl ? nameEl.getAttribute('data-i18n') : null;
  const nameFallback = nameEl ? nameEl.textContent.trim() : 'Product';

  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, nameKey, nameFallback, price, img, qty: 1 });
  }
  saveCart(cart);
  showToast(typeof I18N !== 'undefined' ? I18N.t('cart_added_toast') : 'Added to cart');
  pulseCartIcon();
}

function removeFromCart(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart(cart);
}

/* ── Drawer rendering ──────────────────────────── */
function renderCart() {
  const badge = document.getElementById('navCartBadge');
  const itemsWrap = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotalAmount');
  if (!itemsWrap) return; // cart markup not present on this page

  const cart = getCart();
  const count = cartCount(cart);

  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('show', count > 0);
  }

  if (cart.length === 0) {
    const emptyTitle = typeof I18N !== 'undefined' ? I18N.t('cart_empty') : 'Your cart is empty';
    const emptySub = typeof I18N !== 'undefined' ? I18N.t('cart_empty_sub') : 'Add some fragrances';
    itemsWrap.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 2H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
        <p>${emptyTitle}</p>
        <p>${emptySub}</p>
      </div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = '';

  itemsWrap.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-img"><img src="${item.img}" alt="" /></div>
      <div class="cart-item-info">
        <div class="cart-item-top">
          <span class="cart-item-name">${productDisplayName(item)}</span>
          <button class="cart-item-remove" title="${typeof I18N !== 'undefined' ? I18N.t('cart_remove') : 'Remove'}" onclick="removeFromCart('${item.id}')">✕</button>
        </div>
        <span class="cart-item-price">${formatAMD(item.price)}</span>
        <div class="cart-item-bottom">
          <div class="qty-stepper">
            <button onclick="changeQty('${item.id}', -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty('${item.id}', 1)">+</button>
          </div>
          <span class="cart-item-subtotal">${formatAMD(item.price * item.qty)}</span>
        </div>
      </div>
    </div>
  `).join('');

  if (totalEl) totalEl.textContent = formatAMD(cartTotal(cart));
}

function pulseCartIcon() {
  const btn = document.getElementById('navCartBtn');
  if (!btn) return;
  btn.style.transform = 'scale(1.15)';
  setTimeout(() => { btn.style.transform = ''; }, 180);
}

/* ── Drawer open/close ─────────────────────────── */
function openCart() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (!overlay || !drawer) return;
  renderCart();
  overlay.classList.add('active');
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (!overlay || !drawer) return;
  overlay.classList.remove('active');
  drawer.classList.remove('open');
  if (!document.getElementById('checkoutModal')?.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

/* ── Checkout modal ("small page over the main page") ── */
function openCheckout() {
  const cart = getCart();
  if (cart.length === 0) return;

  // Require login before showing checkout
  if (!localStorage.getItem('userId')) {
    closeCart();
    window.location.href = 'login.html';
    return;
  }

  const overlay = document.getElementById('checkoutOverlay');
  const modal = document.getElementById('checkoutModal');
  if (!overlay || !modal) return;

  resetCheckoutForm();
  document.getElementById('checkoutTotalAmount').textContent = formatAMD(cartTotal(cart));
  overlay.classList.add('active');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  const overlay = document.getElementById('checkoutOverlay');
  const modal = document.getElementById('checkoutModal');
  if (!overlay || !modal) return;
  overlay.classList.remove('active');
  modal.classList.remove('open');
  const cartDrawer = document.getElementById('cartDrawer');
  if (!cartDrawer || !cartDrawer.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function backToCart() {
  closeCheckout();
  setTimeout(openCart, 150);
}

function resetCheckoutForm() {
  const form = document.getElementById('checkoutForm');
  const success = document.getElementById('checkoutSuccess');
  if (form) {
    form.reset();
    form.style.display = '';
    // Reset card fields
    ['ccNumberInput','ccNameInput','ccExpiryInput','ccCvvInput'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    // Reset personal info fields
    ['piFullNameInput','piPhoneInput','piAddressInput','piCityInput','piPostalInput'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    updateCardVisual();
    document.querySelectorAll('.cc-field input').forEach(i => i.classList.remove('invalid'));
    document.querySelectorAll('.cc-error').forEach(e => e.textContent = '');
    // Go back to step 1
    const step1 = document.getElementById('checkoutStep1');
    const step2 = document.getElementById('checkoutStep2');
    if (step1) step1.style.display = '';
    if (step2) step2.style.display = 'none';
    document.getElementById('stepBtn1')?.classList.add('active');
    document.getElementById('stepBtn2')?.classList.remove('active');
  }
  if (success) success.style.display = 'none';
}

/* ── Card input formatting ─────────────────────── */
function formatCardNumberInput(el) {
  let digits = el.value.replace(/\D/g, '').slice(0, 16);
  el.value = digits.replace(/(.{4})/g, '$1 ').trim();
  updateCardVisual();
}

function formatExpiryInput(el) {
  let digits = el.value.replace(/\D/g, '').slice(0, 4);
  if (digits.length >= 3) {
    el.value = digits.slice(0, 2) + '/' + digits.slice(2);
  } else {
    el.value = digits;
  }
  updateCardVisual();
}

function formatCvvInput(el) {
  el.value = el.value.replace(/\D/g, '').slice(0, 3);
}

function updateCardVisual() {
  const number = document.getElementById('ccNumberInput')?.value || '';
  const name = document.getElementById('ccNameInput')?.value || '';
  const expiry = document.getElementById('ccExpiryInput')?.value || '';
  const visualNumber = document.getElementById('ccVisualNumber');
  const visualName = document.getElementById('ccVisualName');
  const visualExpiry = document.getElementById('ccVisualExpiry');
  if (visualNumber) visualNumber.textContent = number.length ? number.padEnd(19, '•').replace(/(.{4})(?!$)/g, '$1 ').trim() : '•••• •••• •••• ••••';
  if (visualName) visualName.textContent = name.trim() ? name.toUpperCase() : 'FULL NAME';
  if (visualExpiry) visualExpiry.textContent = expiry || 'MM/YY';
}

/* ── Validation + fake payment ─────────────────── */
function validateCheckout() {
  let valid = true;
  const name = document.getElementById('ccNameInput').value.trim();
  const number = document.getElementById('ccNumberInput').value.replace(/\s/g, '');
  const expiry = document.getElementById('ccExpiryInput').value.trim();
  const cvv = document.getElementById('ccCvvInput').value.trim();

  const t = (k, fallback) => (typeof I18N !== 'undefined' ? I18N.t(k) : fallback);

  const setError = (inputId, errId, ok, msg) => {
    const input = document.getElementById(inputId);
    const err = document.getElementById(errId);
    input.classList.toggle('invalid', !ok);
    if (err) err.textContent = ok ? '' : msg;
    if (!ok) valid = false;
  };

  setError('ccNameInput', 'ccNameError', name.length >= 2, t('checkout_error_name', 'Enter the cardholder name'));
  setError('ccNumberInput', 'ccNumberError', /^\d{16}$/.test(number), t('checkout_error_card', 'Check the card number (16 digits)'));

  const expMatch = /^(\d{2})\/(\d{2})$/.exec(expiry);
  let expOk = false;
  if (expMatch) {
    const mm = parseInt(expMatch[1], 10);
    const yy = parseInt(expMatch[2], 10);
    if (mm >= 1 && mm <= 12) {
      const now = new Date();
      const curYY = now.getFullYear() % 100;
      const curMM = now.getMonth() + 1;
      expOk = (yy > curYY) || (yy === curYY && mm >= curMM);
    }
  }
  setError('ccExpiryInput', 'ccExpiryError', expOk, t('checkout_error_expiry', 'Check the expiry date (MM/YY)'));
  setError('ccCvvInput', 'ccCvvError', /^\d{3}$/.test(cvv), t('checkout_error_cvv', 'Check the CVV code (3 digits)'));

  return valid;
}

async function submitCheckout(event) {
  event.preventDefault();
  if (!validateCheckout()) return;

  const userId = localStorage.getItem('userId');
  if (!userId) {
    closeCheckout();
    window.location.href = 'login.html';
    return;
  }

  const payBtn = document.getElementById('checkoutPayBtn');
  payBtn.classList.add('loading');
  payBtn.disabled = true;

  const checkoutPayload = {
    fullName:   document.getElementById('piFullNameInput')?.value.trim() || '',
    phone:      document.getElementById('piPhoneInput')?.value.trim() || '',
    address:    document.getElementById('piAddressInput')?.value.trim() || '',
    city:       document.getElementById('piCityInput')?.value.trim() || '',
    postalCode: document.getElementById('piPostalInput')?.value.trim() || '',
    items: getCart().map(item => ({
      productId: item.id,
      name: productDisplayName(item),
      price: item.price,
      quantity: item.qty,
      imageUrl: item.img
    }))
  };

  try {
    const res = await fetch('/api/cart/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'userId': userId },
      body: JSON.stringify(checkoutPayload)
    });
    payBtn.classList.remove('loading');
    payBtn.disabled = false;
    if (res.ok) {
      document.getElementById('checkoutForm').style.display = 'none';
      document.getElementById('checkoutSuccess').style.display = 'block';
      saveCart([]);
    } else {
      const err = await res.text();
      alert('Checkout failed: ' + (err || 'Please check your cart and try again.'));
    }
  } catch (e) {
    payBtn.classList.remove('loading');
    payBtn.disabled = false;
    alert('Could not reach the server. Please try again.');
  }
}

/* ── Toast ─────────────────────────────────────── */
let toastTimer = null;
function showToast(message) {
  let toast = document.getElementById('vvToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'vvToast';
    toast.className = 'vv-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ── Keep cart drawer in sync with language switch ── */
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  if (typeof I18N !== 'undefined' && !I18N.__cartPatched) {
    const originalSet = I18N.set.bind(I18N);
    I18N.set = function (lang) {
      originalSet(lang);
      renderCart();
    };
    I18N.__cartPatched = true;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.getElementById('checkoutModal')?.classList.contains('open')) closeCheckout();
    else if (document.getElementById('cartDrawer')?.classList.contains('open')) closeCart();
  }
});

/* ── Multi-step checkout ─────────────────────── */
function goToStep(step) {
  const step1 = document.getElementById('checkoutStep1');
  const step2 = document.getElementById('checkoutStep2');
  const btn1  = document.getElementById('stepBtn1');
  const btn2  = document.getElementById('stepBtn2');

  if (step === 2) {
    if (!validatePersonalInfo()) return;
    if (step1) step1.style.display = 'none';
    if (step2) step2.style.display = '';
    if (btn1) btn1.classList.remove('active');
    if (btn2) btn2.classList.add('active');
  } else {
    if (step2) step2.style.display = 'none';
    if (step1) step1.style.display = '';
    if (btn2) btn2.classList.remove('active');
    if (btn1) btn1.classList.add('active');
  }
}

function validatePersonalInfo() {
  let valid = true;
  const t = (k, fb) => (typeof I18N !== 'undefined' ? I18N.t(k) : fb);

  const setErr = (inputId, errId, ok, msg) => {
    const input = document.getElementById(inputId);
    const err   = document.getElementById(errId);
    if (input) input.classList.toggle('invalid', !ok);
    if (err)   err.textContent = ok ? '' : msg;
    if (!ok) valid = false;
  };

  const fullName = document.getElementById('piFullNameInput')?.value.trim() || '';
  const phone    = document.getElementById('piPhoneInput')?.value.trim() || '';
  const address  = document.getElementById('piAddressInput')?.value.trim() || '';
  const city     = document.getElementById('piCityInput')?.value.trim() || '';
  const postal   = document.getElementById('piPostalInput')?.value.trim() || '';

  setErr('piFullNameInput', 'piFullNameError', fullName.length >= 2, t('checkout_error_fullname', 'Please enter your full name'));
  setErr('piPhoneInput',    'piPhoneError',    phone.length >= 6,    t('checkout_error_phone',    'Please enter a valid phone number'));
  setErr('piAddressInput',  'piAddressError',  address.length >= 5,  t('checkout_error_address',  'Please enter your street address'));
  setErr('piCityInput',     'piCityError',     city.length >= 2,     t('checkout_error_city',     'Please enter your city'));
  setErr('piPostalInput',   'piPostalError',   postal.length >= 2,   t('checkout_error_postal',   'Please enter your postal code'));

  return valid;
}
