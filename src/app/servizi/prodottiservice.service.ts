import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdottiserviceService {
  prodotti = [
    {nome : "Volantini invito",
     image: 'assets/prodotti/volantino.png',
      alt: "image not load",
      },
    {nome : "Packaging",
    image: 'assets/prodotti/packaging.png',
     alt: "image not load"},
     {nome : "Gadget Aziendali",
     image: 'assets/prodotti/gadget.png',
      alt: "image not load",
      },
     {nome : "Zainetti",
    image: 'assets/prodotti/zaini.jpg',
     alt: "image not load"},
    {nome : "Felpe",
    image: 'assets/prodotti/felpa.png',
     alt: "image not load"},
    {nome : "Adesivi",
    image: 'assets/prodotti/etichette.jpg',
     alt: "image not load"},
     {nome : "Camici",
     image: 'assets/prodotti/camici.jpg',
     alt: "image not load"},
     {nome : "T-shirt",
     image: 'assets/prodotti/T-SHIRT.png',
     alt: "image not load"},
     {nome : "Polo",
     image: 'assets/prodotti/polo.jpg',
     alt: "image not load"},
     {nome : "Scatole da imballaggio",
     image: 'assets/prodotti/scatole-imb.jpg',
      alt: "image not load",
      },

  ]

  vendite = [
    {nome : "ASSO 3",
   image: 'assets/vendite/ASSO3.jpg',
    alt: "image not load",
    },
    {nome : "JSMART RT",
    image: 'assets/vendite/j_smart_3.png',
     alt: "image not load"},
     {nome : "BIG-3",
    image: 'assets/vendite/Big3.png',
     alt: "image not load"},
     {nome : "IPAS CU-SP1",
     image: 'assets/vendite/IPAD-CU-SP1.JPG',
     alt: "image not load"},
     {nome : "PHILIPS HS1",
     image: 'assets/vendite/PHILIPS.JPG',
     alt: "image not load"},
     {nome : "MX-4051",
     image: 'assets/vendite/MX-4051.png',
     alt: "image not load"},
     {nome : "MX-B455W",
     image: 'assets/vendite/MX-B455W.png',
     alt: "image not load"},
     {nome : "MX-C304W",
     image: 'assets/vendite/MX-C304W.png',
     alt: "image not load"},
     {nome : "MX-C300W",
     image: 'assets/vendite/MX-C300W.jpg',
     alt: "image not load"},
     {nome : "Epson 7900",
     image: 'assets/vendite/epson-7900.jpg',
     alt: "image not load"},
     {nome : "MX-3114N",
     image: 'assets/vendite/MX-3114N.png',
     alt: "image not load"},
     {nome : "MX-2630N",
     image: 'assets/vendite/MX-2630N.png',
     alt: "image not load"},
     {nome : "TECNO-GAZ TECNOHEART PLUS",
     image: 'assets/vendite/TECNO-GAZ.JPG',
     alt: "image not load"},

  ]

  cartucce = [
    {nome:"HP 81A CF281A",
    image:'assets/cartucce/HP_81A.jpeg',
    alt:"image not load"},
    {nome:"HP 64A CC634A",
    image:'assets/cartucce/cc364a.png',
    alt:"image not load"},
    {nome:"HP 308A Q2670A",
    image:'assets/cartucce/hp_308.jpg',
    alt:"image not load"},
    {nome:"HP 305X CE410X",
    image:'assets/cartucce/305X.png',
    alt:"image not load"},
    {nome:"HP 35A CB435A",
    image:'assets/cartucce/HP-35A.png',
    alt:"image not load"},
    {nome:"HP 05X CE505X",
    image:'assets/cartucce/hp_05x.jpg',
    alt:"image not load"},
    {nome:"Sharp Toner",
    image:'assets/cartucce/sharp-toner.png',
    alt:"image not load"},
    {nome:"Xerox Toner",
    image:'assets/cartucce/xerox-toner.jpg',
    alt:"image not load"},
    {nome:"Brother TN-3230",
    image:'assets/cartucce/TN-3230.png',
    alt:"image not load"},
    {nome:"Assistenza",
    image:'assets/cartucce/TONER_ASSISTENZA.jpg',
    alt:"image not load"},
  ]

  constructor() { }

  getProdotti(){
    return this.prodotti
  }

  getProdotto(index: number) {
    return this.prodotti[index]
  }

  getVendite(){
    return this.vendite
  }

  getVendita(index: number){
    return this.vendite[index]
  }

  getCartucce(){
    return this.cartucce
  }

  getCartuccia(index: number){
    return this.cartucce[index]
  }
}
