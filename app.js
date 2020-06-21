// const listItems = document.querySelectorAll('li');

// listItems.forEach( listItem =>{
//     listItem.addEventListener('click', event =>{
//         event.target.classList.toggle('highlight');
//     })
// })
	
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;

const liItems = document.querySelectorAll('li');
const ulItems = document.querySelector('ul');

const removeItemConfirmBtn = document.querySelector('#confirmRemoveButton');
const cancelRemovingBtn = document.querySelector('#cancelRemovingItem');

const addingNewItemModalBtn = document.querySelector('#addingNewItem');
const addingNewItemToListBtn = document.querySelector('#addNewItemButton');
const cancelAddingNewItemBtn = document.querySelector('#cancelAddingNewItem');

const BG_MODAL = '.modal-bg';
const NEW_ITEM_MODAL = '.modalbg-new-item';

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

liItems.forEach(el => {  
    el.addEventListener('click', event =>{
        backdrop(BG_MODAL); 
        //event.target.closest('li').remove();   
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
    h3.innerText = '> ' + title + '  | added : ' + dateTime;
    p.innerText = desc;
    li.appendChild(h3);
    li.appendChild(p);
    ulItems.appendChild(li);
    console.log("added item");
    backdrop(this.NEW_ITEM_MODAL);
    clearingInputs(); 
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
