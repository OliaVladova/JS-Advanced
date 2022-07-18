function extractText() {
    let result ;
    const element = document.getElementById('items').textContent;
    const toWriteIn = document.getElementById('result');
    toWriteIn.textContent = element;
}