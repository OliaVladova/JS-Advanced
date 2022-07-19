function create(words) {
   let content = document.getElementById('content');
   for (const word of words) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      div.addEventListener('click', listen);
      function listen() {
         paragraph.style.display = 'inline-block';
      }
      div.appendChild(paragraph);
      content.appendChild(div);
   }
}