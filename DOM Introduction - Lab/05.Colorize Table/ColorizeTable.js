function colorize() {
    let table = document.querySelectorAll("table tr");
    let index = 0;
   for (const row of table) {
    index++;
    if(index%2==0){
        row.style.background = "teal";
    }
   }
}