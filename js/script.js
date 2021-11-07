var imgList =Array.from( document.getElementsByClassName("img-item") ); 
var lightboxContanier = document.querySelector(".lightbox-contanier");
var lightboxItem = document.querySelector(".lightbox-item");
var currentIndex = 0 ;
var nextBtn = document.getElementById("next");
var previousBtn = document.getElementById("previous");
var closeBtn = document.getElementById("close");
var closeOut = document.getElementById("closeOut");

for(var i = 0 ; i < imgList.length ; i++) {
  imgList[i].addEventListener("click" , function(e) {
    currentIndex = imgList.indexOf(e.target);
    lightboxContanier.classList.replace("d-none" , "d-flex");
    var imgSrc = e.target.getAttribute("src");
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
  })
}

// function nextSlide() {
//   currentIndex++;
//   if(currentIndex== imgList.length){
//     currentIndex =0 ;
//   }
//   var imgSrc = imgList[currentIndex].getAttribute("src");
//     lightboxItem.style.backgroundImage = `url(${imgSrc})`;
// }

// nextBtn.addEventListener("click" , nextSlide );

// function previousSlide() {
//   currentIndex--;
//   if(currentIndex < 0){
//     currentIndex = imgList.length -1 ;
//   }
//   var imgSrc = imgList[currentIndex].getAttribute("src");
//     lightboxItem.style.backgroundImage = `url(${imgSrc})`;
// }

// previousBtn.addEventListener("click" , previousSlide );

function Slide(i) {
  currentIndex = currentIndex + i;
  if(currentIndex== imgList.length){
    currentIndex =0 ;
  }

  if(currentIndex < 0){
    currentIndex = imgList.length -1 ;
  }
  var imgSrc = imgList[currentIndex].getAttribute("src");
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}

nextBtn.addEventListener("click" , function(){
  Slide(1);
});

previousBtn.addEventListener("click" , function(){
  Slide(-1);
} );

function closeSlide() {
  lightboxContanier.classList.replace("d-flex" , "d-none");
}

closeBtn.addEventListener("click" , closeSlide);
// closeOut.addEventListener("click" , closeSlide);

document.addEventListener("keydown" , function(e) {
  if(e.key == "ArrowRight"){
    Slide(1);
  }

  else if(e.key == "ArrowLeft"){
    Slide(-1);
  }

else if(e.key == "Escape"){
  closeSlide();
}
})
