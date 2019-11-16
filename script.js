//tableau de produits
var produits = [{ "category": "slips", "index": "0", "link": "img/im1.jpeg", "name": "Slip1", "price": 10.0, "quantity": 0, "description": "..." },
{ "category": "slips", "index": "1", "link": "img/images-4.jpeg", "name": "Slip1", "price": 40.0, "quantity": 0, "description": "...." },
{ "category": "slips", "index": "2", "link": "img/images-5.jpeg", "name": "Slip2", "price": 100.0, "quantity": 0, "description": "...." },
{ "category": "slips", "index": "3", "link": "img/images-6.jpeg", "name": "Slip3", "price": 25.0, "quantity": 0, "description": "...." },
{ "category": "slips", "index": "4", "link": "img/img-slip.jpeg", "name": "Slip4", "price": 25.0, "quantity": 0, "description": "...." },
{ "category": "slips", "index": "5", "link": "img/img-slip1.jpeg", "name": "Slip5", "price": 35.0, "quantity": 0, "description": "...." },
{ "category": "slips", "index": "6", "link": "img/img-slip.jpeg", "name": "Slip6", "price": 20.0, "quantity": 0, "description": "...." },
{ "category": "slips", "index": "7", "link": "img/images-14.jpeg", "name": "Slip7", "price": 10.0, "quantity": 0, "description": "...." },
{ "category": "slips", "index": "8", "link": "img/images-15.jpeg", "name": "Slip8", "price": 30, "quantity": 0, "description": "...." },
{ "category": "chemises", "index": "9", "link": "img/images-7.jpeg", "name": "Chemise 1", "price": 300.0, "quantity": 0, "description": "..." },
{ "category": "chemises", "index": "10", "link": "img/images-8.jpeg", "name": "Chemise 2", "price": 200.0, "quantity": 0, "description": "..." },
{ "category": "chemises", "index": "11", "link": "img/images-9.jpeg", "name": "Chemise 3", "price": 100.0, "quantity": 0, "description": "..." },
{ "category": "chemises", "index": "12", "link": "img/images-10.jpeg", "name": "Chemise 4", "price": 150.0, "quantity": 0, "description": "..." },
{ "category": "chemises", "index": "13", "link": "img/images-11.jpeg", "name": "Chemise 5", "price": 250.0, "quantity": 0, "description": "..." },
{ "category": "chemises", "index": "14", "link": "img/images-12.jpeg", "name": "Chemise 6", "price": 350.0, "quantity": 0, "description": "..." },
{ "category": "chemises", "index": "15", "link": "img/images-13.jpeg", "name": "Chemise 7", "price": 400.0, "quantity": 0, "description": "..." },
{ "category": "chemises", "index": "16", "link": "img/images-13.jpeg", "name": "Chemise 9", "price": 300.0, "quantity": 0, "description": "..." },
{ "category": "chemises", "index": "17", "link": "img/im_chemise1.jpeg", "name": "Chemise 10", "price": 300.0, "quantity": 0, "description": "..." },
{ "category": "chemises", "index": "18", "link": "img/im_chemise2.jpeg", "name": "Chemise 11", "price": 100.0, "quantity": 0, "description": "...." },
{ "category": "chemises", "index": "19", "link": "img/im_chemise3.jpeg", "name": "Chemise 12", "price": 250.0, "quantity": 0, "description": "...." },
{ "category": "pantalons", "index": "20", "link": "img/im_pant1.jpeg", "name": "Pantalon 1", "price": 310.0, "quantity": 0, "description": "..." },
{ "category": "pantalons", "index": "21", "link": "img/im_pant2.jpeg", "name": "Pantalon 2", "price": 100.0, "quantity": 0, "description": "...." },
{ "category": "pantalons", "index": "22", "link": "img/im_pant3.jpeg", "name": "Pantalon 3", "price": 250.0, "quantity": 0, "description": "...." },
{ "category": "pantalons", "index": "23", "link": "img/images-20.jpeg", "name": "Pantalon 4", "price": 150.0, "quantity": 0, "description": "...." },
{ "category": "pantalons", "index": "24", "link": "img/images-19.jpeg", "name": "Pantalon 5", "price": 450.0, "quantity": 0, "description": "...." },
{ "category": "pantalons", "index": "25", "link": "img/images-18.jpeg", "name": "Pantalon 6", "price": 350.0, "quantity": 0, "description": "...." },
{ "category": "pantalons", "index": "26", "link": "img/images-17.jpeg", "name": "Pantalon 7", "price": 150.0, "quantity": 0, "description": "...." },
{ "category": "pantalons", "index": "27", "link": "img/images-16.jpeg", "name": "Pantalon 8", "price": 410.0, "quantity": 0, "description": "...." },
{ "category": "pulls", "index": "28", "link": "img/images-34.jpeg", "name": "Pulls 1", "price": 300.0, "quantity": 0, "description": "..." },
{ "category": "pulls", "index": "29", "link": "img/images-33.jpeg", "name": "Pulls 2", "price": 400.0, "quantity": 0, "description": "..." },
{ "category": "pulls", "index": "30", "link": "img/images-32.jpeg", "name": "Pulls 3", "price": 350.0, "quantity": 0, "description": "..." },
{ "category": "pulls", "index": "31", "link": "img/images-31.jpeg", "name": "Pulls 4", "price": 450.0, "quantity": 0, "description": "..." },
{ "category": "pulls", "index": "32", "link": "img/images-30.jpeg", "name": "Pulls 5", "price": 500.0, "quantity": 0, "description": "..." },
{ "category": "pulls", "index": "33", "link": "img/images-29.jpeg", "name": "Pulls 6", "price": 100.0, "quantity": 0, "description": "..." },
{ "category": "pulls", "index": "34", "link": "img/images-28.jpeg", "name": "Pulls 7", "price": 200.0, "quantity": 0, "description": "..." },
{ "category": "pulls", "index": "35", "link": "img/images-27.jpeg", "name": "Pulls 9", "price": 320.0, "quantity": 0, "description": "..." },
{ "category": "pulls", "index": "36", "link": "img/images-26.jpeg", "name": "Pulls 10", "price": 230.0, "quantity": 0, "description": "..." },
{ "category": "chaussettes", "index": "37", "link": "img/images-21.jpeg", "name": "Chaussettes 1", "price": 30.0, "quantity": 0, "description": "..." },
{ "category": "chaussettes", "index": "38", "link": "img/images-22.jpeg", "name": "Chaussettes 2", "price": 15.0, "quantity": 0, "description": "..." },
{ "category": "chaussettes", "index": "39", "link": "img/images-23.jpeg", "name": "Chaussettes 3", "price": 30.0, "quantity": 0, "description": "..." },
{ "category": "chaussettes", "index": "40", "link": "img/images-24.jpeg", "name": "Chaussettes 4", "price": 30.0, "quantity": 0, "description": "..." },
{ "category": "chaussettes", "index": "41", "link": "img/images-25.jpeg", "name": "Chaussettes  5", "price": 30.0, "quantity": 0, "description": "..." },
{ "category": "chaussettes", "index": "42", "link": "img/images-100.jpeg", "name": "Chaussettes 6", "price": 30.0, "quantity": 0, "description": "..." },
{ "category": "chaussettes", "index": "43", "link": "img/images-101.jpeg", "name": "Chaussettes 7", "price": 10.0, "quantity": 0, "description": "..." },
{ "category": "chaussettes", "index": "44", "link": "img/images-102.jpeg", "name": "Chaussettes 8", "price": 20.0, "quantity": 0, "description": "..." },
{ "category": "chaussures", "index": "45", "link": "img/chauss-1.jpeg", "name": "Chaussures 1", "price": 200.0, "quantity": 0, "description": "..." },
{ "category": "chaussures", "index": "46", "link": "img/chauss-2.jpeg", "name": "Chaussures 2", "price": 300.0, "quantity": 0, "description": "..." },
{ "category": "chaussures", "index": "47", "link": "img/chauss-3.jpeg", "name": "Chaussures 3", "price": 400.0, "quantity": 0, "description": "..." },
{ "category": "chaussures", "index": "48", "link": "img/chauss-4.jpeg", "name": "Chaussures 4", "price": 500.0, "quantity": 0, "description": "..." },
{ "category": "chaussures", "index": "49", "link": "img/chauss-5.jpeg", "name": "Chaussures 5", "price": 250.0, "quantity": 0, "description": "..." },
{ "category": "chaussures", "index": "50", "link": "img/chauss-6.jpeg", "name": "Chaussures 6", "price": 150.0, "quantity": 0, "description": "..." },
{ "category": "chaussures", "index": "51", "link": "img/chauss-7.jpeg", "name": "Chaussures 7", "price": 120.0, "quantity": 0, "description": "..." },
{ "category": "chaussures", "index": "52", "link": "img/chauss-8.jpeg", "name": "Chaussures 8", "price": 90.0, "quantity": 0, "description": "..." },

];

