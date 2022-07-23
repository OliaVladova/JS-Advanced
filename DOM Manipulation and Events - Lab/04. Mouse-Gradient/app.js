function attachGradientEvents() {
   let box = document.getElementById('gradient');
   let result = document.getElementById('result');

   box.addEventListener('mousemove', moving);

   function moving(event){

      let start = event.offsetX;
      let end = box.clientWidth;
      let percent = Math.floor(start/end * 100);
      result.textContent = percent + '%';
   }
}