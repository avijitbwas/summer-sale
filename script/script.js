document.getElementById('Sportswear-card-1').addEventListener('click',function () {
    const productName = cardId('Sportswear-card-1');

})

document.getElementById('Sportswear-card-2').addEventListener('click',function () {
    const productName = cardId('Sportswear-card-2');

})


document.getElementById('Sportswear-card-3').addEventListener('click',function () {
    const productName = cardId('Sportswear-card-3');

})

//kitchenware-card

document.getElementById('kitchenware-card-1').addEventListener('click',function () {
    const productName = cardId('kitchenware-card-1');

})
document.getElementById('kitchenware-card-2').addEventListener('click',function () {
    const productName = cardId('kitchenware-card-2');

})
document.getElementById('kitchenware-card-3').addEventListener('click',function () {
    const productName = cardId('kitchenware-card-3');

})



function cardId(id) {
    const cardIdValue = document.getElementById(id);
    const productName = cardIdValue.childNodes[3].childNodes[3].innerText;
    const productPrice = cardIdValue.childNodes[3].childNodes[5].innerText;

    const list = productList(productName, productPrice)
    console.log(productName, productPrice)
    //return productName,productPrice;
}

var totalPrice = 0
function productList(name, price) {
    const list = document.getElementById('product-details');
    const count = list.childElementCount
    const p = document.createElement('p');
    p.classList.add('font-bold')
    p.classList.add('mt-5')
    p.innerHTML = `${count + 1}. ${name}`
    list.appendChild(p)

    //total price section
    const totalPriceElement = document.getElementById('total-price');
    const getProductPriceValue = parseFloat(price);
    totalPrice = (totalPrice + getProductPriceValue);
    //console.log(totalPrice)
    totalPriceElement.innerText = totalPrice.toFixed(2);

    //enable purchse button
    if (totalPrice > 0) {
        const purchseButton = document.getElementById('purchase');
        purchseButton.removeAttribute('disabled');
        purchseButton.classList.remove('no-animation')
    }

    //enable discount Apply button
    const applyButton = document.getElementById('apply');
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('no-animation');
    }
    //end total  price section

    //discount section
    applyButton.addEventListener('click', function () {
        const couponCode = document.getElementById('coupon-code').value;
        var discount = 0
        if (couponCode === 'SELL200') {
            discount = (totalPrice * 0.20).toFixed(2)
            const discountElement = document.getElementById('discount');
            discountElement.innerText = discount;
            const resetInput = document.getElementById('coupon-code').value = ''
        }
        else {
            return;
        }

        //total section
        const total = document.getElementById('total');
        const mainTotal = (totalPrice - discount).toFixed(2);
        total.innerText = mainTotal;

    })

    //discount section end



}


document.getElementById('home').addEventListener('click', function () {
    const resetTotalPrice = document.getElementById('total-price');
    resetTotalPrice.innerText = ' 00.00'

    const resetDiscountPrice = document.getElementById('discount');
    resetDiscountPrice.innerText = ' 00.00';

    const resetMainPrice = document.getElementById('total');
    resetMainPrice.innerText = ' 00.00'

    const product = document.getElementById('product-details');
    product.innerHTML = ''

    const purchaseButton = document.getElementById('purchase');
    purchaseButton.disabled  = true;
    purchaseButton.classList.add('no-animation')

    const applyButton = document.getElementById('apply');
    applyButton.disabled = true;
    applyButton.classList.add('no-animation')
})