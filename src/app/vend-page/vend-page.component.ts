import { Component, OnInit } from '@angular/core';
import { ProdottiserviceService } from '../servizi/prodottiservice.service';

@Component({
  selector: 'app-vend-page',
  templateUrl: './vend-page.component.html',
  styleUrls: ['./vend-page.component.css']
})
export class VendPageComponent implements OnInit {
  vendite: any

  constructor(private ProdottiService: ProdottiserviceService) { }

  ngOnInit(): void {
    this.vendite = this.ProdottiService.getVendite()
  }

}
