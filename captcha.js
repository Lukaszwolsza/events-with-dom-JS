const boxToGenerateImage = document.querySelector('#randomImages');

const randomNumber = (min, max) =>{
   return Math.floor(Math.random() * (max - min + 1) + min);
};

const img = [];

const randomTitle = num =>{
    switch(num){
        case 1:{
            return 'Pikaczu';
        }
        case 2:{
            return 'Doggy';
        }
        case 3:{
            return 'Cat';
        }
        case 4:{
            return 'Duck';
        }
    }
};

const imageTitle = document.querySelectorAll('.imgtitle');

for(let i = 0; i < 3; i++){ 
    const rndNum = randomNumber(1,3);
    const titleNum = randomTitle(rndNum);

    img[i] = document.createElement('img');
    img[i].setAttribute('src', 'img/'+rndNum+'.png');
    img[i].setAttribute('class', 'randomizeImg');
    img[i].setAttribute('draggable', 'true');

    imageTitle[i].textContent = titleNum;

    boxToGenerateImage.appendChild(img[i]);
}

const imgs = document.querySelectorAll('.randomizeImg');

const dragStart = () =>{
    console.log('starting move el');
};

const dragEnd = () =>{
    console.log('end move el');
};

imgs.forEach(el =>{
    el.addEventListener('dragstart', dragStart);
    el.addEventListener('dragend', dragEnd);
});



