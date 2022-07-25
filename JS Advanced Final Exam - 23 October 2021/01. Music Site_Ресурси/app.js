window.addEventListener('load', solve);

function solve() {
    const genreInput = document.getElementById('genre');
    const songInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', addSong);

    const allHitsContainer = document.querySelector('.all-hits-container');
    const savedContainer = document.querySelector('.saved-container');

    const likes = document.querySelector('div.likes p');
    function addSong(ev) {
        ev.preventDefault();
        const genre = genreInput.value;
        const song = songInput.value;
        const author = authorInput.value;
        const date = dateInput.value;

        if (!genre || !song || !author || !date) {
            return;

            
        }
        
        clear();
        const divAdd = document.createElement('div');
        divAdd.classList.add('hits-info');
        const imgSong = document.createElement('img');
        imgSong.src = './static/img/img.png';
        const genreH = document.createElement('h2');
        genreH.textContent = `Genre: ${genre}`;
        const nameH = document.createElement('h2');
        nameH.textContent = `Name: ${song}`;
        const authorH = document.createElement('h2');
        authorH.textContent = `Author: ${author}`;
        const dateH = document.createElement('h2');
        dateH.textContent = `Date: ${date}`;
        const saveSongBtn = document.createElement('button');
        saveSongBtn.classList.add('save-btn');
        saveSongBtn.textContent = 'Save song';
        saveSongBtn.addEventListener('click', saveSong);

        function saveSong() {
            divAdd.removeChild(likeSongBtn);
            divAdd.removeChild(saveSongBtn);
            allHitsContainer.removeChild(divAdd);
            savedContainer.appendChild(divAdd);

        }
        const likeSongBtn = document.createElement('button');
        likeSongBtn.classList.add('like-btn');
        likeSongBtn.textContent = 'Like song';
        likeSongBtn.addEventListener('click', likeSong);

        function likeSong() {
            
            likeSongBtn.disabled = true;
            let totalLikes = Number(likes.textContent.replace(/Total Likes: /g, ''));
            likes.textContent = `Total Likes: ${Number(totalLikes+1)}`;


        }
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteSong);

        function deleteSong(event) {
            const parent = event.target.parentElement.parentElement;
            parent.removeChild(divAdd);

        }

        divAdd.appendChild(imgSong);
        divAdd.appendChild(genreH);
        divAdd.appendChild(nameH);
        divAdd.appendChild(authorH);
        divAdd.appendChild(dateH);
        divAdd.appendChild(saveSongBtn);
        divAdd.appendChild(likeSongBtn);
        divAdd.appendChild(deleteBtn);
        allHitsContainer.appendChild(divAdd);

    }
    function clear() {
        genreInput.vaue = '';
        songInput.value = '';
        authorInput.value = '';
        dateInput.value = '';

    }
}