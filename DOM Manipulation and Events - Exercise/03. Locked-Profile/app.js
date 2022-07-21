function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(button => button.addEventListener('click', showInfo));

    function showInfo(event) {
        let parent = event.target.parentElement;
        let children = parent.childNodes;
        let locked = children[5].checked;
        console.log(children);

        if (!locked) {
            let info = Array.from(parent.querySelectorAll('div'))
            .find(p=> p.id.includes('HiddenFields'));
            if(event.target.textContent === 'Show more'){
                event.target.textContent = 'Hide it';
                info.style.display = 'inline-block';
            }else{
                event.target.textContent = 'Show more';
                info.style.display = 'none';
            }
        }
    }
}