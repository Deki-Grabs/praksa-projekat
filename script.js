function openCloseMenu(){
    let menu = document.getElementById('menu');

    if(menu && menu.style.display === 'none'){
        menu.style.display = 'block';
    }
    else{
        menu.style.display = 'none';
    }
}

// const headerImg = document.querySelector('.gallery-img')

// const UPDATE_TIME_INTERVAL = 3000

// const imagesArray = [
//   "Images/JA1.jpg",
//   "Images/panda.jpg",
//   "Images/marko.jpg",
// ]

// let i = 0

// setInterval(()=>{
//   if(i == 2){
//     i = 0
//   }
//   else {i = i + 1};
//   console.log('i was run',i)
//   headerImg.src = imagesArray[i]
// },UPDATE_TIME_INTERVAL)