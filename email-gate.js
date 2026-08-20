/* Email Gate Modal — Blocks tool access until email is captured */

(function() {
  const STORAGE_KEY = 'toughjobs_user_email';
  const GATE_ID = 'email-gate-modal';

  // Check if email already captured
  const savedEmail = localStorage.getItem(STORAGE_KEY);
  if (savedEmail) {
    // User already submitted email, unlock tools
    unlockTools();
    return;
  }

  // Create modal HTML
  const modal = document.createElement('div');
  modal.id = GATE_ID;
  modal.innerHTML = `
    <style>
      #${GATE_ID} {
        position: fixed;
        inset: 0;
        background: rgba(10, 15, 28, .92);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        backdrop-filter: blur(2px);
      }
      #${GATE_ID}.unlocked {
        display: none;
      }
      .gate-card {
        background: #fff;
        border-radius: 12px;
        padding: clamp(40px, 6vw, 60px);
        max-width: 480px;
        box-shadow: 0 20px 60px rgba(10, 15, 28, .3);
        animation: slideUp .4s ease;
      }
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      .gate-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: "Archivo", sans-serif;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .08em;
        font-size: 11.5px;
        color: #C8262A;
        margin-bottom: 14px;
      }
      .gate-h {
        font-family: "Archivo Black", sans-serif;
        font-size: clamp(24px, 4vw, 36px);
        line-height: 1.1;
        margin: 0 0 16px;
        text-transform: uppercase;
        letter-spacing: -.01em;
        color: #0A0F1C;
      }
      .gate-p {
        font-size: 15px;
        line-height: 1.6;
        color: #5B6471;
        margin: 0 0 28px;
      }
      .gate-form {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .gate-form input {
        font-family: "Archivo", sans-serif;
        font-size: 15px;
        padding: 13px 14px;
        border: 1px solid #E4E7EC;
        border-radius: 8px;
        background: #fff;
        color: #0A0F1C;
      }
      .gate-form input:focus {
        outline: none;
        border-color: #C8262A;
        box-shadow: 0 0 0 3px rgba(200, 38, 42, .12);
      }
      .gate-submit {
        appearance: none;
        border: 0;
        cursor: pointer;
        font-family: "Archivo", sans-serif;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .05em;
        font-size: 14px;
        padding: 15px 26px;
        border-radius: 8px;
        background: #C8262A;
        color: #fff;
        transition: transform .15s, box-shadow .15s, background .15s;
        margin-top: 8px;
      }
      .gate-submit:hover {
        transform: translate(-2px, -2px);
        box-shadow: 5px 5px 0 rgba(10, 15, 28, .85);
        background: #0A0F1C;
      }
      .gate-submit:disabled {
        opacity: .5;
        cursor: not-allowed;
        transform: none;
      }
      .gate-consent {
        font-size: 12px;
        line-height: 1.5;
        color: #5B6471;
        margin-top: 16px;
      }
      .gate-consent a {
        color: #C8262A;
        text-decoration: none;
      }
      .gate-consent a:hover {
        text-decoration: underline;
      }
      .gate-back {
        appearance: none;
        border: 1px solid #E4E7EC;
        background: transparent;
        color: #0A0F1C;
        font-family: "Archivo", sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .04em;
        font-size: 13px;
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        transition: all .15s;
        margin-top: 12px;
      }
      .gate-back:hover {
        border-color: #C8262A;
        color: #C8262A;
      }
    </style>
    <div class="gate-card">
      <div class="gate-eyebrow">✓ Get Access</div>
      <h2 class="gate-h">Get your free tool access</h2>
      <p class="gate-p">Enter your email to open all four free Toughjobs marketing tools — no credit card required.</p>
      <form class="gate-form" id="gate-form">
        <input type="email" id="gate-email" placeholder="your@email.com" required />
        <button type="submit" class="gate-submit">Open Tools →</button>
        <div class="gate-consent">
          We'll send you updates on new tools and marketing insights. <a href="privacy.html">Privacy</a> · Unsubscribe anytime.
        </div>
      </form>
      <button type="button" class="gate-back" id="gate-back-btn">← Go Back</button>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  const form = document.getElementById('gate-form');
  const emailInput = document.getElementById('gate-email');
  const submitBtn = form.querySelector('button');

  const backBtn = document.getElementById('gate-back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      window.location.assign('index.html');
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email) return;

    // Store email and unlock
    localStorage.setItem(STORAGE_KEY, email);
    
    // Optional: send to your email capture service here
    // fetch('/api/capture-email', { method: 'POST', body: JSON.stringify({ email }) });

    modal.classList.add('unlocked');
    document.body.style.overflow = '';
    unlockTools();
  });

  function unlockTools() {
    // Show main content, hide loading states
    if (document.querySelector('header')) document.querySelector('header').style.opacity = '1';
    if (document.querySelector('main')) document.querySelector('main').style.opacity = '1';
  }
})();
