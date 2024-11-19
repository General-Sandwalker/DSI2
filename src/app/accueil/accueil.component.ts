import { Component } from '@angular/core';
import { ProduitComponent } from '../produit/produit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [ProduitComponent,CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})

export class AccueilComponent {
  products = [
    {
      name:"Yeezy Boost 350 V2",
      description: "A monochromatic 'Onyx' hue envelops the latest Yeezy Boost 350 V2, the lifestyle runner from adidas and Kanye West. The upper features a dark black Primeknit weave along with rope laces, while a post-dyed monofilament side stripe can be found in a lighter black shade. A full-length Boost unit is encapsulated in a semi-translucent ribbed TPU midsole, while a black rubber outsole rounds out the look.",
      Price: 114.99,
      image: "/public/images/yeezys1.jpg"
    },
    {
      name:"Yeezy Boost 350 V2 'Bone'",
      description: "The adidas Yeezy Boost 350 V2 is treated to a monochromatic makeover. 'Bone' features an ivory Primeknit upper and a matching traditional lace closure. An off-white webbing pull tab at the heel and a see-through monofilament side stripe continue the tonal theme. Branding arrives in the form of a Three-Stripes logo on the interior heel and a Yeezy word mark stamped on the sockliner. A full-length TPU-wrapped Boost midsole provides responsive cushioning.",
      Price: 124.99,
      image: '/public/images/yeezys2.jpg'
    },
    {
      name:"Yeezy Boost 700 'Utility Black' 2019",
      description: "The Yeezy Boost 700 'Utility Black' 2019 brings an elevated two-tone look to its signature construction. The shoe's upper is built with a mesh base, overlaid by suede and smooth leather for support. Finished in black, the bulky midsole continues the look while housing a Boost unit for cushioning. The outsole sports a gum rubber construction for traction and a luxe finish.",
      Price: 199.99,
      image: '/public/images/yeezys3.jpg'
    },
    {
      name:"Yeezy Boost 700 MNVN 'Bright Cyan'",
      description: "The Yeezy Boost 700 MNVM 'Bright Cyan' emerges with a vibrant look. Built with lightweight polyester, the shoe's upper appears in blue, bolstered by no-sew overlays and highlighted by reflective detailing. No-tie bungee laces secure the fit, while '700' branding marks the lateral side. Underfoot, a sculpted PU midsole provides cushioning, also housing Boost, with the rubber outsole sporting a herringbone pattern for traction.",
      Price: 69.99,
      image: '/public/images/yeezys4.jpg'
    },
    {
      name:"Yeezy Boost 750 'OG'",
      description: "Kanye West's very first adidas shoe, the Yeezy Boost 750 ' OG ' released in highly restricted amounts globally in February 2015. The towering boot-like construction shows a radical departure from the earlier models of West, featuring a light brown all-suede cap mounted on top of a partly ribbed, boost-equipped rubber midsole in a subtle off-white color.",
      Price: 1249.99,
      image: '/public/images/yeezys5.jpg'
    },
    {
      name:"Yeezy 500 High Tactical Boot 'Utility Black'",
      description: "The adidas Yeezy 500 Tactical Boot 'Utility Black' showcases a black ballistic mesh upper with matching suede overlays, and is fastened with speed lacing for quick adjustments. The rubber mudguard seamlessly integrates with the podular adiPRENE+ midsole, which is borrowed from the original Yeezy 500 design. The boot’s extended padded collar reaches up to the calf for optimal fit.",
      Price: 199.99,
      image: '/public/images/yeezys6.jpg'
    }
  ];
}
