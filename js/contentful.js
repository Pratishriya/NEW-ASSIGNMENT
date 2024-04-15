var client = contentful.createClient({
    space: 'ccedifzo8u73',
    accessToken: '-9p3BtFf4KoWTW9GB9X0zJcN2y46oDnRWLY2rP4s0Ig',
    environment:'shein'
  });

var productsDiv = document.getElementById('products');
  client.getEntries({content_type: 'shein',}).then(function (entries) {
    console.log(entries)
    entries.items.forEach(function (entry) {
     
        var productDiv = document.createElement('div'); // <div></div>
        productDiv.classList.add('product'); // <div class="product"></div>
       
        var nameH3 = document.createElement('h3');
        nameH3.classList.add('product-name');
        nameH3.innerHTML = entry.fields.title;

        var mainImage = document.createElement('img');
        mainImage.classList.add('product-image');
        if (entry.fields.images){
            mainImage.src = "https:" + entry.fields.images.fields.file.url;
        }

        var linkToDetails = document.createElement('a');
        linkToDetails.href = 'details.html?id=' + entry.sys.id;
        linkToDetails.appendChild(mainImage);

        var price = document.createElement('p');
        price.classList.add('price');
        price.innerHTML = entry.fields.price;


        var description = document.createElement('p');
        description.classList.add('description');
        description.innerHTML = entry.fields.description;

        var ratings = document.createElement('img');
        ratings.classList.add('ratings');
        if (entry.fields.ratings){
            ratings.src = "https:" + entry.fields.ratings.fields.file.url;
        }
 
        productsDiv.appendChild(productDiv); 
        productDiv.appendChild(linkToDetails);
        productDiv.appendChild(nameH3); 
        productDiv.appendChild(description);
        productDiv.appendChild(ratings)
        productDiv.appendChild(price);
    
    });
});

  var detailsDiv = document.getElementById('details')
    
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id"); 
  console.log(id)
  
  client.getEntries({content_type: 'shein', 'sys.id' : id}).then(function (entries) {
  
    entries.items.forEach(function (entry) {
        console.log(entries)
  
        var productDiv = document.createElement('div'); // <div></div>
        productDiv.classList.add('product'); //
  
        var nameH3 = document.createElement('h3');
        nameH3.classList.add('product-name');
        nameH3.innerHTML = entry.fields.title;
  
        var mainImage = document.createElement('img');
        mainImage.classList.add('product-image');
        if (entry.fields.images){
            mainImage.src = "https:" + entry.fields.images.fields.file.url;
        }
  
  
        var price = document.createElement('p');
        price.classList.add('price');
        price.innerHTML = entry.fields.price;
  
  
        var description = document.createElement('p');
        description.classList.add('description');
        description.innerHTML = entry.fields.description;
  
        var mainImage = document.createElement('img');
        mainImage.classList.add('product-image');
        if (entry.fields.images){
            mainImage.src = "https:" + entry.fields.images.fields.file.url;
        }
  
        var ratings = document.createElement('img');
        ratings.classList.add('ratings');
        if (entry.fields.ratings){
            ratings.src = "https:" + entry.fields.ratings.fields.file.url;
        }
  
        detailsDiv.appendChild(productDiv);
        productDiv.appendChild(mainImage);
        productDiv.appendChild(nameH3); 
        productDiv.appendChild(description);
        productDiv.appendChild(ratings)
        productDiv.appendChild(price);
    
    });
  
  
  
  });