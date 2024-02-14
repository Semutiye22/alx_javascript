// Check if session storage is available
function isSessionStorageAvailable() {
    try {
      sessionStorage.setItem('test', 'test');
      sessionStorage.removeItem('test');
      return true;
    } catch (e) {
      return false;
    }
  }
  
  // Display alert if session storage is not available
  if (!isSessionStorageAvailable()) {
    alert('Sorry, your browser does not support session storage. Try again with a better one');
  } else {
    // Available items
    const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];
  
    // Create store and display cart
    createStore();
    displayCart();
  }
  
  // Function to add item to cart
  function addItemToCart(item) {
    sessionStorage.setItem(item, true);
    displayCart();
  }
  
  // Function to create store
  function createStore() {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
  
    availableItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      li.addEventListener('click', () => addItemToCart(item));
      ul.appendChild(li);
    });
  }
  
  // Function to display cart
  function displayCart() {
    const cartItemsCount = Object.keys(sessionStorage).length;
    if (cartItemsCount === 0) return;
  
    const message = You previously had ${cartItemsCount} item${cartItemsCount > 1 ? 's' : ''} in your cart;
    const p = document.createElement('p');
    p.textContent = message;
    document.body.appendChild(p);
  }