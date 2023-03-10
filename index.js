
<div id="img-block" style="
width: 288px;
height: 288px;
overflow: hidden; 
position :relative;
left: 0px;
">
<img id="hero-img" style="
width: 1728px;
height: 1152px;
position: relative;
top: -576px; 
left: 0px;
transform: scale(-1,1);
"src="hero-sprite.png" />
</div>

<script>
   //ПЕРЕМЕННЫЕ 
    let heroImg = window.document.querySelector("#hero-img");
    let imgBlock= window.document.querySelector("#img-block");
    let rightPosition = 0; 
    let imgBlockPosition = 0;
    //ФУНКЦИИ 
    const rightHandler=() ==> {
    heroImg.style.transform = "scale(-1,1)";
    rightPosition = rightPosition +1;
    imgBlockPosition = imgBlockPosition + 1;
    if(rightPosition > 5) {
        rightPosition = 0;
    }
    heroImg.style.left = `-${rightPosition * 288}px`;
    imgBlockPosition.style.left = `${imgBlockPosition * 30}px`;
    }
    const leftHandler =() => {
    heroImg.style.transform = "scale(1,1)";
    rightPosition = rightPosition + 1;
    imgBlockPosition = imgBlockPosition - 1; 
    if(rightPosition > 5) {
     rightPosition= 0;
    }
    heroImg.style.left = `-${rightPosition * 288}px`; 
    imgBlock.style.left = `${imgBlockPosition * 30}px`;
       } 
    //ОБРАБОТЧИКИ СОБЫТИЙ
     let timer = null;
     let x = 0;
     let halfWidth = window.screen.width / 2;
     let onTouchStart = (event)=> {
      event.preventDefault();
      x = (event.type === 'mousedown') ? event.screenX: event.touches[0].screenX;
      timer = setInterval (() => {
      (x > halfWidth) ? rightHandler():leftHandler;
     },130);
     }
     let onTouchEnd =(event)=> {
     event.preventDefault();
      clearInterval(timer);  
     }

  window.onmousedown = onTouchStart;
  window.ontouchstart = onTouchStart; 
  
  window.onmouseup = onTouchEnd;
  window.ontouchend = onTouchEnd; 
       
</script> 
         
 
