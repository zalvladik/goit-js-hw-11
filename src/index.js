const startPhotos = document.querySelector('button[type="submit"]')
const morePhotosButton = document.querySelector('button[type="button"]')
const currentValue = document.querySelector('input');
const container = document.querySelector('.gallery');

morePhotosButton.classList.add('is-hidden')

startPhotos.addEventListener('click',makerGalery )
morePhotosButton.addEventListener('click',makeMorePhotos) 
container.addEventListener('click',stopDefAction)

import {JSONPlaceholderAPI} from './url.js'
import galaryCreator from './galary.hbs'
import Notiflix from 'notiflix';

const urlAPI = new JSONPlaceholderAPI()

async function makeMorePhotos(e) {
    try{
    if(currentValue.value === ''){
        return Notiflix.Notify.failure('Будь ласка введіть слово для пошуку');
    }
    await urlAPI.fetchPhotos(currentValue.value).then(data =>{
    if(data.hits.length === 0){
       morePhotosButton.classList.add('is-hidden')
      return Notiflix.Notify.failure('Будь ласка введіть правильне слово для пошуку')
    }
    morePhotosButton.classList.remove('is-hidden')
    console.log(data.hits)
    container.insertAdjacentHTML('beforeend',galaryCreator(data.hits))
})
}
  catch(error)  {
     console.log(error)
}

}
function makerGalery(e){
    e.preventDefault()
    container.innerHTML = ' '
    makeMorePhotos()
}

function stopDefAction(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return console.log('missClick')
    };
    var lightbox = new SimpleLightbox('.gallery .photo-card img', 
    {captions: true, 
     captionDelay: 250 , 
     captionsData : 'alt', 
    });
}

