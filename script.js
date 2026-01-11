const products = [
{ name: "Laptop", category: "Elektronik", price: 8000000, rating: 5, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
{ name: "Smartphone", category: "Elektronik", price: 4500000, rating: 4, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
{ name: "Headphone", category: "Elektronik", price: 350000, rating: 4, image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ name: "Kamera", category: "Elektronik", price: 6200000, rating: 5, image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ name: "Jaket", category: "Fashion", price: 250000, rating: 4, image: "https://images.unsplash.com/photo-1520975916090-3105956dac38" },
{ name: "Sepatu Sneakers", category: "Fashion", price: 550000, rating: 5, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77" },
{ name: "Tas", category: "Fashion", price: 300000, rating: 3, image: "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ name: "Jam Tangan", category: "Aksesoris", price: 450000, rating: 5, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
{ name: "Kacamata", category: "Aksesoris", price: 180000, rating: 4, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083" },
{ name: "Topi", category: "Aksesoris", price: 120000, rating: 3, image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];


const productList = document.getElementById("productList");


function displayProducts(items) {
productList.innerHTML = "";
items.forEach(p => {
productList.innerHTML += `
<div class="card">
<img src="${p.image}">
<div class="card-content">
<h3>${p.name}</h3>
<p>Kategori: ${p.category}</p>
<p>Harga: Rp ${p.price.toLocaleString()}</p>
<p class="rating">Rating: ${'★'.repeat(p.rating)}</p>
</div>
</div>
`;
});
}


function filterProducts() {
const category = document.getElementById("category").value;
const maxPrice = document.getElementById("maxPrice").value;
const minRating = document.getElementById("minRating").value;


let result = products;


if (category !== "all") {
result = result.filter(p => p.category === category);
}


if (maxPrice) {
result = result.filter(p => p.price <= maxPrice);
}


if (minRating > 0) {
result = result.filter(p => p.rating >= minRating);
}


displayProducts(result);
}


displayProducts(products);