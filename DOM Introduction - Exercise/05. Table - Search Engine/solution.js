function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let allTable = Array.from(document.querySelectorAll('.container tbody tr'));
      let searched = (document.getElementById('searchField').value).toLowerCase();

      for (const el of allTable) {
         let currElement = el.textContent.toLowerCase();
         if(currElement.includes(searched)){
            el.classList.add('select');
         }else{
            el.classList.remove('select');
         }
      }
   }
}