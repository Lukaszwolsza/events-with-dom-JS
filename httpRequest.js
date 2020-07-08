const posts = document.querySelector('.posts');
const postItem = document.querySelector('#posting-data-temp');
const newPostItemBtn = document.querySelector('#newPostItemBtn');
const fetchData = document.querySelector('#fetchbtn');
const postForm = document.querySelector('#postForm');

function sendHttpRequest(method, url, data){
    const promise = new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open(method, url);
        xhr.onload = function(){
            resolve(xhr.response);  
        };
        xhr.send(JSON.stringify(data));
    }); 
    return promise;
};

async function fetchPosts(){
    const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
    const listOfItem = responseData;
    for(const item of listOfItem){
        const listEl = document.importNode(postItem.content, true);
        listEl.querySelector('h3').textContent = item.title.toUpperCase();
        listEl.querySelector('p').textContent = item.body.toUpperCase();
        posts.append(listEl);
        }
};

async function createPost(title, content){
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };
    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
};


fetchData.addEventListener('click', fetchPosts);

postForm.addEventListener('submit', event =>{
    event.preventDefault();
    const postTitle = event.currentTarget.querySelector('#itemTitle').value;
    const postBody = event.currentTarget.querySelector('#itemDesc').value;
    createPost(postTitle, postBody);
});
