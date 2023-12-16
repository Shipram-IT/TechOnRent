function getCategory() {
    let category = window.location.search.split("&");
    category = category[0].split("=");
    category = category[category.length - 1];

    return category;
}

function getProductId() {
    let productId = window.location.search.split("&");
    productId = productId[productId.length - 1].split("=");
    productId = productId[productId.length - 1];

    return productId;
}

function getProductsJsonLink() {
    let productsJsonLink = "";
    let category = getCategory();
    
    switch(category) {
        case "Computer":
            productsJsonLink = "../json/computers.json";
            break;
        case "Mobiles":
            productsJsonLink = "../json/mobiles.json";
            break;
        case "Cameras":
            productsJsonLink = "../json/cameras.json";
            break;
        case "Headphones":
            productsJsonLink = "../json/headphones.json";
            break;
        default:
            productsJsonLink = "../json/computers.json";
            break;
    }

    return productsJsonLink;
}

function getProduct() {
    const productId = getProductId();

    return fetch(getProductsJsonLink())
        .then(response => response.json())
        .then((products) => {
            return products.find(prod => prod.id == productId);
        });
}

function createDivElement(classes = []) {
    const div = document.createElement('div');
    div.classList.add(...classes);
    return div;
}

function createImageElement(src, alt, classes = []) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.classList.add(...classes);
    return img;
}

function createButtonElement(text, classes = [], id = "", onClick = () => {}) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add(...classes);
    button.id = id;
    button.addEventListener('click', onClick);
    return button;
}

function createLinkElement(href, text, classes = []) {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    link.classList.add(...classes);
    return link;
}

function createSupElement(text) {
    const sup = document.createElement('sup');
    sup.textContent = text;
    return sup;
}

function createSubElement(text) {
    const sub = document.createElement('sub');
    sub.textContent = text;
    return sub;
}

function createSvgElement() {
    // Replace this with your actual SVG content or URL
    const svg = document.createElement('svg');
    return svg;
}

function createTableCellElement(label, value) {
    const tr = document.createElement('tr');
    const tdLabel = document.createElement('td');
    const tdValue = document.createElement('td');
    tdLabel.textContent = label;
    tdValue.innerHTML = value;
    tr.appendChild(tdLabel);
    tr.appendChild(tdValue);
    return tr;
}

function createFullFilledStarSvg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "10px");
    svg.setAttribute("height", "10px");
    svg.setAttribute("viewBox", "0 -0.03 60.062 60.062");
    svg.setAttribute("fill", "#000000");

    // Creating groups for carriers
    const bgCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
    bgCarrier.setAttribute("id", "SVGRepo_bgCarrier");
    bgCarrier.setAttribute("stroke-width", "0");

    const tracerCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
    tracerCarrier.setAttribute("id", "SVGRepo_tracerCarrier");
    tracerCarrier.setAttribute("stroke-linecap", "round");
    tracerCarrier.setAttribute("stroke-linejoin", "round");

    const iconCarrier = document.createElementNS("http://www.w3.org/2000/svg", "g");
    iconCarrier.setAttribute("id", "SVGRepo_iconCarrier");

    // Creating style definitions
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
    style.textContent = ".cls-1 { fill: #9b59b6; fill-rule: evenodd; }";

    // Creating path element with the specified attributes
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("class", "cls-1");
    path.setAttribute("d", "M670.68,227.733a3.03,3.03,0,0,0,.884,1.072,3.168,3.168,0,0,0,1.282.578l14.662,2.965a3.067,3.067,0,0,1,2.394,2.284,3,3,0,0,1-1.118,3.084l-11.408,8.654a3.01,3.01,0,0,0-.994,1.3,2.956,2.956,0,0,0-.16,1.618L679.3,266.42a3,3,0,0,1-1.275,3.01,3.166,3.166,0,0,1-3.328.146l-13.18-7.407a3.165,3.165,0,0,0-3.091,0l-13.181,7.407a3.156,3.156,0,0,1-3.327-.146,3,3,0,0,1-1.275-3.01l3.078-17.129a2.956,2.956,0,0,0-.16-1.618,3.01,3.01,0,0,0-.994-1.3l-11.408-8.654a3,3,0,0,1-1.118-3.084,3.068,3.068,0,0,1,2.393-2.284l14.66-2.965a3.141,3.141,0,0,0,1.281-.578,3.044,3.044,0,0,0,.885-1.072l7.918-16.013a3.133,3.133,0,0,1,5.587,0Z");
    path.setAttribute("id", "rating");
    path.setAttribute("transform", "translate(-629.938 -210)");

    // Appending path to the icon carrier
    iconCarrier.appendChild(path);

    // Appending carriers to the SVG element
    svg.appendChild(bgCarrier);
    svg.appendChild(tracerCarrier);
    svg.appendChild(defs);
    defs.appendChild(style);
    svg.appendChild(iconCarrier);

    return svg;
}

