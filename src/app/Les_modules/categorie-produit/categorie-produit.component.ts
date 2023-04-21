import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.component.html',
  styleUrls: ['./categorie-produit.component.css']
})
export class CategoriePRODUITComponent {
  title = 'Enfant';
   vue: Boolean = false;
   vue2: Boolean = false;
   isChecked = false;

   toggleCheckbox() {
     this.isChecked = !this.isChecked;
   }

   HommeHabit =[
    {marque: 'T-shirt',
    description:'Habit souple et leger',
    prix:'15.000F',
    img:'assets/imgg/enfant.jpg'
    },
    {marque: 'Jean',
    description:'La qualité fait la différence',
    prix:'20.000F',
    img:'assets/imgg/jean.jpg'
    },
    {marque: 'Jeans',
    description:'large sélection de jeans',
    prix:'10.000F',
    img:'assets/imgg/pantalon1.jpg'
    },
    {marque: 'Lunettes',
    description:'Pour completer votre outfit',
    prix:'5.000F',
    img:'assets/imgg/homme1.jpg'
    },
    {marque: 'Chaussures',
    description:'La qualité pure',
    prix:'15.000F',
    img:'assets/imgg/chaussure.jpg'
    },
    {marque: 'Robe',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'assets/imgg/robe.jpg'
    },
    {marque: 'Collier ',
    description:'Mettre votre outfit en valeur',
    prix:'7.000F',
    img:'assets/imgg/collier.jpg'
    },
    {marque: 'talon',
    description:'Confortable pour vos filles',
    prix:'15.000F',
    img:'assets/imgg/talon.jpg'
    },
   
    {marque: 'Robe',
    description:'Simple et leger',
    prix:'15.000F',
    img:'assets/imgg/robe2.jpg'
    },
    {marque: 'Sac à main ',
    description:'Souplesse pure',
    prix:'7.000F',
    img:'assets/imgg/sac2.jpg'
    },
    {marque: 'T-shirt',
    description:'Confortable-Durable',
    prix:'5.000F',
    img:'assets/imgg/T-shirt3.png'
    },
    {marque: 'Habit-bb',
    description:'Elégance pure',
    prix:'10.000F',
    img:'assets/imgg/bb.jpg'
    },
    {marque: 'Chemise-Oversize',
    description:'Pour un style décontracté',
    prix:'10.000F',
    img:'assets/imgg/homme.jpg'
    },
    {marque: 'Bazin',
    description:'Être classe est un choix',
    prix:'50.000F',
    img:'assets/imgg/bazin.jpg'
    }
  ] ;
  Plus=[
    
    {marque: 'Jordan',
    description:'Elégance pure',
    prix:'25.000F',
    img:'assets/imgg/chaussure4.jpg'
    },
    {marque: 'Robe ',
    description:'Souplesse pure',
    prix:'15.000F',
    img:'assets/imgg/Robe5.jpg'
    },
    {marque: 'Jean ',
    description:'Souplesse pure',
    prix:'15.000F',
    img:'assets/imgg/pantalon3.jpg'
    },
    {marque: 'Jean',
    description:'Jean slim leger',
    prix:'15.000F',
    img:'assets/imgg/pantalon2.jpg'
    },
    {marque: 'Ceinture',
    description:'Dior en cuir noir',
    prix:'20.000F',
    img:'assets/imgg/homme2.jpg'
    },
    {marque: 'Vaxe',
    description:'Ne pas oublier d où on vient',
    prix:'15.000F',
    img:'assets/imgg/femme1.jpg'
    },
    {marque: 'Fashion',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'assets/imgg/chaussure10.jpg'
    },
    {marque: 'Lunettes',
    description:'Pour completer votre outfit',
    prix:'20.000F',
    img:'assets/imgg/lunettes.jpg'
    },
    {marque: 'Pull ',
    description:'Simple et attrayant',
    prix:'15.000F',
    img:'assets/imgg/pull.jpg'
    },
    
    {marque: 'Montre',
    description:'Être classe est un choix',
    prix:'10.000F',
    img:'assets/imgg/montre.jpg'
    },
    {marque: 'jupe',
    description:'Simple et leger',
    prix:'15.000F',
    img:'assets/imgg/jupe.jpg'
    },
    {marque: 'Bazin',
    description:'Être classe est un choix',
    prix:'50.000F',
    img:'assets/imgg/bazin.jpg'
    },
    {marque: 'Papettes',
    description:'Simple et leger',
    prix:'10.000F',
    img:'assets/imgg/tapettes.jpg'
    },
    {marque: 'Robe-Oversize',
    description:'Habit souple et leger',
    prix:'15.000F',
    img:'assets/imgg/Robes.jpg'
    },
    {marque: 'Collier',
    description:'Mettre votre tenue en valeur',
    prix:'20.000F',
    img:'assets/imgg/collier2.jpg'
    },
    {marque: 'T-shirt',
    description:'Être classe est un choix',
    prix:'5.000F',
    img:'assets/imgg/T-shirt.jpg'
    },
    {marque: 'Pantalon',
    description:'Pas plus meilleur que ceux-ci',
    prix:'5.000F',
    img:'assets/imgg/Pantalon.jpg'
    },
    {marque: 'Montre',
    description:'Être classe est un choix',
    prix:'10.000F',
    img:'assets/imgg/montre.jpg'
    },
    {marque: 'Sac',
    description:'Sac en cuir noir',
    prix:'15.000F',
    img:'assets/imgg/sac.jpg'
    },
    {marque: 'Talons',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'assets/imgg/talons.jpg'
    },
    {marque: 'Soutien gorge ',
    description:'Souplesse pure',
    prix:'7.000F',
    img:'assets/imgg/femme2.jpg'
    },
    {marque: 'Chaussures',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'assets/imgg/chaussure13.jpg'
    },
    {marque: 'Collier ',
    description:'Mettre votre outfit en valeur',
    prix:'7.000F',
    img:'assets/imgg/collier.jpg'
    },
    {marque: 'Robe ',
    description:'Elégance pure',
    prix:'7.000F',
    img:'assets/imgg/Robe3.jpg'
    }
  ]
Images: string='';
Descrip: string='';
Prixx: string='';
Mark: string='';
Nombre: number=10;
P: boolean=false;

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
  OnAffiche(){
  this.HommeHabit.push(...this.Plus);
  this.P=true

  }
}
