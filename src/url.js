const API_KEY = '35063138-0f7111e05497fae6e002d2e8a'

const BASE_URL = 'https://pixabay.com/api/'

let numberPage = 1

export class JSONPlaceholderAPI {
    fetchPhotos(search){
        return fetch(`${BASE_URL}?q=${search}&key=${API_KEY}&image_type='photo'&orientation='horizontal'&safesearch='true'&per_page=40&page=${numberPage}`)
        .then((res)=> {
            if(!res.ok){
                console.log('error');
            }
    numberPage = numberPage + 1
    return res.json()
        })
    }
}


    





