function deleteByEmail() {
  let emails = document.querySelectorAll("tbody tr");
  let input = document.getElementsByName('email')[0].value;
  let output = document.getElementById('result');
  
  for (const email of emails) {
    if(email.children[1].textContent== input){
     let parent = email.parentElement;
     parent.removeChild(email);
     output.textContent = 'Deleted';
     break;
    }
  }
  if(output.textContent != 'Deleted'){
    output.textContent = 'Not found.';
  }
}