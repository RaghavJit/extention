btn = document.getElementById("init")
productListContainer = document.getElementById("product_list")

btn.addEventListener('click', function() {
    mainFunction()          
});

async function mainFunction() {
    try {
        // Use the fetch API to make the GET request
        const response = await fetch("http://localhost:5000/ping");

        // Check if the request was successful (status code 200)
        if (response.ok) {
            // Convert the response to JSON
            const data = await response.json();

            // Update the content of the product_list element with the response
            list.innerHTML = JSON.stringify(data); // Update this line based on your actual response structure

            // Iterate through each product and create HTML elements
            data.forEach(product => {
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
        } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the main function
mainFunction();
