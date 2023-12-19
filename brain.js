btn = document.getElementById("init")
productListContainer = document.getElementById("product_list")

btn.addEventListener('click', function() {
    mainFunction()          
});

function mainFunction() {
    // Create a new XMLHttpRequest object
    var xhttp = new XMLHttpRequest();

    // Define the callback function to handle the response
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Update the content of the product_list element with the response
            list.innerHTML = this.responseText;
            console.log(this.responseText)
            this.response.forEach(product => {
                  const productDiv = document.createElement("div");
                  productDiv.innerHTML = `
                    <h3>${product.title}</h3>
                    <p>Brand: ${product.brand}</p>
                    <p>Price: ${product.price}</p>
                    <a href="${product.product_url}" target="_blank">Product Link</a>
                    <img src="${product.image_url}" alt="${product.title}" style="max-width: 200px; max-height: 200px;">
                    <hr>
                  `;
                  productListContainer.appendChild(productDiv);
                });
        }
    };

    // Open a GET request to the specified URL
    xhttp.open("GET", "http://localhost:5000/ping", true);

    // Send the request
    xhttp.send();
}
