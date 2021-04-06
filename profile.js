function creatAProfile(name, description, imageURL, ) {
  this.name = name;
  this.description = description;
  this.imageURL = imageURL;
}

let desingerImg = document.querySelectorAll('.designer-img > img');
// create a object array
const propertyValues = Object.values(desingerImg);
// console.log(propertyValues.map(function (img) {
//   // img.attributes.src.nodeValue;
//   return img.getAttribute("src");
// }));

// const imageDisplayURL = 
// // 1. 冬瓜 2.队长 .悠悠
// [
//   "https://res.cloudinary.com/pengushe-home/image/upload/v1615696159/%E7%B2%BE%E4%BF%AE%E4%BA%BA%E7%89%A9.jpg",
//   "https://res.cloudinary.com/pengushe-home/image/upload/v1615696121/%E5%84%BF%E7%AB%A5%E6%B5%B7%E6%8A%A5.jpg",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
// ]
// propertyValues = propertyValues.map(infor => infor.currentSrc);
// Array.prototype.splice.apply(propertyValues, [0, imageDisplayURL.length].concat(imageDisplayURL));




