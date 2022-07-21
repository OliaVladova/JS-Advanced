function encodeAndDecodeMessages() {
    let textareas = Array.from(document.querySelectorAll('textarea'));
    let messageInput = textareas[0];
    let encodedReceived = textareas[1];
    let buttons = Array.from(document.querySelectorAll('button'));
    let sendBtn = buttons[0];
    let readBtn = buttons[1];

    sendBtn.type = 'button';
    sendBtn.addEventListener('click', encode);

    function encode(){
        let inputArr = messageInput.value.split('');
        let coded = '';
        
        for (let index = 0; index < inputArr.length; index++) {
            let c = messageInput.value.charCodeAt(index);
           c = c+1;
           coded+=String.fromCharCode(c);
            
        }
        encodedReceived.value = coded;
        messageInput.value = '';
    }

    readBtn.type = 'button';
    readBtn.addEventListener('click', read);

    function read(){
    let toDecodeArr = encodedReceived.value.split('');
    let decoded = '';
    for (let index = 0; index < toDecodeArr.length; index++) {
        let c = encodedReceived.value.charCodeAt(index);
       c = c-1;
       decoded+=String.fromCharCode(c);
        
    }
    encodedReceived.value = decoded;
    }
}