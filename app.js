// const listItems = document.querySelectorAll('li');

// listItems.forEach( listItem =>{
//     listItem.addEventListener('click', event =>{
//         event.target.classList.toggle('highlight');
//     })
// })
const date = () =>{
    const today = new Date();
    const year = today.getFullYear();
    
    let month = today.getMonth()+1;
    month < 10 ? month = '0' + month : month = month;
    
    let day = today.getDate();
    day < 10 ? day = '0' + day : day = day;
    
    let hours = today.getHours();
    hours < 10 ? hours = '0' + hours : hours = hours;
    
    let minutes = today.getMinutes()
    minutes < 10 ? minutes = '0' + minutes : minutes = minutes;
    
    let seconds = today.getSeconds();
    seconds < 10 ? seconds = '0' + seconds : seconds = seconds;
    
    const date = year + '-' + month + '-' + day;
    const time = hours + ":" + minutes + ":" + seconds;
    const dateTime = date + ' ' + time;
    return dateTime;
};	


const liItems = document.querySelectorAll('li');
const ulItems = document.querySelector('ul');

const removeItemConfirmBtn = document.querySelector('#confirmRemoveButton');
const cancelRemovingBtn = document.querySelector('#cancelRemovingItem');

const addingNewItemModalBtn = document.querySelector('#addingNewItem');
const addingNewItemToListBtn = document.querySelector('#addNewItemButton');
const cancelAddingNewItemBtn = document.querySelector('#cancelAddingNewItem');

const BG_MODAL = '.modal-bg';
const NEW_ITEM_MODAL = '.modalbg-new-item';

const removeItemBinIconBtn = document.querySelectorAll('#removeItemIcon');


const userInputItemHeader = () =>{
    return document.querySelector('#itemHeader').value;
};
const userInputItemDesc = () =>{
    return document.querySelector('#itemDesc').value;
};

const clearingInputs = () =>{
    document.querySelector('#itemHeader').value = '';
    document.querySelector('#itemDesc').value = '';
};

const backdrop = divName =>{
    if(divName == BG_MODAL){
        const bgDrop = document.querySelector(BG_MODAL);
        bgDrop.classList.toggle('visible');
        
    } else if(divName == NEW_ITEM_MODAL){
        const bgDrop = document.querySelector(NEW_ITEM_MODAL);
        bgDrop.classList.toggle('visible');  
    } 
};

// const makeBackdropWhileAddingNewItem = () =>{
//     const bgDrop = document.querySelector(NEW_ITEM_MODAL);
//     bgDrop.classList.toggle('visible');   
// };

removeItemBinIconBtn.forEach(el => {  
    el.addEventListener('click', event =>{ 
        event.target.closest('li').remove();    
        console.log('removed Item');
    });  
});

const addingNewItemToListHandler = () =>{
    backdrop(NEW_ITEM_MODAL);
    creatingNewItem(userInputItemHeader(), userInputItemDesc());  
};

const creatingNewItem = (title, desc) =>{
    let li = document.createElement('li');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    let img = document.createElement('img');
    img.setAttribute('id', 'removeItemIcon');
    img.setAttribute('class', 'bin-icon');
    img.setAttribute('src', 'bin.png');

    h3.innerText = ' > ' + title + ' | added : ' + date();

    p.innerText = desc;
    p.appendChild(img);

    li.appendChild(h3);
    li.appendChild(p);
    ulItems.appendChild(li);

    console.log("added item");

    backdrop(this.NEW_ITEM_MODAL);
    clearingInputs(); 

    li.scrollIntoView({behavior: "smooth"});
    li.className = 'highlight';

    setTimeout( ()=>{
        li.classList.remove('highlight');
    },1000);
};


addingNewItemToListBtn.addEventListener('click', addingNewItemToListHandler);
addingNewItemModalBtn.addEventListener('click', backdrop.bind(this, NEW_ITEM_MODAL));
cancelAddingNewItemBtn.addEventListener('click', backdrop.bind(this, NEW_ITEM_MODAL));
cancelAddingNewItemBtn.addEventListener('click', clearingInputs);
cancelRemovingBtn.addEventListener('click', backdrop.bind(this, BG_MODAL));




// ulItem.addEventListener('click', event =>{   
//     makeBackDrop();
// });

// removingButton.addEventListener('click', () =>{
//     const removeItem = removeItemReturn();
//     removeItem.remove();
//     makeBackDrop();
// });

// cancelingButton.addEventListener('click', () =>{
//     makeBackDrop();
// });
