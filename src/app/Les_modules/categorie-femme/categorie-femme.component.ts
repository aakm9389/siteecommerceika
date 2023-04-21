import { Component } from '@angular/core';

@Component({
  selector: 'app-categorie-femme',
  templateUrl: './categorie-femme.component.html',
  styleUrls: ['./categorie-femme.component.css']
})
export class CategorieFEMMEComponent {
  title = 'Femme';
   vue: Boolean = false;
   vue2: Boolean = false;
   HommeHabit =[
    {marque: 'Robe-Oversize',
    description:'Habit souple et leger',
    prix:'15.000F',
    img:'assets/img-femme/Robe.jpg'
    },
    {marque: 'Collier',
    description:'Mettre votre tenue en valeur',
    prix:'20.000F',
    img:'assets/img-femme/collier.jpg'
    },
    {marque: 'Sac',
    description:'Sac en cuir noir',
    prix:'15.000F',
    img:'assets/img-femme/sac.jpg'
    },
    {marque: 'Talons',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'assets/img-femme/talon.jpg'
    },
    {marque: 'Soutien gorge ',
    description:'Souplesse pure',
    prix:'7.000F',
    img:'assets/img-femme/femme2.jpg'
    },
    {marque: 'Vaxe',
    description:'Ne pas oublier d où on vient',
    prix:'15.000F',
    img:'assets/img-femme/femme1.jpg'
    },
    {marque: 'Lunettes',
    description:'Pour completer votre outfit',
    prix:'20.000F',
    img:'assets/img-femme/lunettes.jpg'
    },
    {marque: 'Montre',
    description:'Être classe est un choix',
    prix:'10.000F',
    img:'assets/img-femme/montre.jpg'
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
