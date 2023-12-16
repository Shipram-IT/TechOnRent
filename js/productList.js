function createProductHeading(heading) {
    let headingEl = document.createElement('h4');
    headingEl.classList.add('product-title');
    headingEl.innerText = heading;

    return headingEl;
}

function createPrice(price) {
    let priceArr = (price + "").split(".");

    let container = document.createElement('div');
    container.classList.add("price-container");

    let dollar = document.createElement('sup');
    dollar.innerText = "$";
    container.appendChild(dollar);

    let priceEl = document.createElement('span');
    priceEl.classList.add("price");
    priceEl.innerText = priceArr[0];
    container.appendChild(priceEl);

    let cents = document.createElement('sup');
    cents.innerText = priceArr[1];
    container.appendChild(cents);

    let frequency = document.createElement('sub');
    frequency.innerText = "/mo";
    container.appendChild(frequency);

    return container;
}

function createEmptyStarSvg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "15px");
    svg.setAttribute("height", "15px");
    svg.setAttribute("viewBox", "0 -0.02 60.031 60.031");
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
    path.setAttribute("d", "M939.975,219.607l5.32,10.771a9.12,9.12,0,0,0,2.647,3.216,9.226,9.226,0,0,0,3.713,1.675l8.235,1.667-6.122,4.647a9.01,9.01,0,0,0-3.454,8.781l1.976,10.994-7.839-4.409a9.151,9.151,0,0,0-8.958,0l-7.833,4.405,1.974-10.984a9,9,0,0,0-3.43-8.776l-6.142-4.662,8.227-1.666a9.074,9.074,0,0,0,6.356-4.874l5.33-10.789m0-9.606a3.1,3.1,0,0,0-2.792,1.716l-7.914,16.018a3.02,3.02,0,0,1-.885,1.074,3.129,3.129,0,0,1-1.28.577l-14.654,2.967a3.069,3.069,0,0,0-2.391,2.285,3,3,0,0,0,1.117,3.085l11.4,8.657a3,3,0,0,1,.993,1.3,2.929,2.929,0,0,1,.16,1.618l-3.076,17.135a3,3,0,0,0,1.274,3.011,3.13,3.13,0,0,0,1.777.551,3.164,3.164,0,0,0,1.55-.4l13.174-7.409a3.156,3.156,0,0,1,3.09,0L954.7,269.6a3.161,3.161,0,0,0,3.326-.147,3,3,0,0,0,1.275-3.011L956.218,249.3a2.948,2.948,0,0,1,.162-1.618,3,3,0,0,1,.993-1.3l11.4-8.657a3,3,0,0,0,1.117-3.085,3.07,3.07,0,0,0-2.393-2.285l-14.656-2.967a3.162,3.162,0,0,1-1.281-.577,3.028,3.028,0,0,1-.884-1.074l-7.91-16.018A3.108,3.108,0,0,0,939.975,210h0Z");

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

function createHalfFilledStarSvg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "15px");
    svg.setAttribute("height", "15px");
    svg.setAttribute("viewBox", "0 -0.02 60.031 60.031");
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
    path.setAttribute("d", "M828.776,237.723l-11.4,8.657a3,3,0,0,0-.993,1.3,2.948,2.948,0,0,0-.162,1.618l3.078,17.135a3,3,0,0,1-1.275,3.011,3.161,3.161,0,0,1-3.326.147l-13.174-7.409a3.156,3.156,0,0,0-3.09,0L785.257,269.6a3.164,3.164,0,0,1-1.55.4,3.13,3.13,0,0,1-1.777-.551,3,3,0,0,1-1.274-3.011l3.076-17.135a2.929,2.929,0,0,0-.16-1.618,3,3,0,0,0-.993-1.3l-11.4-8.657a3,3,0,0,1-1.117-3.085,3.069,3.069,0,0,1,2.391-2.285l14.654-2.967a3.129,3.129,0,0,0,1.28-.577,3.02,3.02,0,0,0,.885-1.074l7.914-16.018a3.131,3.131,0,0,1,5.586,0l7.91,16.018a3.028,3.028,0,0,0,.884,1.074,3.162,3.162,0,0,0,1.281.577l14.655,2.967a3.07,3.07,0,0,1,2.394,2.285A3,3,0,0,1,828.776,237.723Zm-17.121-2.454a9.22,9.22,0,0,1-3.713-1.675,9.12,9.12,0,0,1-2.647-3.216L800,219.658v36.125a9.188,9.188,0,0,1,4.451,1.166l7.839,4.409-1.976-10.994a9.01,9.01,0,0,1,3.454-8.781l6.122-4.647Z");

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

