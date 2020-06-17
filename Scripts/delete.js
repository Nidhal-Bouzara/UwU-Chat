const chatWindow = document.querySelector('#chat-display');
const deleteMsg = document.querySelectorAll('.delete-msg');

chatWindow.addEventListener('click', (e) => {
  if (e.target == deleteMsg) {
    console.log('haha');
  } else {
    console.log('sad face');
  }
});
