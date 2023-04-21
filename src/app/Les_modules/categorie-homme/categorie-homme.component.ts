import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie-homme',
  templateUrl: './categorie-homme.component.html',
  styleUrls: ['./categorie-homme.component.css']
})
export class CategorieHOMMEComponent {
  title = 'Homme';
   vue: Boolean = false;
   vue2: Boolean = false;
   HommeHabit =[
    {marque: 'Chemise-Oversize',
    description:'Pour un style décontracté',
    prix:'10.000F',
    img:'assets/img-homme/homme.jpg'
    },
    {marque: 'Jean',
    description:'Jean slim leger',
    prix:'15.000F',
    img:'assets/img-homme/pantalon.jpg'
    },
    {marque: 'Ceinture',
    description:'Dior en cuir noir',
    prix:'20.000F',
    img:'assets/img-homme/homme2.jpg'
    },
    {marque: 'Fashion',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'assets/img-homme/chaussure10.jpg'
    },
    {marque: 'Pull ',
    description:'Simple et attrayant',
    prix:'15.000F',
    img:'assets/img-homme/pull.jpg'
    },
    {marque: 'Jeans',
    description:'large sélection de jeans',
    prix:'10.000F',
    img:'assets/img-homme/pantalon1.jpg'
    },
    {marque: 'Lunettes',
    description:'Pour completer votre outfit',
    prix:'5.000F',
    img:'assets/img-homme/homme1.jpg'
    },
    {marque: 'Bazin',
    description:'Être classe est un choix',
    prix:'50.000F',
    img:'assets/img-homme/bazin.jpg'
    }
  ] ;
Images: string='';
Descrip: string='';
Prixx: string='';
Mark: string='';
  onDetail(produit: any){
    this.Images= produit.img
    this.Descrip= produit.description
    this.Prixx= produit.prix
    this.Mark= produit.marque
this.vue=true

  }
  OnRetour(){
    if(this.Images){
      this.Images=''
      this.vue=false
    }
  }
}
