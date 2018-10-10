let starterList = document.getElementById("starterList")
let entreeList = document.getElementById("entreeList")
let dessertList = document.getElementById("dessertList")
let menuList = document.getElementById("menuList")
let courseSelector= document.getElementById("courseSelector").value


for (let index = 0; index < menuItems.length; index++) {

    let item = menuItems[index]


    let menuItem = `
  <li class ="menuItem">
    <img src="${item.imageURL}"/>  
    <div class="itemDescription">
    <h2>${item.title}</h2>
    <div class="imageDescription">
        
        <div class="description">
            ${item.description}
        </div>
        <div class ="price">
            $${item.price}
        </div>
    </div>
    </div>
  </li>
  `
  function addMenuItems() { 
  
    if (item.course === "Starters") {

    starterList.insertAdjacentHTML('beforeend', menuItem)
  }
   else if (item.course === "Desserts") {

       dessertList.insertAdjacentHTML('beforeend', menuItem)
   }
   else if (item.course === "Entrees") {

       entreeList.insertAdjacentHTML('beforeend', menuItem)
   }
    
    }
    
    addMenuItems()
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('select[name="course"]').onchange = changeEventHandler;
}, false);


function changeEventHandler() {
    
    if (this.value === "appetizers") {
        
        
        entreeList.parentNode.removeChild(entreeList)
        dessertList.parentNode.removeChild(dessertList)
    }
    else if (this.value === "entrees") {

        
        starterList.parentNode.removeChild(starterList)
        dessertList.parentNode.removeChild(dessertList)
    }
    
    else if (this.value === "desserts") {
        
        starterList.parentNode.removeChild(starterList)
        entreeList.parentNode.removeChild(entreeList)
    }
    else {

    }
}

