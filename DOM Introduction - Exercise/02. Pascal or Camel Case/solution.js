function solve() {
  let text = document.getElementById('text').value;
  let type = document.getElementById('naming-convention').value;
  let textArr = text.split(' ');
  let str = '';
  let result = document.getElementById('result');
  let first = textArr[0];

  for (let index = 0; index < textArr.length; index++) {
    textArr[index] = textArr[index].toLowerCase();
    
  }

  if (type == 'Camel Case') {
    str += first.toLowerCase();
    for (let index = 1; index < textArr.length; index++) {
      const element = textArr[index];
      let firstLeter = element[0];
      str += firstLeter.toUpperCase();
      str += element.slice(1, element.length);
    }
  } else if (type == 'Pascal Case') {
    str += first[0].toUpperCase();
   first = first.toLowerCase();
    str+= first.slice(1,first.length);
    for (let index = 1; index < textArr.length; index++) {
      const element = textArr[index];
      let firstLeter = element[0];
      str += firstLeter.toUpperCase();
      str += element.slice(1, element.length);
    }

  } else {
    str += 'Error!'
  }
  result.textContent = str;
}