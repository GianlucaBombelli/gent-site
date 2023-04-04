import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProdottiserviceService } from 'src/app/servizi/prodottiservice.service';

@Component({
  selector: 'app-vend-prod',
  templateUrl: './vend-prod.component.html',
  styleUrls: ['./vend-prod.component.css']
})
export class VendProdComponent implements OnInit {
  id: number
  vendita: any

  constructor(private ProdottiService: ProdottiserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')
      this.vendita = this.ProdottiService.getVendita(this.id)
    })
  }

}