// DECLARATIONS
var bouton = document.querySelector("button")
var table = document.querySelector("table")
var categories = document.querySelectorAll(".categorie")
var main = document.querySelector('#main')
var tab_produits = []
var tab_produits_final = []
var price_range = document.querySelector('#price_range')
var checked_categories = document.querySelectorAll('.check_cat')
var price_range = 400;
var table = document.querySelector("table");
var right = document.querySelector("#right");
var logo_panier = document.querySelector('#logo_panier')
var open = false
var tablo_pdf = []




// CARD 
function myCard(index, img_src, nom, prix, descriptif) {

    var card = document.createElement('div');
    card.setAttribute("class", "card");
    card.setAttribute("id", index);
    var img = document.createElement('img');
    img.setAttribute("src", img_src);
    img.setAttribute("alt", nom);
    var div_nom = document.createElement('div');
    div_nom.setAttribute('class', 'card_nom')
    div_nom.textContent = nom;
    var div_prix = document.createElement('div');
    div_prix.setAttribute('textAlign', 'right')
    div_prix.setAttribute('class', 'card_prix')
    div_prix.innerHTML = prix + " $";
    var div_buttons = document.createElement('div');


    var button1 = document.createElement("button");
    button1.setAttribute("class", "button1");
    button1.setAttribute("onclick", " appuibutton1(event)");
    var div = document.createElement("div");
    div.textContent="-";
    div.setAttribute("class", "text_but");
    button1.appendChild(div)
    div_buttons.appendChild(button1);

    var button2 = document.createElement("button")
    button2.setAttribute("class", "button2");
    button2.setAttribute("onclick", " appuibutton2(event)");
    var div = document.createElement("div");
    div.textContent="+";
    div.setAttribute("class", "text_but");
    button2.appendChild(div)
    div_buttons.appendChild(button2)


    card.appendChild(img);
    card.appendChild(div_nom);
    card.appendChild(div_prix);
    card.appendChild(div_buttons);

    main.appendChild(card)

}

