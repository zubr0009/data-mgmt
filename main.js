import pickRandomName from './catlist.js';
import { NetworkError } from './utils.js';

const url = 'https://api.thecatapi.com/v1/categories';

function getCategories() {
    fetch(url)
    .then((response) => {
        if (!response.ok) throw new Error('failed');
        return response.json();
        })
        .then((data) => {
        select.innerHTML = 
        data.map(category => {
            return `<option value="${category.id}">${category.name}</option>`;
        }).join(' ');
        });
}

function getImages() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_tEPsrH7SewOi5JL83h4mnHjljckAu7wwR4yeAkmtZ1xtTT2dUtvqwJGLGywYK1Ux')
    .then(response => {
        if( ! response.ok ) throw new NetworkError('Failed API Call', response);
        return response.json();
    })
    .then((data) => {
        switch(data.id) {
            case 5:
                main.innerHTML = 
                data.map(images => {
                    return `<img src="${data.id.image}>${pickRandomName}</img>`
                    localStorage.getItem(name);
                }).join(' ');
            case 15:
                main.innerHTML = 
                data.map(images => {
                    return `<img src="${data.id.image}>${pickRandomName}</img>`
                    localStorage.getItem(name);
                }).join(' ');
            case 1:
                main.innerHTML = 
                data.map(images => {
                    return `<img src="${data.id.image}>${pickRandomName}</img>`
                    localStorage.getItem(name);
                }).join(' ');
            case 14:
                main.innerHTML = 
                data.map(images => {
                    return `<img src="${data.id.image}>${pickRandomName}</img>`
                    localStorage.getItem(name);
                }).join(' ');
            case 2:
                main.innerHTML = 
                data.map(images => {
                    return `<img src="${data.id.image}>${pickRandomName}</img>`
                    localStorage.getItem(name);
                }).join(' ');
            case 4:
                main.innerHTML = 
                data.map(images => {
                    return `<img src="${data.id.image}>${pickRandomName}</img>`
                    localStorage.getItem(name);
                }).join(' ');
            case 7:
                main.innerHTML = 
                data.map(images => {
                    return `<img src="${data.id.image}>${pickRandomName}</img>`
                    localStorage.getItem(name);
                }).join(' ');
            default: console.log('error loading images');
        }
    })
    .catch(err => {
        console.log('something went wrong');
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('select');
    const main = document.querySelector('main');
    getCategories();
    select.addEventListener('change', getImages);
})