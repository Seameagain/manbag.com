// cart.js

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    clear() {
        this.items = [];
    }
}

// Initialize Stripe
const stripe = Stripe('your_stripe_public_key');

function checkout() {
    const total = cart.getTotal();
    // Call your backend to create a checkout session
    fetch('/create-checkout-session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({items: cart.items, total})
    })
    .then(response => response.json())
    .then(sessionId => {
        return stripe.redirectToCheckout({
            sessionId: sessionId
        });
    })
    .catch(error => console.error('Error:', error));
}

const cart = new Cart();