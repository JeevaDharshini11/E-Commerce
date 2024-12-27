let cart = [];

// Select DOM elements
const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const checkoutButton = document.getElementById("checkoutButton");
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to add an item to the cart
function addToCart(event) {
    const button = event.target;
    const productId = button.getAttribute('data-id');
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    // Add product to cart array
    const product = { id: productId, name: productName, price: productPrice };
    cart.push(product);

    // Update cart UI
    updateCartCount();
    updateCartModal();
}

// Function to update the cart count display
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Function to update the cart modal content
function updateCartModal() {
    // Clear previous cart items in modal
    cartItems.innerHTML = '';
    let totalPrice = 0;

    // Add items to the modal list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = 'item.name -${item.price.toFixed(2)};'
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    // Update total price in the modal
    totalPriceElement.textContent = totalPrice.toFixed(2);
}
// Event listener for the cart button to open the cart modal
cartButton.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

// Close the cart modal when the close button is clicked
document.querySelector('.cart-modal-content .close').addEventListener('click', () => {
    cartModal.style.display = 'none';
});
const buy = document.getElementById('buyNowBtn');

// Add an event listener to the Buy Now button
buy.addEventListener('click', () => {
  // Proceed with some tasks
  proceedWithPurchase();
});

// Function to proceed with the purchase
function proceedWithPurchase() {
  // Get the watch details
  const watchName = document.getElementById('watch-name').textContent;
  const watchPrice = document.getElementById('watch-price').textContent;
  const watchQuantity = document.getElementById('watch-quantity').value;

  // Validate the watch quantity
  if (watchQuantity <= 0) {
    alert('Please enter a valid quantity');
    return;
  }

  // Calculate the total price
  const totalPrice = watchPrice * watchQuantity;

  // Display a confirmation message
  const confirmationMessage = You are about to purchase ${watchQuantity} ${watchName}(s) for a total of ${totalPrice}. Are you sure you want to proceed?;
  if (confirm(confirmationMessage)) {
    // Proceed with the payment gateway
    proceedWithPayment(totalPrice);
  }
}

// Function to proceed with the payment gateway
function proceedWithPayment(totalPrice) {
  // Integrate with a payment gateway like Stripe or PayPal
  // For demonstration purposes, we'll use a mock payment gateway
  const paymentGateway = '(link unavailable)';
  window.location.href = ${paymentGateway}?totalPrice=${totalPrice};
}


// Event listener for the checkout button
checkoutButton.addEventListener('click', () => {
    // Simulate a checkout process (you could implement real payment logic here)
    alert('Proceeding to checkout...');

    // Clear the cart and update the UI
    cart = [];
    updateCartCount();
    updateCartModal();
    cartModal.style.display = 'none';
});