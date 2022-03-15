const resultH2 = document.querySelector(".result");

const errorh3 = document.createElement('h3');
const errorP = document.createElement('p');
const error = document.querySelector(".error");
const titleP = document.querySelector(".titleP");

class API {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
    }

    consultAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;
        console.log(url);
        Spinners();
        fetch(url)
            .then(repons => repons.json())
            .then(result => {
                cleanHtml()
                console.log(result);
                const { lyrics } = result;

                if (result.lyrics) {
                    if (resultH2) {
                        resultH2.textContent = lyrics;
                        titleP.textContent = `the lyrics of the ${this.song} is from ${this.artist}`;
                    }
                } else {
                    errorh3.innerHTML = 'Error...!!!';
                    error.appendChild(errorh3);
                    errorP.innerHTML = 'No lyrics found';
                    error.appendChild(errorP);
                    setTimeout(() => {
                        errorh3.remove();
                        errorP.remove();
                    }, 3000);
                    return
                }
            })
    }
}
function Spinners() {
    const divSpinners = document.createElement('div');
    divSpinners.classList.add('sk-fading-circle')
    divSpinners.innerHTML = `
       
         <div class="sk-circle1 sk-circle"></div>
         <div class="sk-circle2 sk-circle"></div>
         <div class="sk-circle3 sk-circle"></div>
         <div class="sk-circle4 sk-circle"></div>
         <div class="sk-circle5 sk-circle"></div>
         <div class="sk-circle6 sk-circle"></div>
         <div class="sk-circle7 sk-circle"></div>
         <div class="sk-circle8 sk-circle"></div>
         <div class="sk-circle9 sk-circle"></div>
         <div class="sk-circle10 sk-circle"></div>
         <div class="sk-circle11 sk-circle"></div>
         <div class="sk-circle12 sk-circle"></div>
        `;


    resultH2.appendChild(divSpinners);

}
function cleanHtml() {
    while (resultH2.firstChild) {
        resultH2.removeChild(resultH2.firstChild);
    }
}
export default API;