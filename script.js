const products = [{"id": 1, "name": "4 Layer Corner Trolly Rack", "description": "Stainless Steel/Plastic; Height: 88.9cm; Width: 35.56cm; Weight: 1.025kg; Color: White; Ideal for kitchen or bathroom storage.", "image": "images/Product Image1.jpg", "video": "videos/Product Video1.mp4", "price": ""}, {"id": 2, "name": "5 Layer Vertical Shoe Rack", "description": "Stainless Steel/Plastic; Height: 101.6cm; Width: 26.67cm; Weight: 1.590kg; Color: White; Space-saving organizer for shoes.", "image": "images/Product Image2.jpg", "video": "videos/Product Video2.mp4", "price": ""}, {"id": 3, "name": "SB 4 Layer Storage Basket", "description": "Plastic; Height: 86.36cm; Width: 40.64cm; Weight: 1.985kg; Color: Green, Blue, Pink, Off White; Multipurpose storage unit.", "image": "images/Product Image3.jpg", "video": "videos/Product Video3.mp4", "price": ""}, {"id": 4, "name": "5 layer Multifunctional Shoe Organizer Rack", "description": "Plastic; Height: 88.63cm; Width: 27.94cm; Weight: 1.135kg; Color: Orange, Green, Blue; Light and easy to assemble.", "image": "images/Product Image4.jpg", "video": "videos/Product Video4.mp4", "price": ""}, {"id": 5, "name": "Narrow Type Gap Storage Trolly Rack", "description": "Stainless Steel/Plastic; Height: 86.36cm; Width: 40.64cm; Weight: 1.285kg; Color: White; Fits perfectly in narrow gaps.", "image": "images/Product Image5.jpg", "video": "videos/Product Video5.mp4", "price": ""}, {"id": 6, "name": "Wide Type Gap Storage Trolly Rack", "description": "Stainless Steel/Plastic; Height: 86.36cm; Width: 40.64cm; Weight: 1.680kg; Color: White, Black; Wide design for more capacity.", "image": "images/Product Image6.jpg", "video": "videos/Product Video6.mp4", "price": ""}, {"id": 7, "name": "Wall Mounted Storage Rack", "description": "Plastic; Height: 71.12cm; Width: 40.64cm; Weight: 1.550kg; Color: White, Black; Punch-free installation, great for bathrooms or kitchens.", "image": "images/Product Image7.jpg", "video": "videos/Product Video7.mp4", "price": ""}, {"id": 8, "name": "5 layer food cover", "description": "Plastic; Height: 38.1cm; Width: 25.4cm; Weight: 935g; Color: White, Green, Yellow; Keeps food warm and protected from insects.", "image": "images/Product Image8.jpg", "video": "videos/Product Video8.mp4", "price": ""}, {"id": 9, "name": "12pcs Adjustable Fridge Dividers", "description": "Plastic; Organize your fridge, drawers, or cabinets effortlessly; Customizable length.", "image": "images/Product Image9.jpg", "video": "videos/Product Video9.mp4", "price": ""}, {"id": 10, "name": "Transparent Spoon Holder", "description": "Plastic; Convenient and hygienic spoon holder.", "image": "images/Product Image10.jpg", "video": "videos/Product Video10.mp4", "price": ""}, {"id": 11, "name": "6pcs Set Drawer Storage Divider", "description": "Plastic; Adjustable dividers to organize drawers easily.", "image": "images/Product Image11.jpg", "video": "videos/Product Video11.mp4", "price": ""}, {"id": 12, "name": "2 Pcs Set Bag Holder", "description": "Plastic; Clips to hold plastic bags open for easy filling.", "image": "images/Product Image12.jpg", "video": "videos/Product Video12.mp4", "price": ""}, {"id": 13, "name": "Vegetable Fruit Washing Basket Strainer", "description": "Plastic; Dual-layer basket for washing and draining fruits and vegetables.", "image": "images/Product Image13.jpg", "video": "videos/Product Video13.mp4", "price": ""}, {"id": 14, "name": "Sliding Egg Tray for Fridge & Kitchen", "description": "Plastic; Space-saving sliding design for egg storage.", "image": "images/Product Image14.jpg", "video": "videos/Product Video14.mp4", "price": ""}, {"id": 15, "name": "4 Layer Egg Dispenser", "description": "Plastic; Gravity-fed egg dispenser for easy access.", "image": "images/Product Image15.jpg", "video": "videos/Product Video15.mp4", "price": ""}, {"id": 16, "name": "Double-Layer Egg Dispenser", "description": "Plastic; Compact double-layer egg storage solution.", "image": "images/Product Image16.jpg", "video": "videos/Product Video16.mp4", "price": ""}, {"id": 17, "name": "2 In1 Dumpling Maker", "description": "Plastic; Simple tool for quickly making perfect dumplings.", "image": "images/Product Image17.jpg", "video": "videos/Product Video17.mp4", "price": ""}, {"id": 18, "name": "BIG Size Pitha Maker", "description": "Plastic; H:30.48cm; W:13.97cm; Wt:240g; Color: Orange; Easy and safe Pitha making tool.", "image": "images/Product Image18.jpg", "video": "videos/Product Video18.mp4", "price": ""}, {"id": 19, "name": "Foldable Baby Potty Seat", "description": "Plastic; H:22.86cm; W:15.24cm; Wt:426g; Color: Blue, Green, Pink; Portable and comfortable training seat for toddlers.", "image": "images/Product Image19.jpg", "video": "videos/Product Video19.mp4", "price": ""}, {"id": 20, "name": "Multi-Function Four Grid Spice Box", "description": "Plastic/Crystal Plastic; H:7.62cm; W:13.97cm; Wt:180g; Color: White, Brown; Four separate compartments for different spices.", "image": "images/Product Image20.jpg", "video": "videos/Product Video20.mp4", "price": ""}, {"id": 21, "name": "None-Stick Meatball Maker", "description": "Plastic; H:20.32cm; W:10.16cm; Wt:105g; Color: White, Yellow; Easy and safe Pitha making tool.", "image": "images/Product Image21.jpg", "video": "videos/Product Video21.mp4", "price": ""}, {"id": 22, "name": "Round Ice Cubes Tray", "description": "Plastic; H:17.78cm; W:10.16cm; Wt:50g; Color: Pink, Blue; Makes 33 round ice cubes.", "image": "images/Product Image22.jpg", "video": "videos/Product Video22.mp4", "price": ""}, {"id": 23, "name": "Metal Mosquito Coil Stand", "description": "Metal; H:20.32cm; W:12.7cm; Wt:0.215kg; Color: Golden, Black; Decorative and safe coil stand.", "image": "images/Product Image23.jpg", "video": "videos/Product Video23.mp4", "price": ""}, {"id": 24, "name": "Iron Frame Punch Free Storage Organizer Shelf", "description": "Metal; H:45.72cm; W:12.7cm; Wt:165g; Color: Black; Punch Free wall-mounted shelf.", "image": "images/Product Image24.jpg", "video": "videos/Product Video24.mp4", "price": ""}, {"id": 25, "name": "Metal Kitchen Hook", "description": "Metal; H:5.08cm; W:5.08cm; Wt:30g; Color: Black, Silver; Self-adhesive utility hook.", "image": "images/Product Image25.jpg", "video": "videos/Product Video25.mp4", "price": ""}, {"id": 26, "name": "Stainless Steel Finger Guard", "description": "Stainless Steel; Protects fingers while chopping vegetables.", "image": "images/Product Image26.jpg", "video": "videos/Product Video26.mp4", "price": ""}, {"id": 27, "name": "3PCS/set Gardening Tools", "description": "Plastic/Metal; Includes shovel, rake, and trowel for basic gardening tasks.", "image": "images/Product Image27.jpg", "video": "videos/Product Video27.mp4", "price": ""}, {"id": 28, "name": "SB-052 Desktop Fan", "description": "Plastic/Electronics; Compact USB-powered desktop fan.", "image": "images/Product Image28.jpg", "video": "videos/Product Video28.mp4", "price": ""}, {"id": 29, "name": "SB2501F Mini Portable Fan", "description": "Plastic/Electronics; Mini rechargeable fan for portable use.", "image": "images/Product Image29.jpg", "video": "videos/Product Video29.mp4", "price": ""}, {"id": 30, "name": "Nursing Pillow for Pregnant Women", "description": "Cotton/Polyester; Comfortable, supportive pillow for expecting and new mothers.", "image": "images/Product Image30.jpg", "video": "videos/Product Video30.mp4", "price": ""}, {"id": 31, "name": "Cycling Hoodie Mask", "description": "Fabric; Protects face from dust and sun during cycling.", "image": "images/Product Image31.jpg", "video": "videos/Product Video31.mp4", "price": ""}, {"id": 32, "name": "Baby Safety Helmet", "description": "Foam/Fabric; Protective helmet for babies learning to crawl or walk.", "image": "images/Product Image32.jpg", "video": "videos/Product Video32.mp4", "price": ""}];

