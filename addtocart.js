

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let payment = document.querySelector('.payment');
let submit = document.querySelector('.submit-btn')
const modal = document.getElementById('myModal');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Elegance Leather Handbag',
        image: 'img/bag1.png',
        price: 800
    },
    {
        id: 2,
        name: 'Voyage Leather Sling',
        image: 'img/bag2.png',
        price: 750
    },
    {
        id: 3,
        name: 'Luna Mini Crossbody',
        image: 'img/bag3.png',
        price: 300
    },
    {
        id: 4,
        name: 'Urbanite Crossbody',
        image: 'img/bag4.png',
        price: 500
    },
    {
        id: 5,
        name: 'Stella Vintage Crossbody',
        image: 'img/bag5.png',
        price: 250
    },
    {
        id: 6,
        name: 'Glamour Clutch',
        image: 'img/bag6.png',
        price: 760
    },
    {
        id: 7,
        name: 'Infinity Leather Sling',
        image: 'img/bag7.png',
        price: 450
    },
    {
        id: 8,
        name: 'Aria Leather Backpack',
        image: 'img/bag8.png',
        price: 350
    },
    {
        id: 9,
        name: 'Ethereal Circles',
        image: 'img/wall1.png',
        price: 800
    },
    {
        id: 10,
        name: 'Cotton Dreamscapes',
        image: 'img/wall2.png',
        price: 750
    },
    {
        id: 11,
        name: 'Blooming Botanicals',
        image: 'img/wall3.png',
        price: 300
    },
    {
        id: 12,
        name: 'Aquatic Splendor',
        image: 'img/wall4.png',
        price: 400
    },
    {
        id: 13,
        name: 'Ethereal Reverie',
        image: 'img/wall5.png',
        price: 250
    },
    {
        id: 14,
        name: 'Celestial Orbit',
        image: 'img/wall6.png',
        price: 760
    },
    {
        id: 15,
        name: 'Cotton Blossoms',
        image: 'img/wall7.png',
        price: 450
    },
    {
        id: 16,
        name: 'Mystic Dreams',
        image: 'img/wall8.png',
        price: 350
    },
    {
        id: 17,
        name: 'Harmony Medallion Rug',
        image: 'img/rug1.png',
        price: 800
    },
    {
        id: 18,
        name: 'Coastal Breeze Rug',
        image: 'img/rug2.png',
        price: 750
    },
    {
        id: 19,
        name: 'Earthly Treasures Rug',
        image: 'img/rug3.png',
        price: 300
    },
    {
        id: 20,
        name: 'Whimsical Garden Rug',
        image: 'img/rug4.png',
        price: 500
    },
    {
        id: 21,
        name: 'Mystic Sands Rug',
        image: 'img/rug5.png',
        price: 250
    },
    {
        id: 22,
        name: 'Heritage Weaves',
        image: 'img/rug6.png',
        price: 760
    },
    {
        id: 23,
        name: 'Serene Harmony',
        image: 'img/rug7.png',
        price: 450
    },
    {
        id: 24,
        name: 'Artisan Treasures',
        image: 'img/rug8.png',
        price: 350
    },
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="sec1"><img src="${value.image}"></div>
            <div class="title" id="name">${value.name}</div>
            <div class="sec2">
            <button onclick="addToCard(${key})" class="atc">Add to Cart</button>
            </div>
            `;
        list.appendChild(newDiv);
    })
}

initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    console.log(listCards);
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice += value.price;
        count += value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.classList.add('cartinfo');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div class="prodname">${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                    <div class="quantity-section">
                        <button id='leftbut' onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div>
                `;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();

    const changeVal = () => total.innerHTML= "Check Out";
    
    changeVal();

    quantity.innerText = count;
}


   function defaultVal () {
    
   }
   
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}



total.onclick = () =>  {
    alert("Thank You!")
    
  }



//   function filterRows(target) {
//     const rows = document.getElementsByClassName('rowM');
//     console.log(target)
//     for (let i = 0; i < rows.length; i++) {
//       const dataProd = rows[i].getAttribute('data-targer');
//       if (dataProd === target) {
//         console.log("run")
//         rows[i].style.display = 'flex';
//       } else {
//         console.log("not")
//         rows[i].style.display = 'none';
//       }
//     }
//   }
  
//   function openModal(target) {
//     filterRows(target);
//     modal.style.display = 'block';
//   }

  // Function to display the modal

  document.querySelector('.favorite').forEach((product) =>{
    product.addEventListener("click", function(){
        var target = product.getAttribute("data-target")
        displayModal(target);   
    })
  })
function displayModal(target) {
    var modal = document.querySelector(".modal[data-targer='" + target + "']");
    modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeModal() {
    var modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
      modal.style.display = "none";
    });
  }
  
  // Add event listeners to the buttons
  var buttons = document.querySelectorAll(".favorite");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var target = button.getAttribute("href");
      displayModal(target);
    });
  });
  
  // Close modal when clicking outside the modal content
  var modals = document.querySelectorAll(".modal");
  modals.forEach(function (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  });
  
  

// Insert the generated receipt into the receiptContainer div




