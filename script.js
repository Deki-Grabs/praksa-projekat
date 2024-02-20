function openCloseMenu(){
    let menu = document.getElementById('menu');

    if(menu && menu.style.display === 'none'){
        menu.style.display = 'block';
    }
    else{
        menu.style.display = 'none';
    }
}

const headerImg = document.querySelector('.gallery-img')

const UPDATE_TIME_INTERVAL = 3000

const imagesArray = [
  "Images/Gallery/gallery-1.jpg",
  "Images/Gallery/gallery-2.jpg",
  "Images/Gallery/gallery-3.jpg",
  "Images/Gallery/gallery-4.jpg",
  "Images/Gallery/gallery-5.jpg",
  "Images/Gallery/gallery-6.jpg",
  "Images/Gallery/gallery-7.jpg",
  "Images/Gallery/gallery-8.jpg",
  "Images/Gallery/gallery-9.jpg",
]

let i = 0

setInterval(()=>{
  if(i == 2){
    i = 0
  }
  else {i = i + 1};
  console.log('i was run',i)
  headerImg.src = imagesArray[i]
},UPDATE_TIME_INTERVAL)