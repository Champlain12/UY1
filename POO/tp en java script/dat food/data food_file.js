class FOOD{
    constructor(sexe,age,date,heure,repas,ustensine,lieux,nombre){
        this.sexe=sexe;
        this.age=age;
        this.date=date;
        this.heure=heure;
        this.repas=repas;
        this.ustensine=ustensine;
        this.lieux=lieux;
        this.nombre=nombre;
    }
}
class Noeud{
    constructor(p){
        this.info=p;
        this.next=null;
    }
}
class File{
    constructor(){
        this.tete=null;
    }
    init(){
        return null;
    }
//fonction pour ajouter en fin de file
    save_dernier(noeud){
        var nouveau = new Noeud(noeud);
        if(this.tete==null){
            this.tete=nouveau;
        }else
        {
            var tmp=this.tete;
            while(tmp.next){
                tmp=tmp.next;
            }
            tmp.next=nouveau;
        }
    }
    afficher(){
        var tmp=this.tete;
        if(tmp==null)
        {
            console.log("il ya pas d'element dans la file");
        }else
        {
            while(tmp!=null){
                console.log("sexe:"+" "+tmp.info.sexe+", "+"age:"+" "+tmp.info.age+" ,"+"date:"+" "+tmp.info.date+" ,"+"l'heure:"+" "+tmp.info.heure+", "+"repas:"+" "+tmp.info.repas+", "+"ustensile:"+" "+tmp.info.ustensine+", "+"lieu:"+" "+tmp.info.lieux+", "+"nombre:"+" "+tmp.info.nombre);
                console.log("                                                                                                  ");
                tmp=tmp.next;
            }
        }
    }

    recherche(date,repas)
    {
        var tmp=this.tete;
        if(tmp==null)
        {
            console.log("Desolée!!la pile est vide ");
        }else{
            while((tmp!=null)&&(tmp.info.date!=date)&&(tmp.info.repas!=repas)){
              tmp=tmp.next;
            }
            if((tmp.info.date==date)&&(tmp.info.repas==repas)){
                console.log("l'element existe dans la pile");
                console.log("sexe:"+" "+tmp.info.sexe+", "+"age:"+" "+tmp.info.age+" ,"+"date:"+" "+tmp.info.date+" ,"+"l'heure:"+" "+tmp.info.heure+", "+"repas:"+" "+tmp.info.repas+", "+"ustensile:"+" "+tmp.info.ustensine+", "+"lieu:"+" "+tmp.info.lieux+", "+"nombre:"+" "+tmp.info.nombre);

            }else{
                console.log("la valeur n'existe pas dans la pile");
            }

        }
    }
    taille(){
        var n=0;
        var tmp=this.tete;
        while(tmp!=null){
            n=n+1;
            tmp=tmp.next;
        }
        return n;
    }
}
//dans cette partie on ecrit le programme principale
var list= new File();

console.log("ici c'est la fonction d'initialisation de la file");
console.log("la liste est:"+" "+list.init())
var t1=new FOOD("Masculin",16,"18/03/2022","12h-14h","Riz_sauce d'arachide","Gamelle","Campus",2);
var t2=new FOOD("Feminin",20,"28/03/2022","16h-18","Pain avec la noix","Sachet","Maison",4);
var t3=new FOOD("Feminin",27,"28/03/2022","18h-20h","Couscous sauce","Plat","Maison",12);
var t4=new FOOD("Masculin",18,"28/03/2022","20h-22h","Riz","Plat","Maison",3);
var t3=new FOOD("Feminin",27,"28/03/2022","18h-20h","Couscous sauce","Plat","Maison",12);
var t4=new FOOD("Masculin",18,"28/03/2022","20h-22h","Riz","Plat","Maison",3);
var t5=new FOOD("Masculin",16,"28/03/2022","14h-16h","Riz haricot","Gammelle","Campus",1);
var t6=new FOOD("Masculin",17,"28/03/2022","20h-22h","riz tomate","Plat","Route",1)
var t7=new FOOD("Feminin",18,"27/03/2022","16h-18h","Haricots saute","Plat","Maison",4);
var t8=new FOOD("Masculin",18,"27/03/2022","14h-16h","Bouillon viande","Plat","Maison",5);
var t9=new FOOD("Feminin",18,"28/03/2022","16h-18h","Koki","Plat","Maison",4);
var t10=new FOOD("Masculin",18,"27/03/2022","22h-5h","Omelettes avec du pain","Plat","Maison",2)
var t11=new FOOD("Masculin",18,"28/03/2022","20h-22h","riz sauce tomate","bol","Maison",9);
var t12=new FOOD("Feminin",18,"28/03/2022","20h-22h","Pate d'arachide","Plat","Maison",3);
var t13=new FOOD("Masculin",18,"28/03/2022","20h-22h","Rizsaute","Plat","Maison",10);
var t14=new FOOD("Masculin",18,"28/03/2022","20h-22h","Couscous","bols","Maison",8);
var t15=new FOOD("Feminin",18,"28/03/2022","12h-14h","paquet De Chips","sachet","Campus",1);
var t16=new FOOD("Masculin",17,"28/03/2022","10h-12h","PAIN CHOCOLAT","Tasse","Maison",2);
var t17=new FOOD("Feminin",18,"28/03/2022","16h-18h","riz sauce tomate","Plat","Maison",3);
var t18=new FOOD("Masculin",20,"28/03/2022","12h-14h","crudites","Plat","Maison",6);
var t19=new FOOD("Masculin",17,"28/03/2022","14h-16h","Sauce d'arachide","Plat","Maison",4);
console.log("insertion des elements dans la file");

list.save_dernier(t1);
list.save_dernier(t2);
list.save_dernier(t3);
list.save_dernier(t4);
list.save_dernier(t5);
list.save_dernier(t6);
list.save_dernier(t7);
list.save_dernier(t8);
list.save_dernier(t9);
list.save_dernier(t10);
list.save_dernier(t11);
list.save_dernier(t12);
list.save_dernier(t13);
list.save_dernier(t13);
list.save_dernier(t14);
list.save_dernier(t15);
list.save_dernier(t16);
list.save_dernier(t17);
list.save_dernier(t18);
list.save_dernier(t19);
list.afficher();
list.recherche("18/03/2022","Riz_sauce d'arachide");
console.log("La taille de la pile est :"+" "+list.taille());
console.log("les elements classées dans l'odre croissant sont:");