//Para que no leas todo el codigo solamente agrega aqui el link de cada pagina html (/categoria-a.html ejemplo)

const ctgOffRoadLink =          "/html/categorias/categoria-offRoad.html" //Link del html de la categoria Off-Road
const ctgDeportivasLink =       "/html/categorias/categoria-deportivas.html" //Link del html de la categoria Deportivas
const ctgDoblePropositoLink =   "/html/categorias/categoria-dobleProposito.html" //Link del html de la categoria Doble proposito
const ctgNakedLink =            "/html/categorias/categoria-naked.html" //Link del html de la categoria Naked

function setupHeaderHoverEvent() {
    const navLinks = document.getElementsByClassName("navLink")
    const header = document.querySelector("header");

    for (const navLink of navLinks){
        navLink.addEventListener("click", ()=>{
            header.classList.add("abajo")

            const categoria = navLink.getAttribute("categoria")
            
            document.getElementById("artImg_1").setAttribute("src", "/img/" + `${categoria}` + "/1.jpg")
            document.getElementById("artImg_2").setAttribute("src", "/img/" + `${categoria}` + "/2.jpg")
            document.getElementById("artImg_3").setAttribute("src", "/img/" + `${categoria}` + "/3.jpg")

            const h2_1 = document.getElementById("artH2_1")
            const h2_2 = document.getElementById("artH2_2")
            const h2_3 = document.getElementById("artH2_3")


            switch (categoria) {
                case "offRoad":
                    h2_1.innerText = "Husqvana FC250"
                    h2_2.innerText = "Kawasaki KX250"
                    h2_3.innerText = "KTM 450 SX_F"
                    document.getElementById("seeMore").setAttribute("href", ctgOffRoadLink)
                    break
                case "deportivas":
                    h2_1.innerText = "Kawasaki H2"
                    h2_2.innerText = "Yamaha R1"
                    h2_3.innerText = "Aprilia RSV4 RR"
                    document.getElementById("seeMore").setAttribute("href", ctgDeportivasLink)
                    break
                case "dobleProposito":
                    h2_1.innerText = "Yamaha Tenere 700"
                    h2_2.innerText = "Bmw GS1200R"
                    h2_3.innerText = "Yamaha Tenere 1200"
                    document.getElementById("seeMore").setAttribute("href", ctgDoblePropositoLink)
                    break
                case "naked":
                    h2_1.innerText = "Kawasaki Z1000"
                    h2_2.innerText = "Yamaha FZ25"
                    h2_3.innerText = "Yamaha MT09"
                    document.getElementById("seeMore").setAttribute("href", ctgNakedLink)
                    break
                default:
                    break;
            }
        })
    }
}

function setupCloseHeaderEvent(){
    const closeHeaderButton = document.getElementById("closeButton")
    const header = document.querySelector("header");

    closeHeaderButton.addEventListener("click", ()=>{
        header.classList.remove("abajo")
    })
}

setupHeaderHoverEvent()
setupCloseHeaderEvent()