////////////////////////////////////////////////////////////////////////////////////
/////////////////////    panneau droite : panier + .... /////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// Ligne tableau de panier de droite
function myLine(index, quantity, link, name, price) {
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.textContent = quantity;
    tr.appendChild(th);
    var td = document.createElement("td")
    var mini = document.createElement('img')
    mini.setAttribute('src', link)
    td.appendChild(mini);
    tr.appendChild(td);
    var td = document.createElement("td")
    td.textContent = name;
    tr.appendChild(td);
    var td = document.createElement("td")
    td.innerHTML = price * quantity + " $";
    tr.appendChild(td);
    var td = document.createElement("td");
    td.setAttribute("id", "x" + index);
    td.setAttribute("onclick", " suppr(event)");
    td.textContent = "X";
    td.style.color = 'red';
    td.style.fontWeight = 'bold';
    td.style.fontSize = '12px';
    tr.appendChild(td);
    table.appendChild(tr);

}

function suppr(event) {
    console.log(event.target.getAttribute('id').substr(1))
    produits[event.target.getAttribute('id').substr(1)].quantity = 0
    table.innerHTML = ""
    displayTable(produits)
}
function displayTable(produits) {
    var nb = 0
    var sum = 0
    var c = 0
    var tablo_pdf = []
    for (var i = 0; i < produits.length; i++) {
        if (produits[i].quantity > 0) {
            c += 1
            myLine(produits[i].index, produits[i].quantity, produits[i].link, produits[i].name, produits[i].price);
            sum += produits[i].quantity * produits[i].price
            nb += produits[i].quantity
            tablo_pdf.push(i)

        }
    }
    if (c > 0) {
        var tr = document.createElement("tr");
        tr.setAttribute("class", "table-dark");
        var th = document.createElement("td");
        th.setAttribute("scope", "row");
        th.setAttribute("colspan", "3");
        th.textContent = "Total";
        tr.appendChild(th);
        var td = document.createElement("td")
        td.setAttribute("colspan", "2");
        td.innerHTML = sum + " $";
        tr.appendChild(td);
        table.appendChild(tr);


    }
    document.querySelector('#logo_panier_nb').textContent = nb;

}
displayTable(produits)

