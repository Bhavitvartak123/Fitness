document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the local JSON file
    fetch('../json/products.json')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('productList');

            // Loop through the data and create list items
            data.forEach(product => {
                const listItem = document.createElement('li');
                listItem.classList.add('product-item');

                const image = document.createElement('img');
                image.src = product.image; // Replace 'image' with the key in your JSON data
                image.alt = 'Product Image';
                image.classList.add('product-image');

                // const name = document.createElement('span');
                // name.textContent = product.name; // Replace 'name' with the key in your JSON data

                // const price = document.createElement('span');
                // price.textContent = `$${product.price.toFixed(2)}`; // Replace 'price' with the key in your JSON data

                // Append elements to the list item
                listItem.appendChild(image);
                // listItem.appendChild(name);
                // listItem.appendChild(price);

                // Append list item to the product list
                productList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});