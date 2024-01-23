var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = '../Imagenes/Img1.jpg';

imgArray[1] = new Image();
imgArray[1].src = '../Imagenes/Img2.jpg';

imgArray[2] = new Image();
imgArray[2].src = '../Imagenes/Img3.jpg';

imgArray[3] = new Image();
imgArray[3].src = '../Imagenes/Img4.jpg';

function siguiente(){
  var img = document.getElementById("mainImage");
  for(var i = 0; i < imgArray.length;i++){
      if(imgArray[i].src == img.src){
          if(i === imgArray.length){
              document.getElementById("mainImage").src = imgArray[0].src;
              break;
          }
          document.getElementById("mainImage").src = imgArray[i+1].src;
          break;  
      }
  }
}

function anterior(){
  var img = document.getElementById("mainImage");
  for(var i = imgArray.length-1; i >=0 ;i--){
      if(imgArray[i].src == img.src){
          if(i === imgArray.length){
              document.getElementById("mainImage").src = imgArray[4].src;
              break;
          }
          document.getElementById("mainImage").src = imgArray[i-1].src;
          break;
      }
  }
}