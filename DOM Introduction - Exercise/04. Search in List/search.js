function search() {
   let all = document.querySelectorAll('li');
   let search = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   for (const el of all) {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = '';
   }
   let counter = 0;
   for (let index = 0; index < all.length; index++) {
      let element = all[index].textContent;
      if(element.match(search)){
         counter++;
         all[index].style.fontWeight = 'bold';
         all[index].style.textDecoration = 'underline';
      }
    // `${matches} matches found
   }
   result.textContent = counter + ' matches found';
}
