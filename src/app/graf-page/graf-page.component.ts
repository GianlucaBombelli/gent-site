import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdottiserviceService } from '../servizi/prodottiservice.service';

@Component({
  selector: 'app-graf-page',
  templateUrl: './graf-page.component.html',
  styleUrls: ['./graf-page.component.css']
})
export class GrafPageComponent implements OnInit {
  prodotti: any

  constructor(private ProdottiService: ProdottiserviceService) { }

  ngOnInit(): void {
    this.prodotti = this.ProdottiService.getProdotti()
  }

}
