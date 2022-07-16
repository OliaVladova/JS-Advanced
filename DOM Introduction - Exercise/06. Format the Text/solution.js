function solve() {
    let inputText = document.getElementById('input').value;
    let output = document.getElementById('output');
    let text = inputText.split('.').filter((p)=>p.length>0);
    for(let i = 0; i<text.length;i+=3){
      let arr = [];
        for (let y = 0; y < 3; y++) {
            if (text[i + y]) {
                arr.push(text[i + y]);
            }
        }
        let paragraph = arr.join('. ') + '.';
        output.innerHTML += `<p>${paragraph}</p>`;
    }
  
}