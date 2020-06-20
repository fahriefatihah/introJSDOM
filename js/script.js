var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'],
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]

function dataRow(items) {
    for (var i = 0; i < items.length; i++) {
        var kolom = document.createElement("div")
        kolom.setAttribute("class", "col-lg-4")
        kolom.setAttribute("id", ("listBarang"))
        document.getElementById("shop").appendChild(kolom)

        var kartu = document.createElement("div")
        kartu.setAttribute("class", "card")
        kartu.setAttribute("id", "produk")
        // kartu.style.width = ("18rem")
        kolom.appendChild(kartu)

        var gambar = document.createElement("img")
        gambar.setAttribute("class", "card-img-top")
        gambar.setAttribute("src", ("img/"+items[i][4]))
        gambar.setAttribute("id", "gambarProduk")
        gambar.style.textAlign = "centered"
        gambar.style.objectFit = "cover"
        gambar.style.maxHeight = "190px"
        gambar.style.width = "100%"
        kartu.appendChild(gambar)

        var bodyKartu = document.createElement("div")
        bodyKartu.setAttribute("class", "card-body")
        bodyKartu.setAttribute("id", "dataProduk")
    
        kartu.appendChild(bodyKartu)

        var namaItem = document.createElement("h5")
        namaItem.setAttribute("class", "card-title")
        namaItem.setAttribute("id", "itemName")
        namaItem.innerText = (items[i][1])
        bodyKartu.appendChild(namaItem)

        var deskItem = document.createElement("p")
        deskItem.setAttribute("class", "card-text")
        deskItem.setAttribute("id", "itemDesc")
        deskItem.innerText = (items[i][3])
        bodyKartu.appendChild(deskItem)

        var tombol = document.createElement("a")
        tombol.setAttribute("class", "btn btn-primary")
        tombol.setAttribute("id", "price")
        tombol.innerHTML = ("Rp. " + items[i][2])
        tombol.style.margin = "5px"
        bodyKartu.appendChild(tombol)

        var tombol2 = document.createElement("a")
        tombol2.setAttribute("class", "btn btn-primary")
        tombol2.setAttribute("id", "addCart"+i)
        tombol2.setAttribute("onclick", "onClick("+i+")")
        tombol2.style.backgroundColor = "red"
        tombol2.innerHTML = ("Add to Cart")
        tombol2.style.margin = "5px"
        bodyKartu.appendChild(tombol2)
    }
}

var formItem = document.getElementById("formItem")
var searchItem = document.getElementById("keyword")
formItem.addEventListener("submit", function (e) {
    e.preventDefault()
    let bigItems = []
    for (let i = 0; i < items.length; i++) {
        let c = 0
        for (let j = 0; j < items[i].length; j++) {
            if (items[i][j].toString().toLowerCase().indexOf(searchItem.value.toLowerCase()) != -1) c++
        }
        if (c > 0)
            bigItems.push(items[i]);
    }
    
    dataRow(bigItems);
})
dataRow(items);


function clearItem(){
    var that = document.getElementById('shop');
    that.remove()

    var shop = document.createElement("div")
    shop.setAttribute("class", "row")
    shop.setAttribute("id", "shop")
    var contain = document.getElementsByClassName("container")
    contain[0].appendChild(shop)

    }

//Release 2
var clicks = 0;
var countItem = new Array(items.length).fill(0)

function onClick(n) {
    clicks += 1;
    countItem[n] += 1;
    var cek = document.getElementById("addCart"+n)
    cek.style.backgroundColor = "black"
    cek.innerHTML = ("Add to Cart (" + countItem[n] + ")")
    document.getElementById("totalItem").innerHTML = clicks;
};