function focused() {
   let boxes = Array.from(document.querySelectorAll('input'));
   boxes.forEach(box => {
       box.addEventListener('focus', clicked);
       box.addEventListener('blur', blurred);
   });
   

   function clicked(ev){
       ev.target.parentElement.className = 'focused';
   }
   function blurred(ev){
    ev.target.parentElement.className = '';
}
}