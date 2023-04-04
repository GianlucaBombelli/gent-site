import { Component, OnInit } from '@angular/core';
import { ProdottiserviceService } from '../servizi/prodottiservice.service';

@Component({
  selector: 'app-toner-page',
  templateUrl: './toner-page.component.html',
  styleUrls: ['./toner-page.component.css']
})
export class TonerPageComponent implements OnInit {
  cartucce: any

  constructor(private ProdottiService: ProdottiserviceService) { }

  ngOnInit(): void {
    this.cartucce = this.ProdottiService.getCartucce()
  }

}