// --- PAGINATION VARIABLES ---
const PRODUCTS_PER_PAGE = 15; // Proti page-e 15ti product
let currentPage = 1;
const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

// --- MODAL & ELEMENT SELECTION ---
const productModal = document.getElementById('productModal');
const modalDetails = document.getElementById('modalDetails');
const closeBtn = document.querySelector('.close-btn');
const container = document.getElementById('productContainer');
const pageInfoSpan = document.getElementById('pageInfo');
const prevBtn = document.getElementById('prevPage');
const nextBtn = document.getElementById('nextPage');

// NEW: Contact Numbers
const CONTACT_INFO = `
    <div class="contact-info">
        <p><strong>Contact Numbers:</strong></p>
        <p>
            <a href="tel:01611006666">01611006666</a> / 
            <a href="tel:01908528987">01908528987</a>
        </p>
    </div>
`;


const showProductDetails = (product) => {
    // Description logic: split by semicolon (;) to create list items
    const detailsArray = product.description.split(';').map(d => d.trim()).filter(d => d.length > 0);
    const detailsList = detailsArray.length > 0
        ? `<ul>${detailsArray.map(item => `<li>${item}</li>`).join('')}</ul>`
        : `<p>No detailed specifications available.</p>`;

    // 1. Modal Content Inject (Updated with CONTACT_INFO)
    modalDetails.innerHTML = `
        <div class="product-details">
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" 
                 onerror="this.onerror=null; console.error('Image Load Fail: ${product.image}'); this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'300\\' height=\\'200\\' viewBox=\\'0 0 300 200\\'><rect width=\\'300\\' height=\\'200\\' fill=\\'#ccc\\'/><text x=\\'150\\' y=\\'100\\' font-family=\\'Arial\\' font-size=\\'20\\' fill=\\'#333\\' text-anchor=\\'middle\\'>Image Missing! Check Path: ${product.image}</text></svg>';">
            
            <h3>Specifications</h3>
            <div class="details-list-container">
                 ${detailsList}
            </div>
            
            <div class="price">
                <p><strong>Price:</strong> (Contact for current price)</p>
            </div>
            ${CONTACT_INFO}
        </div>
        <div class="video-player">
            <h3>Product Video</h3>
            <video controls autoplay>
                <source src="${product.video}" type="video/mp4" 
                        onerror="alert('Video File Not Found! Check file name: ${product.video}');">
                Your browser does not support the video tag.
            </video>
        </div>
    `;

    // 2. Show Modal
    productModal.style.display = 'block';
};

