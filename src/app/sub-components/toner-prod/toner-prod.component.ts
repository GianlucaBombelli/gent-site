import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProdottiserviceService } from 'src/app/servizi/prodottiservice.service';

@Component({
  selector: 'app-toner-prod',
  templateUrl: './toner-prod.component.html',
  styleUrls: ['./toner-prod.component.css']
})
export class TonerProdComponent implements OnInit {
  id: number
  cartuccia: any

  constructor(private ProdottiService: ProdottiserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')
      this.cartuccia = this.ProdottiService.getCartuccia(this.id)
    })
  }

}