function createFullFilledStarSvg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "15px");
    svg.setAttribute("height", "15px");
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

function createRating(ratings) {
    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("rating");

    const spanElement = document.createElement("span");

    // Creating and appending stars elements
    for (let i = 0; i < Math.floor(ratings); i++) {
        const svgElement = createFullFilledStarSvg();
        spanElement.appendChild(svgElement);
    }

    if ((ratings + "").split(".").length > 1) {
        const svgElement = createHalfFilledStarSvg();
        spanElement.appendChild(svgElement);
    }

    for (let i = 0; i < 5 - Math.ceil(ratings); i++) {
        const svgElement = createEmptyStarSvg();
        spanElement.appendChild(svgElement);
    }

    // Appending the span element to the rating container
    ratingContainer.appendChild(spanElement);

    // Creating and appending the "100+ Reviews" link
    const reviewsLink = document.createElement("a");
    reviewsLink.href = "#";
    reviewsLink.classList.add("reviews");
    reviewsLink.textContent = "100+ Reviews";
    ratingContainer.appendChild(reviewsLink);

    return ratingContainer;
}

function createAvailability(availableFrom) {
    let wrapper = document.createElement('div');
    wrapper.innerText = "Available from ";

    let availability = document.createElement('b');
    availability.innerText = availableFrom;
    wrapper.appendChild(availability);

    return wrapper;
}

async function getOwner(id) {
    return fetch("../json/sellers.json")
        .then(res => res.json())
        .then((sellers) => {
            return sellers.find(seller => seller.id == id);
        });
}

async function createOwner(sellerId) {
    let ownerDetails = await getOwner(sellerId);
    let owner = document.createElement('div');
    owner.classList.add("owner");

    let image = document.createElement('img');
    image.classList.add("owner-img");
    image.src = ownerDetails.image;
    owner.appendChild(image);

    let ownerDet = document.createElement('div');
    ownerDet.classList.add('owner-details');

    let nameWrapper = document.createElement('div');
    nameWrapper.style.color = "var(--primary-purple)";

    let name = document.createElement('b');
    name.innerText = ownerDetails.name;
    nameWrapper.appendChild(name);
    ownerDet.appendChild(nameWrapper);

    let productsSold = document.createElement('div');
    productsSold.innerText = "Rented " + ownerDetails.productsRented + "+ products";
    ownerDet.appendChild(productsSold);
    owner.appendChild(ownerDet);

    return owner;
}

async function createProductDescription(product) {
    const anchorElement = document.createElement('a');
    anchorElement.href = './product-detail.html?category=' + getHeading() + '&id=' + product.id;

    // Create the product image element
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.productName;
    productImage.classList.add('product-image');

    // Create the product description div
    const productDescription = document.createElement('div');
    productDescription.classList.add('product-description');
    productDescription.appendChild(createProductHeading(product.productName));
    productDescription.appendChild(createRating(product.ratings));
    productDescription.appendChild(createPrice(product.price));
    productDescription.appendChild(createAvailability(product.availableFrom));
    productDescription.appendChild(await createOwner(product.sellerId));

    // Append the product image and description to the anchor element
    anchorElement.appendChild(productImage);
    anchorElement.appendChild(productDescription);

    return anchorElement;
}

async function createProduct(product) {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container', 'card');

    productContainer.appendChild(await createProductDescription(product));

    return productContainer;
}

function getProductsJsonLink() {
    let productsJsonLink = "";
    let category = window.location.search.split("=");
    category = category[category.length - 1];
    
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

async function renderProducts() {
    let productsContainer = document.getElementsByClassName("products")[0];

    fetch(getProductsJsonLink())
        .then(response => response.json())
        .then(async (products) => {
            await products.forEach(async product => {
                let productEl = await createProduct(product);
                productsContainer.appendChild(productEl);
            });
        });
}

function getHeading() {
    let heading = window.location.search.split("=");
    heading = heading[heading.length - 1];

    return heading;
}

function renderHeading() {
    let heading = getHeading();
    
    document.getElementsByTagName('h1')[0].appendChild(document.createTextNode(heading));
}

function loadMore() {
    renderProducts();
}

renderHeading();
renderProducts();