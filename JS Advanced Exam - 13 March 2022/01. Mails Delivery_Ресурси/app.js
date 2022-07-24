function solve() {
    let recipentField = document.getElementById('recipientName');
    let titleField = document.getElementById('title');
    let messageField = document.getElementById('message');
    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    let listOfMails = document.getElementById('list');
    let sendMails = document.querySelector('.sent-list');
    let deletedMails = document.querySelector('.delete-list');

    addBtn.type = 'button';
    resetBtn.type = 'button';

    addBtn.addEventListener('click', deliverMail);
    resetBtn.addEventListener('click', resetFieldValues);

    function deliverMail() {
        const recipentContent = recipentField.value;
        const titleContent = titleField.value;
        const messageContent = messageField.value;
        let elementToRemove = null;

        if (!recipentContent || !titleContent || !messageContent) {
            return;
        }

        const liEl = document.createElement('li');
        const titleEl = document.createElement('h4');
        titleEl.textContent = `Title: ${titleContent}`;

        const recipentName = document.createElement('h4');
        recipentName.textContent = `Recipient Name: ${recipentContent}`;

        const messageEl = document.createElement('span');
        messageEl.textContent = messageContent;

        const divEl = document.createElement('div');
        divEl.id = 'list-action';

        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.id = 'send';
        submitBtn.textContent = 'Send';

        submitBtn.addEventListener('click', (ev) => {
            elementToRemove = ev.target.parentElement.parentElement;
            listOfMails.removeChild(elementToRemove);
            divEl.removeChild(submitBtn);

            const title = document.createElement('span');
            title.textContent = `Title: ${titleContent}`;

            const recipient = document.createElement('span');
            recipient.textContent = `To: ${recipentContent}`;

            const div = document.createElement('div');
            div.classList.add('btn');

            const button = document.createElement('button');
            button.addEventListener('click', (ev) => {
                elementToRemove = ev.target.parentElement.parentElement;
                elementToRemove.removeChild(div);
                deletedMails.appendChild(elementToRemove);
            });

            button.type = 'submit';
            button.classList.add('delete');
            button.textContent = 'Delete';
            div.appendChild(button);

            liEl.removeChild(titleEl);
            liEl.removeChild(recipentName);
            liEl.removeChild(messageEl);
            liEl.removeChild(divEl);

            liEl.appendChild(recipient);
            liEl.appendChild(title);
            liEl.appendChild(div);

            sendMails.appendChild(elementToRemove);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', (ev) => {
            elementToRemove = ev.target.parentElement.parentElement;
            deletedMails.appendChild(elementToRemove);

            const title = document.createElement('span');
            title.textContent = `Title: ${titleContent}`;

            const recipient = document.createElement('span');
            recipient.textContent = `To: ${recipentContent}`;

            liEl.removeChild(titleEl);
            liEl.removeChild(recipentName);
            liEl.removeChild(messageEl);
            liEl.removeChild(divEl);

            liEl.appendChild(recipient);
            liEl.appendChild(title);
        });

        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete';
        deleteBtn.textContent = 'Delete';

        divEl.appendChild(submitBtn);
        divEl.appendChild(deleteBtn);

        liEl.appendChild(titleEl);
        liEl.appendChild(recipentName);
        liEl.appendChild(messageEl);
        liEl.appendChild(divEl);

        listOfMails.appendChild(liEl);

        resetFieldValues();
    }

    function resetFieldValues() {
        recipentField.value = '';
        titleField.value = '';
        messageField.value = '';
    }
}
solve()