const searchitems = () => {


    var input = document.querySelector('.input-bar');
    var search = document.querySelector('.search');
    var product_items = document.querySelectorAll('.container .items .product-item');
    var products = document.querySelectorAll('.product-name');
    var input_text = input.value.toUpperCase();

    for (let i = 0; i < product_items.length; i++) {
        var product_name = products[i].textContent.toUpperCase();
        if (product_name.indexOf(input_text) > -1) {
            product_items[i].style.display = "flex";
        }
        else {
            product_items[i].style.display = "none";
        }

    }

}