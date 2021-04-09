let desingerImg = document.querySelectorAll('.designer-img > img');

imageDisplayURL.filter( function(url, index){
  if(url){
    desingerImg[index].src = url
  }
});

// create a object array
// const propertyValues = Object.values(desingerImg);
// console.log(propertyValues.map(function (img) {
//   // img.attributes.src.nodeValue;
//   return img.getAttribute("src");
// }));
// propertyValues = propertyValues.map(infor => infor.currentSrc);
// Array.prototype.splice.apply(propertyValues, [0, imageDisplayURL.length].concat(imageDisplayURL));