function appuibutton2(e) {
    var ind = e.target.parentElement.parentElement.parentElement.getAttribute("id");
    produits[ind].quantity += 1
    table.innerHTML = ""
    displayTable(produits)

}



function appuibutton1(e) {
    var ind = e.target.parentElement.parentElement.parentElement.getAttribute("id");
    if (produits[ind].quantity > 0) { produits[ind].quantity -= 1 }
    table.innerHTML = ""
    displayTable(produits)
}




///////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Panneau gauche : affichage              /////////////////////
///////////////////////////////////////////////////////////////////////////////////////
var tab_random = []

function selectProduit() {
    tab_random = []
    tab_produits = []
    main.innerHTML = ""

    for (var i = 0; i < checked_categories.length; i++) {// pour tous les boutons
        if (checked_categories[i].checked) {    // si bouton  d'indice i chéqué
            for (var j = 0; j < produits.length; j++) {  // pour TOUS les produits 
                if (produits[j].category == checked_categories[i].getAttribute("id")) {  // si catégorie du produit correspond à l'ID du bouton d'indice chéqué
                    price_range = document.querySelector("#price_range").value;
                    var dis_price_sel = document.querySelector("#dis_price_sel")
                    dis_price_sel.textContent= price_range;
                    dis_price_sel.style.marginLeft= 190*price_range/500+"px";
                    dis_price_sel.style.color='red';
                    dis_price_sel.style.fontWeight='bold'
                    if (produits[j].price <= price_range) {
                        tab_random.push(j)
                    }
                }

            }
        }
    }

    tab_random.sort(function (a, b) { return Math.random() - 0.5; })

    for (var i = 0; i < tab_random.length; i++) {
        j = tab_random[i]
        myCard(produits[j].index, produits[j].link, produits[j].name, produits[j].price, produits[j].description)

    }

}

selectProduit()



///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////   Logo Panier                          /////////////////////
///////////////////////////////////////////////////////////////////////////////////////

function showhide() {

    if (!open) {
        right.style.display='none';
        right.style.width = '30%';
        right.style.left = '70%';
        right.style.padding = '20px';
        right.style.display = 'block';
        right.style.position = 'fixed';
        right.style.scrollBehavior = 'auto';
        right.style.overflow = 'auto';
        right.style.display='block';
        right.style.overflow='scroll';

    }
    else {
        right.style.width = '0%';
        right.style.left = '100%';
        right.style.padding = '0px';
        right.style.display = 'none';

    }
}



logo_panier.onclick = function () {
    right.style.transition = 'all 1.5s ease';
    showhide()
    open = !open
}







///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////   Facture      PDF                     /////////////////////
///////////////////////////////////////////////////////////////////////////////////////






document.querySelector("#pdf_facture").onclick = function () {
    tablo_pdf = produits.filter(x=>x.quantity !=0)
    var doc = new jsPDF()  
    var sum = 0
    doc.setTextColor(0, 0, 255)
    doc.setFontType('bold')
    doc.setFontSize(30)
    doc.text('FACTURE', 20, 30)
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(20)
    doc.text('Dev Institute', 20, 40)
    doc.setFontType('normal')
    doc.setFontSize(15)
    doc.text('35 Ahad Aham', 20, 50)
    doc.text('Tel Aviv', 20, 60)


    doc.setFontType('bold')
    doc.setFontSize(15)
    doc.setTextColor(0, 0, 255)
    doc.text('QUANTITY', 30, 80)
    doc.text('DESIGNATION', 80, 80)
    doc.text('PRICE', 150, 80)

    doc.setDrawColor(255, 0, 0)
    doc.setLineWidth(0.5)
    doc.line(30, 82, 180, 82)
    doc.line(30, 72, 180, 72)
    doc.setTextColor(0, 0, 0)


    
    for(var i=0; i<tablo_pdf.length; i++){
        doc.text((tablo_pdf[i].quantity).toString(), 40, 90+i*15)
        doc.text((tablo_pdf[i].name).toString(), 80, 90+i*15)
        doc.text((tablo_pdf[i].price+' $').toString(), 150, 90+i*15)
        sum += tablo_pdf[i].quantity * tablo_pdf[i].price
        }
        doc.line(30, 80+i*15, 180, 80+i*15)
        doc.text("TOTAL:" ,100, 90+i*15)
        doc.text((sum).toString()+ " $", 150, 90+i*15)



        doc.save('a4.pdf')




     
}

