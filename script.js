function getCookie(name) {
    name = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');

    for(let i = 0; i <cookieArray.length; i++){
        let cookie = cookieArray[i];
        while(cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }

        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return "";
}

function setCookie(name, value) {
    const numDays = 365;
    const d = new Date();

    d.setTime(d.getTime() + (numDays * 24 * 60 * 60 * 1000));
    
    let expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function toggleNavbar(){
    $("#nav-btn").children().toggleClass("opened");
    $(".nav-wrapper").toggleClass("opened");
    $("#main-nav").toggleClass("opened");
    // $("#header-overlay").toggleClass("opened");
}

let language = "english";

const frenchNavBar = [
    "Caractéristiques",
    "Détails",
    "Galerie",
    "Contactez-Nous",
    "<i class='fa-solid fa-globe'></i> English",
    "Appartement <br> Elégant et Moderne",
    "Quotidien: <span>$250</span> <br>Mensuel <span class='save'>(économisez 53%)</span>: <span>$3500</span>",
    "Contactez-Nous"
];

const frenchHighlights = [
    "Surface",
    "Chambres",
    "Toilettes",
    "Électricité",
    "Parking",
    "HD TV"
];

const frenchFeatures = [
    "Caractéristiques.",
    "Cet appartement tout neuf de 300 mètres carrés est spacieux, lumineux et aéré, offrant une abondance de lumière naturelle et une décoration moderne qui vous permettra de vous sentir chez vous.",
    "Vue Fabuleuse",
    "Au Bord de la Mer",
    "Zone Privée",
    "Proche de Tout",
    "Notre appartement fantastique avec une excellente vue sur la mer tout le long de la journée.",
    "L'appartement est situé dans le centre de BEYROUTH, à deux minutes à pied de la plage.",
    "Il dispose d'une immense piscine privée et d'un grand parking fermé gratuit.",
    "Il y a de nombreux bars et restaurants, des supermarchés, un marché de la ville, le tout à quelques minutes à pied du centre.",
];

const frenchDetails = [
    "Détails",
    "Cette maison est un refuge idéal pour un groupe de 7 ou 8 personnes, offrant amplement d'espace et de confort. Elle offre une vue incroyable sur la mer, permettant aux invités de profiter de paysages à couper le souffle. De plus, la maison est entièrement équipée avec toutes les commodités nécessaires pour garantir un séjour pratique. Les invités peuvent profiter d'un accès ininterrompu à l'électricité 24h/24 et 7j/7, d'une connexion Wi-Fi fiable, d'eau chaude pour une expérience rafraîchissante, d'un sèche-cheveux pour les besoins de toilette personnelle, ainsi que du confort du chauffage central et de la climatisation dans toute la maison.",
    "Chambre",
    "Information",
    "Chambre à Coucher",
    "Dans cette maison, vous trouverez trois chambres, chacune avec sa propre salle de bains attenante. Une des chambres est dotée d'un lit king-size spacieux, tandis que les deux autres chambres disposent chacune de deux lits standards.",
    "Salles de Bains",
    "Cette maison compte un total de cinq salles de bains, chacune équipée de savon, de shampoing et de tous les produits de nettoyage nécessaires.",
    "Salons",
    "La maison dispose de deux vastes salons, tous deux inondés de lumière naturelle, créant une ambiance lumineuse et accueillante. Chaque salon est équipé d'une télévision LG HDTV pouvant être connectée à des services de streaming populaires tels que Netflix et Disney. De plus, vous trouverez deux canapés confortables pouvant être facilement convertis en lits.",
    "Cuisine",
    "La cuisine est entièrement équipée de toutes les commodités essentielles, y compris une table à manger, un congélateur, une cuisinière à induction, une bouilloire électrique, un réfrigérateur et des verres à vin.",
    "Buanderie",
    "La buanderie est dédiée aux tâches de nettoyage et est équipée d'une machine à laver, d'un lave-vaisselle et de toilettes. Elle offre la commodité de gérer le linge et la vaisselle dans un espace centralisé.",
    "Sous-Sol",
    "Le sous-sol de cette maison dispose d'une grande pièce réservée au stationnement, offrant un espace suffisant pour accueillir jusqu'à trois véhicules. De plus, cet espace polyvalent peut servir d'espace de stockage, vous permettant de ranger et d'organiser facilement vos affaires."
];

const frenchView = [
    "Vous cherchez une vue imprenable?",
    "Contactez-Nous"
];

const frenchGallery = [
    "Galerie",
    "Voir",
    "Salon 1",
    "Salon 1",
    "Salon 1",
    "Salon 1",
    "Salon 1",
    "Salon 2",
    "Salon 2",
    "Chambre à Coucher 1",
    "Chambre à Coucher 1",
    "Chambre à Coucher 2",
    "Chambre à Coucher 2",
    "Chambre à Coucher 3",
    "Chambre à Coucher 3",
    "Cuisine",
    "Cuisine",
    "Cuisine",
    "Salles de Bains",
    "Salles de Bains",
    "Salles de Bains",
    "Salles de Bains",
    "Salles de Bains"
];

const frenchContactUs = [
    "Contactez-Nous",
    "Beirut, Tour Garden City, en face du Burger King à Rawshe, à côté de l'hôtel Lancaster, 2ème étage.",
    "<i class='fa-solid fa-location-dot'></i> Addresse",
    "<i class='fa-solid fa-phone'></i> Téléphone",
    "<i class='fa-solid fa-envelope'></i> Adresse e-mail"
];
 
const englishNavBar = [
    "Features",
    "Details",
    "Gallery",
    "Contact Us",
    "<i class='fa-solid fa-globe'></i> Français",
    "Modern <br> Stylish Appartment",
    "Daily: <span>$250</span> <br>Monthly <span class='save'>(save 53%)</span>: <span>$3500</span>",
    "Contact Us"
];

const englishHighlights = [
    "Area", 
    "Bedrooms",
    "Bathrooms",
    "Electricity",
    "Parking",
    "HD TV"
];

const englishFeatures = [
    "Main Features",
    "This brand new 300-square-meter apartment is spacious, bright, and airy, offering plenty of natural light and modern decoration to make you feel at home.",
    "Fabulous View",
    "By The Sea",
    "Private Area",
    "Close to Everything",
    "Our fantastic apartment with an excellent sea view throughout the day.",
    "The apartment is located in the center of BEIRUT, a two-minute walk from the beach.",
    "It features a huge private pool and ample free enclosed parking.",
    "There are numerous bars and restaurants, supermarkets, a city market, all within a few minutes' walk from the center."
];

const englishDetails = [
    "Property Details",
    "This house is an ideal retreat for a group of 7 or 8 individuals, providing ample space and comfort. It offers an incredible sea view, allowing guests to indulge in breathtaking scenery. Moreover, the house is fully equipped with all the necessary logistics to ensure a convenient stay. Guests can enjoy uninterrupted access to 24/7 electricity, reliable Wi-Fi connectivity, hot water for a refreshing experience, a hair dryer for personal grooming needs, and the comfort of central heating and air conditioning (AC) throughout the house.",
    "Room", 
    "Information",
    "Bedrooms",
    "In this house, you will find three bedrooms, each with its own dedicated toilet. One of the bedrooms features a spacious king-size bed, while the other two bedrooms have two standard beds each.",
    "Bathrooms",
    "This house boasts a total of five bathrooms, each equipped with soap, shampoo, and all the necessary cleaning products.",
    "Living Rooms",
    "The house boasts two expansive living rooms, both flooded with natural light, creating a bright and welcoming ambiance. Each living room is equipped with an LG HDTV that can be connected to popular streaming services like Netflix and Disney. Additionally, you'll find two comfortable couches that can be easily converted into beds.",
    "Kitchen",
    "The kitchen is fully equipped with all the essential amenities, including a dining table, freezer, induction stove, electric kettle, refrigerator, and wine glasses.",
    "Laundry Room",
    "The laundry room, is dedicated to cleaning purposes and is equipped with a washing machine, a dishwasher, and a toilet. It provides the convenience of handling laundry and dishwashing tasks in one centralized space.",
    "Basement",
    "The underground basement of this house features a spacious room designated for parking, providing ample space to accommodate up to three vehicles. Additionally, this versatile area can serve as a storage facility, allowing you to conveniently store and organize your belongings."
];

const englishView = [
    "Looking for an amazing view?",
    "Contact Us"
];

const englishGallery = [
    "Gallery",
    "View",
    "Living Room 1",
    "Living Room 1",
    "Living Room 1",
    "Living Room 1",
    "Living Room 1",
    "Living Room 2",
    "Living Room 2",
    "Bedroom 1",
    "Bedroom 1",
    "Bedroom 2",
    "Bedroom 2",
    "Bedroom 3",
    "Bedroom 3",
    "Kitchen",
    "Kitchen",
    "Kitchen",
    "Bathroom",
    "Bathroom",
    "Bathroom",
    "Bathroom",
    "Bathroom",
];

const englishContactUs = [
    "Contact Us",
    "Beirut, Garden City Tower, facing Burger King in Rawshe next to Lancaster Hotel, 2nd floor.",
    "<i class='fa-solid fa-location-dot'></i> Address",
    "<i class='fa-solid fa-phone'></i> Phone Number",
    "<i class='fa-solid fa-envelope'></i> Email Address"
];

function translate(texts){
    $("#main-nav ul li a span").each(function(index){
        $(this).html(texts["navbar"][index]);
    });

    $(".header-text h1").html(texts["navbar"][5]);
    $(".header-text p").html(texts["navbar"][6]);
    $(".header-text a").html(texts["navbar"][7]);

    $(".highlights .highlight-item h3").each(function(index){
        $(this).text(texts["highlights"][index]);
    });

    $(".features .title span").html(texts["features"][0]);
    $(".features > p").html(texts["features"][1]);
    
    $(".feature-item h3").each(function(index){
        $(this).text(texts["features"][index + 2]);
    });

    $(".feature-item p").each(function(index){
        $(this).text(texts["features"][index + 6]);
    });

    $(".details .title span").html(texts["details"][0]);
    $(".details > p").html(texts["details"][1]);

    $(".details table th").each(function(index){
        $(this).text(texts["details"][index + 2]);
    });

    $(".details table td").each(function(index){
        $(this).text(texts["details"][index + 4]);
    });

    $(".section-view h2").html(texts["view"][0]);
    $(".section-view div a").html(texts["view"][1]);

    $(".section-gallery .title span").text(texts["gallery"][0]);

    $(".gallery-item-backdrop span").each(function(index){
        $(this).text(texts["gallery"][1]);
    });

    $(".gallery-item figcaption").each(function(index){
        $(this).text(texts["gallery"][index + 2]);
    });

    $(".gallery-item a").each(function(index){
        $(this).attr("data-title", texts["gallery"][index + 2]);
    });

    $(".section-contactus .title span").text(texts["contactus"][0]);

    $(".contactus h3").each(function(index){
        $(this).html(texts["contactus"][index + 2]);
    });

    $(".contactus h4:first-of-type").each(function(index){
        $(this).text(texts["contactus"][1]);
    });

}

const ENGLISH_LANGUAGE = {
    navbar: englishNavBar, 
    highlights: englishHighlights,
    features: englishFeatures,
    details: englishDetails,
    view: englishView,
    gallery: englishGallery,
    contactus: englishContactUs
};

const FRENCH_LANGUAGE = {
    navbar: frenchNavBar, 
    highlights: frenchHighlights,
    features: frenchFeatures,
    details: frenchDetails,
    view: frenchView,
    gallery: frenchGallery,
    contactus: frenchContactUs
};


$(document).ready(function(){

    // $("body").hide();

    language = getCookie("language") || "english";

    let texts;
    switch(language){
        case "english":
            texts = ENGLISH_LANGUAGE;
            break;

        case "french":
            texts = FRENCH_LANGUAGE;
            break;
    }

    translate(texts);

    // $("body").show();
    
    // $("body").removeClass("d-none");

    $("#translate-btn").click(function(e){
        if(language === "english"){
            language = "french";
            texts = FRENCH_LANGUAGE;
        }
        else {
            language = "english";
            texts = ENGLISH_LANGUAGE;
        }

        setCookie("language", language);
        translate(texts);
        toggleNavbar();
    });

    $("#nav-btn").click(toggleNavbar);

    $(window).resize(function(){
        let width = $(".gallery-images .gallery-item:first-of-type").width();
    
        $(".gallery-images .gallery-item img").css({
            "min-width": width, 
            "min-height": Math.ceil(960 * width / 1280)
        });
        
        if($("#main-nav").hasClass("opened")){
            toggleNavbar();
        }
    });

    // $("#header-overlay").click(function(){
    //     toggleNavbar();
    // });

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 150) {
            $(".nav-wrapper").addClass("dark");
        } else {
            $(".nav-wrapper").removeClass("dark");
        }
    });

    if (window.pageYOffset > 150) {
        $(".nav-wrapper").addClass("dark");
    } else {
        $(".nav-wrapper").removeClass("dark");
    }

    lightbox.option({
        alwaysShowNavOnTouchDevices: true,
        resizeDuration: 100,
        disableScrolling: true,
        wrapAround: true,
        // imageFadeDuration: 200
    });

    $(".gallery-item-backdrop").click(function(){
        $(this).siblings("a").click();
    });

    AOS.init({
        once: true
    });

    $("#up-btn").click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000, function(){
            window.location.hash = "";
        });
    });

    let width = $(".gallery-images .gallery-item:first-of-type").width();
    
    $(".gallery-images .gallery-item img").css({
        "min-width": width, 
        "min-height": Math.ceil(960 * width / 1280)
    });

    $("a[href^='#']").each(function(){

        $(this).click(function(e){
            e.preventDefault();

            if(this.hash === ""){
                return;
            }

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000);

            if(!$(this).hasClass("a-btn")){
                toggleNavbar();
            }
        });

    });

});
