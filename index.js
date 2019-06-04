function add() {
  let username = document.getElementById('usernamesignup');
  let password = document.getElementById('passwordsignup');
  let items = document.getElementById('items')

  const userValue = 'admin'
  const passValue = 'admin123'

  let btn = document.querySelector('#signin')

  btn.addEventListener('click', (event) => {
    event.preventDefault();
    let output = ""
    if (username.value == "" && password.value == "") {
      alert('Enter your username and password')
    }
    else if (username.value == "") {
      alert('Enter your username')
    }
    else if (password.value == "") {
      alert('Enter your password')
    }
    else if (username.value == userValue && password.value == passValue) {
      output += `
        <p>Successful, You Are Welcome</p>
      `
      document.querySelector('.diva').innerHTML = output;

      document.getElementById('usernamesignup').value = "";
      document.getElementById('passwordsignup').value = "";
    }
    else if (username.value != userValue || password.value != passValue) {
      output += `
        <p>Incorrect Username and Password</p>
      `
    document.querySelector('.diver').innerHTML = output;

    document.getElementById('usernamesignup').value = "";
    document.getElementById('passwordsignup').value = "";
    }
    else {
      alert('Enter your username and password')
  }
  })
}

add()
