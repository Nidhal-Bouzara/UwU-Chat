const userForm = document.querySelector('#username-input__form');
const userInput = document.querySelector('#username-input__text');
const chatInput = document.querySelector('#msg-input');
const chatForm = document.querySelector('.chat-form');
const chatDisplay = document.querySelector('#chat-display');
const userChange = document.querySelector('#user-change');
let channel = 'Chat';

// Listening for user change button click
userChange.addEventListener('click', (e) => {
  localStorage.setItem('username', '');
  userForm.style.display = 'block';
  chatInput.classList.add('msg-input');
  user_init();
});

// Initializing the app for the first time
user_init();

// Listening for chat msgs
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('Chat').add({
    username: localStorage.getItem('username'),
    message: chatForm.chatMsg.value,
    timestamp: firebase.firestore.Timestamp.now().seconds,
  });
  chatForm.chatMsg.value = '';
});

// Updating chat using the data from Firestore
const update_chat = (docs) => {
  chatDisplay.innerHTML = '';
  docs.forEach((item) => {
    chatDisplay.innerHTML += `
      <div class="msg-pair">
        <p class="chat-input" data-id="${item.id}"><span class="usernames font-weight-light text-secondary">${item.username}:</span> &emsp; ${item.message}</p>
        <span class="delete-msg"><i class="fas fa-trash-alt"></i></span>
      </div>
    `
    let chatBottom = chatDisplay.scrollHeight;
    chatDisplay.scrollTo(0, chatBottom);
  });
}

db.collection(channel).orderBy('timestamp').onSnapshot( snapshot => {
  let changes = snapshot.docs;
  let docs = changes.map((item) => {return item.data()});
  update_chat(docs);
})
