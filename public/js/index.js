const btn = document.getElementById('test');
const signupBtn = document.getElementById('signup');

// Arroy of objects with usernames and passwords
const users = [
  {
    username: 'Zivai',
    password: 'Z1v41_97',
  },
  {
    username: 'B1ll_G4t3s',
    password: 'microsoft',
  },
  {
    username: 'C0d3r_123',
    password: 'c0d3',
  },
  {
    username: 'John',
    password: 'J0hn998',
  },
];

// Check username and password
function validateLogin() {
  let user = document.getElementById('username').value;
  let login = document.getElementById('password').value;
  let pass = false;

  users.map((userInput) => {
    if (userInput.username === user && userInput.password === login)
      pass = true;
  });

  return pass;
}

console.log(btn);

//Add onclick event listener
btn.addEventListener('click', (e) => {
  if (validateLogin()) {
    console.log('pass');
  } else {
    e.preventDefault();
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('username').focus();
    alert('Incorrect username or password!');
  }
});

//Signup function
function signup() {
  let usernameIn = prompt('Please enter a username:', 'Username');
  let passed = false;
  if (usernameIn) {
    let passwordIn = prompt('Please enter a password:', 'Password');

    users.map((newUser) => {
      while (passed !== true) {
        if (newUser.username === usernameIn) {
          usernameIn = prompt(
            'Username aleady exists. Please enter diffrent username:',
            'Username'
          );
          password = prompt('Please enter a password:', 'Password');
          users.push({ username: usernameIn, password: passwordIn });
        } else {
          users.push({ username: usernameIn, password: passwordIn });
          passed = true;
        }
      }
    });
  }
}

signupBtn.addEventListener('click', () => {
  signup();
});
