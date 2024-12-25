const touristPlaces = [
    {
        name: "Delhi",
        description: "Explore the capital city with its historical landmarks and bustling markets.",
        festivals: ["Diwali", "Holi", "Eid"],
        images: ["https://s3u9x3j9.stackpathcdn.com/wp-content/uploads/2020/11/india-gate.jpg", "https://www.tripsavvy.com/thmb/pAlZ4kx0tM9HFLmgkYbqMlfxaok=/2116x1417/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-846359134-5b515328c9e77c003738e40c.jpg", "https://www.tripsavvy.com/thmb/EamG8gwnVK1VCqLrqtC1lGuLGPg=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-148743699-5b514725c9e77c005b2e61bd.jpg"]
    },
    {
        name: "Goa",
        description: "Relax on the beautiful beaches and experience the vibrant nightlife.",
        festivals: ["Carnival", "Shigmo", "Ganesh Chaturthi"],
        images: ["goa1.jpg", "goa2.jpg", "goa3.jpg"]
    },
    {
        name: "Mumbai",
        description: "Experience the Bollywood magic and explore the bustling city life.",
        festivals: ["Ganesh Chaturthi", "Navratri", "Diwali"],
        images: ["mumbai1.jpg", "mumbai2.jpg", "mumbai3.jpg"]
    },
    {
        name: "Jaipur",
        description: "Visit the Pink City known for its rich history and vibrant culture.",
        festivals: ["Diwali", "Gangaur", "Teej"],
        images: ["jaipur1.jpg", "jaipur2.jpg", "jaipur3.jpg"]
    },
    {
        name: "Kerala",
        description: "Explore the serene backwaters and enjoy the cultural diversity.",
        festivals: ["Onam", "Vishu", "Thrissur Pooram"],
        images: ["kerala1.jpg", "kerala2.jpg", "kerala3.jpg"]
    },
    {
        name: "Agra",
        description: "Home to the iconic Taj Mahal, Agra is a must-visit for history lovers.",
        festivals: ["Taj Mahotsav", "Diwali", "Eid"],
        images: ["agra1.jpg", "agra2.jpg", "agra3.jpg"]
    },
    {
        name: "Varanasi",
        description: "Explore the spiritual and cultural heritage of this ancient city on the banks of the Ganges.",
        festivals: ["Dev Deepawali", "Shivratri", "Chhath Puja"],
        images: ["varanasi1.jpg", "varanasi2.jpg", "varanasi3.jpg"]
    },
    {
        name: "Rishikesh",
        description: "Known as the 'Yoga Capital of the World,' Rishikesh offers a tranquil retreat in the Himalayas.",
        festivals: ["Ganga Aarti", "International Yoga Festival", "Diwali"],
        images: ["rishikesh1.jpg", "rishikesh2.jpg", "rishikesh3.jpg"]
    },
    {
        name: "Shimla",
        description: "Experience the charm of the snow-capped mountains and colonial architecture.",
        festivals: ["Summer Festival", "Ice Skating Carnival", "Diwali"],
        images: ["shimla1.jpg", "shimla2.jpg", "shimla3.jpg"]
    },
    {
        name: "Kolkata",
        description: "Immerse yourself in the cultural festivities and historical landmarks of the 'City of Joy.'",
        festivals: ["Durga Puja", "Kali Puja", "Diwali"],
        images: ["kolkata1.jpg", "kolkata2.jpg", "kolkata3.jpg"]
    },
    {
        name: "Chennai",
        description: "Discover the vibrant culture, temples, and beaches of the southern city.",
        festivals: ["Pongal", "Navratri", "Diwali"],
        images: ["chennai1.jpg", "chennai2.jpg", "chennai3.jpg"]
    },
    {
        name: "Hyderabad",
        description: "Experience the blend of history, cuisine, and modernity in the 'City of Pearls.'",
        festivals: ["Bathukamma", "Diwali", "Eid"],
        images: ["hyderabad1.jpg", "hyderabad2.jpg", "hyderabad3.jpg"]
    },
    {
        name: "Ooty",
        description: "Escape to the 'Queen of Hill Stations' and enjoy the picturesque landscapes.",
        festivals: ["Summer Festival", "Diwali", "Christmas"],
        images: ["ooty1.jpg", "ooty2.jpg", "ooty3.jpg"]
    },
    {
        name: "Pondicherry",
        description: "Experience the French influence, beaches, and serene atmosphere.",
        festivals: ["Pongal", "Bastille Day", "Diwali"],
        images: ["pondicherry1.jpg", "pondicherry2.jpg", "pondicherry3.jpg"]
    },
    {
        name: "Udaipur",
        description: "Explore the 'City of Lakes' known for its palaces, temples, and vibrant markets.",
        festivals: ["Mewar Festival", "Diwali", "Holi"],
        images: ["udaipur1.jpg", "udaipur2.jpg", "udaipur3.jpg"]
    },
    {
        name: "Darjeeling",
        description: "Enjoy the scenic beauty, tea gardens, and toy train rides in the Himalayan foothills.",
        festivals: ["Losar", "Dasain", "Diwali"],
        images: ["darjeeling1.jpg", "darjeeling2.jpg", "darjeeling3.jpg"]
    },
    {
        name: "Ahmedabad",
        description: "Immerse yourself in the cultural festivities and rich history of the 'Manchester of the East.'",
        festivals: ["Navratri", "Uttarayan", "Diwali"],
        images: ["ahmedabad1.jpg", "ahmedabad2.jpg", "ahmedabad3.jpg"]
    },
    {
        name: "Amritsar",
        description: "Visit the spiritual and cultural center known for the Golden Temple.",
        festivals: ["Baisakhi", "Diwali", "Guru Nanak Jayanti"],
        images: ["amritsar1.jpg", "amritsar2.jpg", "amritsar3.jpg"]
    },
    {
        name: "Rajkot",
        description: "Experience the vibrant culture, traditional handicrafts, and delicious cuisine.",
        festivals: ["Navratri", "Janmashtami", "Diwali"],
        images: ["rajkot1.jpg", "rajkot2.jpg", "rajkot3.jpg"]
    },
    {
        name: "Srinagar",
        description: "Discover the beauty of Dal Lake, houseboats, and Mughal gardens in the 'Paradise on Earth.'",
        festivals: ["Tulip Festival", "Eid", "Diwali"],
        images: ["srinagar1.jpg", "srinagar2.jpg", "srinagar3.jpg"]
    },
    {
        name: "Mysuru",
        description: "Witness the grandeur of the Dasara festival and explore the historical landmarks.",
        festivals: ["Dasara", "Diwali", "Navratri"],
        images: ["mysuru1.jpg", "mysuru2.jpg", "mysuru3.jpg"]
    },
    {
        name: "Kanyakumari",
        description: "Experience the confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean.",
        festivals: ["Chaitra Purnima", "Diwali", "Pongal"],
        images: ["kanyakumari1.jpg", "kanyakumari2.jpg", "kanyakumari3.jpg"]
    },
    {
        name: "Lucknow",
        description: "Explore the 'City of Nawabs' known for its architectural wonders and rich history.",
        festivals: ["Lucknow Mahotsav", "Diwali", "Eid"],
        images: ["lucknow1.jpg", "lucknow2.jpg", "lucknow3.jpg"]
    },
    {
        name: "Jaisalmer",
        description: "Experience the magic of the golden sand dunes and the majestic Jaisalmer Fort.",
        festivals: ["Desert Festival", "Diwali", "Holi"],
        images: ["jaisalmer1.jpg", "jaisalmer2.jpg", "jaisalmer3.jpg"]
    },
    {
        name: "Nainital",
        description: "Escape to the 'City of Lakes' surrounded by mountains and lush greenery.",
        festivals: ["Nanda Devi Festival", "Diwali", "Christmas"],
        images: ["nainital1.jpg", "nainital2.jpg", "nainital3.jpg"]
    },
    {
        name: "Bhopal",
        description: "Explore the city's historical monuments, lakes, and vibrant culture.",
        festivals: ["Diwali", "Navratri", "Eid"],
        images: ["bhopal1.jpg", "bhopal2.jpg", "bhopal3.jpg"]
    },
    {
        name: "Madurai",
        description: "Visit the ancient city known for its temples, cultural festivals, and traditions.",
        festivals: ["Chithirai Festival", "Diwali", "Pongal"],
        images: ["madurai1.jpg", "madurai2.jpg", "madurai3.jpg"]
    },
    {
        name: "Gangtok",
        description: "Explore the picturesque landscapes and Buddhist monasteries in the capital of Sikkim.",
        festivals: ["Losar", "Saga Dawa", "Diwali"],
        images: ["gangtok1.jpg", "gangtok2.jpg", "gangtok3.jpg"]
    },
    {
        name: "Trivandrum",
        description: "Discover the cultural richness and natural beauty of the southernmost tip of India.",
        festivals: ["Onam", "Attukal Pongala", "Diwali"],
        images: ["trivandrum1.jpg", "trivandrum2.jpg", "trivandrum3.jpg"]
    },
    {
        name: "Puri",
        description: "Visit the pilgrimage city known for the Jagannath Temple and the Rath Yatra festival.",
        festivals: ["Rath Yatra", "Diwali", "Holi"],
        images: ["puri1.jpg", "puri2.jpg", "puri3.jpg"]
    },
    // Add more tourist places as needed
    // ...
];


        function createTouristCard(place) {
            const card = document.createElement("div");
            card.classList.add("tourist-card");

            const imagesContainer = document.createElement("div");
            imagesContainer.classList.add("images-container");

            let currentImageIndex = 0;
            const imgElement = document.createElement("img");
            imgElement.src = place.images[currentImageIndex];
            imgElement.addEventListener("click", function () {
                showDetailsPage(place);
            });

            setInterval(function () {
                currentImageIndex = (currentImageIndex + 1) % place.images.length;
                imgElement.src = place.images[currentImageIndex];
            }, 3000); // Change image every 3 seconds

            imagesContainer.appendChild(imgElement);

            const detailsContainer = document.createElement("div");
            detailsContainer.classList.add("details-container");

            const title = document.createElement("h3");
            title.textContent = place.name;

            const description = document.createElement("p");
            description.textContent = place.description;

            const festivals = document.createElement("p");
            festivals.textContent = "Festivals: " + place.festivals.join(", ");

            detailsContainer.appendChild(title);
            detailsContainer.appendChild(description);
            detailsContainer.appendChild(festivals);

            card.appendChild(imagesContainer);
            card.appendChild(detailsContainer);

            card.addEventListener("mouseenter", function () {
                detailsContainer.classList.add("show");
            });

            card.addEventListener("mouseleave", function () {
                detailsContainer.classList.remove("show");
            });

            return card;
        }

        function initializePage() {
            const placesGrid = document.querySelector(".places-grid");

            touristPlaces.forEach(place => {
                const card = createTouristCard(place);
                placesGrid.appendChild(card);
            });
        }

        function showDetailsPage(place) {
            const detailsPage = document.createElement("div");
            detailsPage.classList.add("details-page");

            const detailsContent = document.createElement("div");
            detailsContent.classList.add("details-page-content");

            const closeBtn = document.createElement("span");
            closeBtn.classList.add("close-button");
            closeBtn.innerHTML = "&times;";
            closeBtn.addEventListener("click", function () {
                detailsPage.style.display = "none";
            });

            const title = document.createElement("h2");
            title.textContent = place.name;

            const description = document.createElement("p");
            description.textContent = place.description;

            const festivals = document.createElement("p");
            festivals.textContent = "Festivals: " + place.festivals.join(", ");

            detailsContent.appendChild(closeBtn);
            detailsContent.appendChild(title);
            detailsContent.appendChild(description);
            detailsContent.appendChild(festivals);

            detailsPage.appendChild(detailsContent);
            document.body.appendChild(detailsPage);

            detailsPage.style.display = "flex";
        }

        initializePage();