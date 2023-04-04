import { Component, OnInit } from '@angular/core';
import { ProdottiserviceService } from '../servizi/prodottiservice.service';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  prodotti: any
  prodotto: any
  vendite: any
  vendita: any
  cartucce: any
  catuccia: any


  constructor(private ProdottiService: ProdottiserviceService) { }

  ngOnInit(): void {
    this.prodotti = this.ProdottiService.getProdotti()
    this.vendite = this.ProdottiService.getVendite()
    this.cartucce = this.ProdottiService.getCartucce()
  }
}
