function validate() {
    let input = document.querySelector('input');
    input.addEventListener('change', changing);

    function changing(event) {
        let email = event.target.value;

        let regex = new RegExp('^[a-z]+@[a-z]+.[a-z]+');

        let match = regex.test(email);
        if (!match) {
            event.target.className = 'error';
        } else {
            event.target.className = '';
        }
    }
}