// Close Modal Logic
closeBtn.onclick = () => {
    productModal.style.display = 'none';
    const videoElement = modalDetails.querySelector('video');
    if (videoElement) {
        videoElement.pause();
    }
};
window.onclick = (event) => {
    if (event.target == productModal) {
        productModal.style.display = 'none';
        const videoElement = modalDetails.querySelector('video');
        if (videoElement) {
            videoElement.pause();
        }
    }
};


// --- PAGINATION FUNCTIONS ---
const renderProductsForPage = (page) => {
    container.innerHTML = ''; 
    
    // Calculate start and end index
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    
    const productsToRender = products.slice(startIndex, endIndex);

    productsToRender.forEach(p => {
        const div = document.createElement('div');
        div.className = 'card';
        div.onclick = () => showProductDetails(p);

        const previewDesc = p.description.split(';')[0].trim();
        
        div.innerHTML = `
          <img src="${p.image}" alt="${p.name}" 
               onerror="this.onerror=null; this.style.backgroundColor='#ffe0e0'; this.style.padding='10px'; console.error('Image Load Fail: ${p.image}');">
          <div class="info">
            <div class="name">${p.name}</div>
            <div class="desc">${previewDesc ? previewDesc + '...' : 'Details...'}</div>
            <div class="price">Price:</div>
            <button class="play" style="pointer-events: none;">View Details / Video</button>
          </div>`;
        container.appendChild(div);
    });

    // Update pagination controls
    pageInfoSpan.textContent = `Page ${currentPage} of ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    // Scroll to top of the page after rendering
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderProductsForPage(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderProductsForPage(currentPage);
    }
});

window.onload = () => {
  const splash = document.querySelector('.splash');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const paginationControls = document.querySelector('.pagination-controls');
  const footer = document.querySelector('.footer');
  
  // Splash Screen Logic
  setTimeout(() => {
    splash.style.display = 'none';
    header.classList.remove('hidden');
    main.classList.remove('hidden');
    paginationControls.classList.remove('hidden'); // Show pagination
    footer.classList.remove('hidden'); // Show footer
    
    // Initial render of the first page
    renderProductsForPage(currentPage);
  }, 4000);
};