import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProdottiserviceService } from 'src/app/servizi/prodottiservice.service';

@Component({
  selector: 'app-graf-prod',
  templateUrl: './graf-prod.component.html',
  styleUrls: ['./graf-prod.component.css']
})
export class GrafProdComponent implements OnInit {
  id: number
  prodotto: any

  constructor(private ProdottiService: ProdottiserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')
      this.prodotto = this.ProdottiService.getProdotto(this.id)
    })
  }

}
