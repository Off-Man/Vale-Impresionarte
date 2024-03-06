import { productos } from "../mocks/productos.js";


let cardContainer = document.getElementById("card-template");

productos.forEach(prod => {
    productos.forEach(prod => {
        // Crea un nuevo elemento div para cada tarjeta
        let card = document.createElement("div");
        card.className = "bg-gray-900 py-4";
    
        card.innerHTML = `
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <div class="relative overflow-hidden">
                            <img class="object-cover w-full h-full" src="${prod.img}" alt="Product">
                            <div class="absolute inset-0 bg-black opacity-40"></div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mt-4">${prod.name}</h3>
                        <p class="text-gray-500 text-sm mt-2">${prod.description}</p>
                        <div class="flex items-center justify-between mt-4">
                            <span class="text-gray-900 font-bold text-lg">$${prod.price}</span>
                            <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        // Agrega la tarjeta al contenedor externo
        cardContainer.appendChild(card);
    });
});


