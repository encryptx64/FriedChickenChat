document.addEventListener('DOMContentLoaded', (event) => {
    const messageForm = document.getElementById('message-form');
    const messageList = document.getElementById('message-list');

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const timestamp = new Date().toLocaleString();

        const newMessage = {
            name: name,
            message: message,
            timestamp: timestamp
        };

        let messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(newMessage);
        localStorage.setItem('messages', JSON.stringify(messages));

        displayMessages();
        messageForm.reset();
    });

    function displayMessages() {
        messageList.innerHTML = '';
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.forEach(msg => {
            const messageItem = document.createElement('div');
            messageItem.classList.add('message-item');
            messageItem.innerHTML = `
                <h3>${msg.name}</h3>
                <p>${msg.message}</p>
                <small>${msg.timestamp}</small>
            `;
            messageList.appendChild(messageItem);
        });
    }

    displayMessages();
});
