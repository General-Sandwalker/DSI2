import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input('product') product:any;
  
}
