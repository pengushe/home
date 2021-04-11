// current desinger
let desingerImg = document.querySelectorAll('.designer-img > img');

imageDisplayURL.filter(function (url, index) {
  if (url) {
    desingerImg[index].src = url
  }
});
// add new members
let addnewMembers = document.getElementById('addnewMembers');
newMembers.forEach(function (member) {
  return addnewMembers.innerHTML += 
  `<div class="col-md-3 col-xs-6 designer-list">
  <div class=designer-img>
    <img loading=lazy src= ${member.image}
     alt=${member.name}>
  </div>
  <div class=designer-info>
    <h2>${member.name}</h2>
    <p>${member.description}</p>
  </div>
</div>`
});


