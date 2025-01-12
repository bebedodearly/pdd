const dataInicio = new Date('2021-02-12');
function atualizarContador() {
  const agora = new Date();
  
  let anos = agora.getFullYear() - dataInicio.getFullYear();
  let meses = agora.getMonth() - dataInicio.getMonth();
  let dias = agora.getDate() - dataInicio.getDate();



  if (meses < 0) {
    anos--;
    meses += 12;
  }

  if (dias < 0) {
    const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    meses--;
    dias += ultimoDiaMesAnterior;

    if (meses < 0) {
      anos--;
      meses += 12;
    }
  }

  document.getElementById('anos-num').innerText = anos;
  document.getElementById('meses-num').innerText = meses;
  document.getElementById('dias-num').innerText = dias;
}

setInterval(atualizarContador, 1000);

document.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrollTop + viewportHeight >= fullHeight - 10) {
    showPopup();
  }
});

function showPopup() {
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';

  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
      <p>Você encontrou uma página secreta! Deseja acessar?</p>
      <button id="popup-yes">Sim</button>
      <button id="popup-no">Não</button>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  document.getElementById('popup-yes').addEventListener('click', () => {
    overlay.remove();
    showLoginScreen();
  });

  document.getElementById('popup-no').addEventListener('click', () => {
    overlay.remove();
  });
}

function showLoginScreen() {
  const overlay = document.createElement('div');
  overlay.className = 'login-overlay';

  overlay.innerHTML = `
      <h2>Faça Login</h2>
      <form id="login-form">
          <label for="username">Usuário:</label><br>
          <input type="text" id="username" name="username" required><br>
          <label for="password">Senha:</label><br>
          <input type="password" id="password" name="password" required><br><br>
          <button type="submit">Entrar</button>
      </form>
      <button id="close-login">Fechar</button>
  `;

  document.body.appendChild(overlay);

  document.getElementById('close-login').addEventListener('click', () => {
    overlay.remove();
  });

  document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (validarLogin(username, password)) {
      alert('Login bem-sucedido!');
      window.location.href = 'ps.html'; 
    } else {
      alert('Usuário ou senha incorretos.');
    }
  });
}

function validarLogin(username, password) {
  return username === 'dearly99' && password === 'amomeubebe';
}
