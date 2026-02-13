// Simple Order System
let orderCount = 0;
let orderTotal = 0;

function orderItem(name, price) {
    orderCount++;
    orderTotal += price;
    
    alert(name + " added to order!\nTotal items: " + orderCount + "\nTotal: Rs. " + orderTotal);
}

function viewOrder() {
    if (orderCount === 0) {
        alert("No items in order");
    } else {
        alert("Your Order:\nItems: " + orderCount + "\nTotal: Rs. " + orderTotal);
    }
}

// Simple Phone Validation
function validatePhone() {
    const phone = document.getElementById('phone').value;
    
    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, '');
    
    // Check if it has at least 10 digits
    if (digitsOnly.length < 10) {
        alert("Please enter a valid phone number (at least 10 digits)");
        return false;
    }
    
    return true;
}

// Simple form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    if (name == "" || phone == "" || message == "") {
        alert("Please fill in all fields");
        return false;
    }
    
    if (!validatePhone()) {
        return false;
    }
    
    if (message.length < 10) {
        alert("Message must be at least 10 characters");
        return false;
    }
    
    alert("Thank you! Your message has been sent.");
    return true;
}