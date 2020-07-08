console.log('hi');
const posts = document.querySelector('.posts');
const postItem = document.querySelector('#posting-data-temp');

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.onload = function(){
    const listOfItem = xhr.response;
    for(const item of listOfItem){
        const listEl = document.importNode(postItem.content, true);
        listEl.querySelector('h3').textContent = item.title.toUpperCase();
        listEl.querySelector('p').textContent = item.body.toUpperCase();
        posts.append(listEl);
    }
};
xhr.send();