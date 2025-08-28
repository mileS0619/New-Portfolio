const itemDetails = {
    necklace1: { title: "Naily necklace", price: "$150", description: "A unisex neck-piece." },
    ring1: { title: "24 Karats Diamond ring", price: "$12000", description: "A ring covered with 24 karats diamonds, loved by anyone." },
    necklace2: { title: "Gold Necklace", price: "$21980", description: "Gold necklace with a removable crown pendant" },
    Earing1: { title: "Gold Earing", price: "$80", description: "Elegant earing for evening wear" },
    perfume1: { title: "Prada", price: "$85", description: "Woody Fragrance" },
    Earing2: { title: "Silver earing", price: "$90", description: "Luxurious silver earing for special occasions." },
    Bracelet1: { title: "Gold bracelet", price: "$40", description: "Elegant piece." },
    perfume2: { title: "Prada", price: "$50", description: "Fresh floral scent for all seasons." },
    necklace3: { title: "Necklace", price: "$35", description: "Elegant gold necklace with pendant." },
    perfume3: { title: "Prada", price: "$60", description: "Fresh floral scent for all seasons." },
    perfume4: { title: "Bleu de Chanel", price: "$70", description: "Woody fragrance with a hint of spice." },
    perfume5: { title: "Coco Chanel", price: "$65", description: "Citrus-based perfume for a vibrant feel." },
    necklace4: { title: "Gold Necklace", price: "$120", description: "Elegant gold necklace with pendant." },
    bracelet2: { title: "Silver Bracelet", price: "$90", description: "Stylish silver bracelet with charms." },
    earring3: { title: "gold Earrings", price: "$150", description: "Sparkling gold earrings for special occasions." }
};

function showModal(itemId) {
    const item = itemDetails[itemId];
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h3>${item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>${item.description}</p>
    `;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
