function solve() {
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const birth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const hireButton = document.getElementById('add-worker');
    hireButton.type = 'button';

    hireButton.addEventListener('click', hireWorker);
     const tbodyToAdd = document.getElementById('tbody');
      let sum = document.getElementById('sum');

    function hireWorker() {
        const fname = firstName.value;
        const lname = lastName.value;
        const emailInput = email.value;
        const birthDate = birth.value;
        const positionInput = position.value;
        const salaryInput = salary.value;

        if (!fname || !lname || !emailInput || !birthDate || !positionInput || !salaryInput) {
            return;
        }

       
        const tr = document.createElement('tr');
        const fnameTd = document.createElement('td');
        fnameTd.textContent = fname;
        const lnameTd = document.createElement('td');
        lnameTd.textContent = lname;
        const emailTd = document.createElement('td');
        emailTd.textContent = emailInput;
        const birthDateTd = document.createElement('td');
        birthDateTd.textContent = birthDate;
        const positionTd = document.createElement('td');
        positionTd.textContent = positionInput;
        const salaryTd = document.createElement('td');
        salaryTd.textContent = salaryInput;
        const buttonsTd = document.createElement('td');
        const fireBtn = document.createElement('button');
        fireBtn.classList.add('fired');
        fireBtn.textContent = 'Fired';
        fireBtn.addEventListener('click', firePerson);
        function firePerson() {
          
            tbody.removeChild(tr);
            decreaseSalary();

        }
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editPerson);
        function editPerson() {
            firstName.value = fname;
            lastName.value = lname;
            email.value = emailInput;
            birth.value = birthDate;
            position.value = positionInput;
            salary.value = salaryInput;
            tbodyToAdd.removeChild(tr);
            decreaseSalary();

        }

        buttonsTd.appendChild(fireBtn);
        buttonsTd.appendChild(editBtn);

        tr.appendChild(fnameTd);
        tr.appendChild(lnameTd);
        tr.appendChild(emailTd);
        tr.appendChild(birthDateTd);
        tr.appendChild(positionTd);
        tr.appendChild(salaryTd);
        tr.appendChild(buttonsTd);
        tbodyToAdd.appendChild(tr);
        
        function decreaseSalary(){
            let current = Number(sum.textContent);
            let newSum = current - Number(salaryInput);
            sum.textContent = newSum.toFixed(2);
        }

        let currentSal = Number(sum.textContent);
        let newSumIncrease = currentSal + Number(salaryInput);
        sum.textContent = newSumIncrease.toFixed(2);
        
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';

    }
    

}
solve()