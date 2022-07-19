function sumTable() {
let body = document.querySelectorAll('table tr');
let sum = 0;
for (let index = 1; index < body.length; index++) {
   let col = body[index].children;
   let cost = col[col.length - 1].textContent;
   sum+= Number(cost);
}
let elSum = document.getElementById('sum');
elSum.textContent = sum;
}