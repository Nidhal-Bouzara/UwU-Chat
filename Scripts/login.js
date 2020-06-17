// Complete from A to Z login function
const user_init = () => {
  // User login (setting the user as entered data in local storage) and rendering the chat
  const user_login = () => {
    userForm.style.display = 'none';
    chatInput.classList.remove('msg-input');

  }

  // Listening for messages
  const msgForm = document.querySelector('.msgInput');
  msgForm

  // Listening for when the user enters his name and clicks submit
  const user_listen = () => {
  userForm.addEventListener('submit', (e) => {
    if (!userForm.username.value) {
      e.preventDefault();
      alert("You can't leave the username field empty >:(");
    } else {
      console.log(userForm, 'dos');
      e.preventDefault();
      localStorage.setItem('username', userForm.username.value);
      userForm.username.value = '';
      user_login();
    }
  })}

  // Checking localStorage if the user's logged in
  if (!localStorage.getItem('username')) {
    user_listen();
  } else {
    user_login();
  }
}