function getBackLink() {
    return './product-list.html?category=' + getCategory(); 
}

async function renderProductDetail() {
    const product = await getProduct();
    const productDetailWrapper = createDivElement(['flex', 'product-detail-wrapper']);

    const leftContainer = createLeftContainer(product);
    const rightContainer = createRightContainer(product);

    productDetailWrapper.appendChild(leftContainer);
    productDetailWrapper.appendChild(rightContainer);

    document.getElementsByTagName('main')[0].appendChild(productDetailWrapper);
    document.getElementById('back-button').href = getBackLink();
}

function addToCart() {
    alert("Product added to cart successfully!");
}

function buyNow() {
    window.location = './checkout.html';
}

function addToWishlist() {
    window.location = './wishlist.html';
}

function createLeftContainer(product) {
    const leftContainer = createDivElement(['left']);

    const productImageContainer = createDivElement(['product-image-container']);
    const productImage = createImageElement(product.image, 'phone', ['product-image']);
    const buttonsWrapper = createDivElement(['buttons-wrapper']);
    const addToCartButton = createButtonElement('Add to Cart', ['primary-btn', 'width-40-pt'], 'add-to-cart', addToCart);
    const buyNowButton = createButtonElement('Buy Now', ['secondary-btn', 'width-40-pt'], 'buy-now', buyNow);
    const buttonsWrapper2 = createDivElement(['buttons-wrapper']);
    const addToWishlistButton = createButtonElement('Add to Wishlist ❤️', ['secondary-btn', 'width-87-pt'], 'add-to-wishlist', addToWishlist);

    productImageContainer.appendChild(productImage);
    buttonsWrapper.appendChild(addToCartButton);
    buttonsWrapper.appendChild(buyNowButton);
    buttonsWrapper2.appendChild(addToWishlistButton);
    leftContainer.appendChild(productImageContainer);
    leftContainer.appendChild(buttonsWrapper);
    leftContainer.appendChild(buttonsWrapper2);

    return leftContainer;
}

function createRightContainer(product) {
    const rightContainer = createDivElement(['right']);

    const card = createDivElement(['card']);
    const cardContent = createDivElement(['card-content']);

    const productName = document.createElement('h2');
    productName.textContent = product.productName;

    const ratingContainer = createDivElement(['rating']);
    const ratingSpan = document.createElement('span');
    ratingSpan.classList.add('status', 'border-btn');
    ratingSpan.innerHTML = product.ratings + ' ' + createFullFilledStarSvg().outerHTML;
    const reviewsLink = createLinkElement('#', '100+ Reviews', ['reviews']);

    const priceContainer = createDivElement(['price-container']);
    const priceSup1 = createSupElement('$');
    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = Math.floor(product.price);
    const priceSup2 = createSupElement((product.price + "").split(".")[1]);
    const priceSub = createSubElement('/mo');

    const rentTable = document.createElement('table');
    rentTable.classList.add('rent-table');
    rentTable.appendChild(createTableCellElement('Available', product.availableFrom));
    rentTable.appendChild(createTableCellElement('Storage', product.storage));
    rentTable.appendChild(createTableCellElement('Color', 'Green'));
    rentTable.appendChild(createTableCellElement('In the box', product.productName + ', Ejection Pin, Data Cable, Quick Start Guide'));
    rentTable.appendChild(createTableCellElement('Seller', `
        <div class="owner">
            <img class="owner-img" src="../img/products/owners/owner1.jpg">
            <div class="owner-details">
                <div style="color: var(--primary-purple);"><b>Shivani Sehgal</b></div>
                <div>Rented 10+ Products</div>
            </div>
        </div>
    `));

    const productDescription = createDivElement(['product-description']);
    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = 'Description:';
    const description = document.createElement('p');
    description.textContent = product.description;

    productDescription.appendChild(heading);
    productDescription.appendChild(description);

    // Append all elements to card content
    cardContent.appendChild(productName);
    ratingContainer.appendChild(ratingSpan);
    ratingContainer.appendChild(reviewsLink);
    cardContent.appendChild(ratingContainer);
    priceContainer.appendChild(priceSup1);
    priceContainer.appendChild(price);
    priceContainer.appendChild(priceSup2);
    priceContainer.appendChild(priceSub);
    cardContent.appendChild(priceContainer);
    cardContent.appendChild(rentTable);
    cardContent.appendChild(productDescription);

    // Append card content to card
    card.appendChild(cardContent);

    // Append card to right container
    rightContainer.appendChild(card);

    return rightContainer;
}

// Call the renderProductDetail function to generate and append the HTML structure
renderProductDetail();
