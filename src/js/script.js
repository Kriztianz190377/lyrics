
import Api from './API.js';


const formSearch = document.querySelector(".form-search"),

    error = document.querySelector(".error"),
    errorh3 = document.createElement('h3'),
    errorP = document.createElement('p'),
    resultH2 = document.querySelector(".result"),
titleP = document.querySelector(".titleP");

formSearch.addEventListener('submit', searchSong);
formSearch.addEventListener('reset', emptyInput);

function searchSong(e) {
    e.preventDefault();
    const artist = document.querySelector('.artistInp').value;
    const song = document.querySelector('.songInp').value;


    if (artist === '' || song === '') {
        errorh3.innerHTML = 'Error...!!!';
        error.appendChild(errorh3);

        errorP.innerHTML = 'At least one field is empty';
        error.appendChild(errorP);
        setTimeout(() => {
            errorh3.remove();
            errorP.remove();
        }, 3000);
        return
    }

    const search = new Api(artist, song);
    search.consultAPI();

}
function emptyInput() {
    resultH2.textContent = "";
    titleP.textContent = "Song Title";

}
