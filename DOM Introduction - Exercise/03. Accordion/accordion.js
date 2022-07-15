function toggle() {
   let button = document.getElementsByClassName('button')[0];
   let state = button.textContent;
   let text = document.getElementById('extra');
   if(state == 'More'){
       text.style.display = 'block';
       button.textContent = 'Less';
   }else{
    text.style.display = 'none';
    button.textContent = 'More';
   }
}