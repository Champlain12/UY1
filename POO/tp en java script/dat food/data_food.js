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
class Pile{
    constructor(){
        this.tete=null;
    }
    init(){
        return null;
    }
    savetete(noeud){
        var nouveau = new Noeud(noeud);
        nouveau.next=this.tete;
        this.tete=nouveau;
    }
    afficher(){
        var tmp=this.tete;
        if(tmp==null){
            console.log("il ya pas d'element dans la liste");
        }else{
            while(tmp!=null){
                console.log("sexe:"+" "+tmp.info.sexe+", "+"age:"+" "+tmp.info.age+" ,"+"date:"+" "+tmp.info.date+" ,"+"l'heure:"+" "+tmp.info.heure+", "+"repas:"+" "+tmp.info.repas+", "+"ustensile:"+" "+tmp.info.ustensine+", "+"lieu:"+" "+tmp.info.lieux+", "+"nombre:"+" "+tmp.info.nombre);
               
                tmp=tmp.next;
            }
        }
    }
    recherche(date,repas){
        var tmp=this.tete;
        if(tmp==null){
            console.log("Desolée!!la pile est vide ");
        }else{
            while((tmp!=null)&&(tmp.info.date!=date)&&(tmp.info.repas!=repas)){
              tmp=tmp.next;
            }
            if((tmp.info.date==date)&&(tmp.info.repas==repas)){
                console.log("l'element existe dans la pile");
                console.log(" "+tmp.info.sexe+" "+tmp.info.age+" "+tmp.info.date+" "+tmp.info.heure+" "+tmp.info.repas+" "+tmp.info.ustensine+" "+tmp.info.lieux+" "+tmp.info.nombre);

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
    sort(){
        var L=new Pile();
        var n=this.taille();
        var mimi,tmp;
        while(n>0){
            tmp=this.tete;
            mimi=tmp.info.nombre;
            if(mimi>tmp.info.nombre){
                mimi=tmp.info.nombre;
            }
            tmp=tmp.next;
            n=n-1;
            L.savetete(mimi);
        }
    }
}

var list=new Pile();
console.log("la liste est:"+" "+list.init())
var t1=new FOOD("Masculin",16,"18/03/2022","12h-14h","Riz_sauce d'arachide","Gamelle","Campus",2);
var t2=new FOOD("Feminin",20,"28/03/2022","16h-18","Pain avec la noix","Sachet","Maison",4);
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
console.log("Ici nous avons l'EMLPILAGE");
list.savetete(t1);
list.savetete(t2);
list.savetete(t3);
list.savetete(t4);
list.savetete(t5);
list.savetete(t6);
list.savetete(t7);
list.savetete(t8);
list.savetete(t9);
list.savetete(t10);
list.savetete(t11);
list.savetete(t12);
list.afficher();
/*list.savetete(t13);
list.savetete(t14);
list.savetete(t15);
list.savetete(t16);
list.savetete(t17);
list.savetete(t18);
list.savetete(t19);

list.recherche("18/03/2022","Riz_sauce d'arachide");
console.log("La taille de la pile est :"+" "+list.taille());*/
console.log("les elements classées dans l'odre croissant sont:");
list.sort();
list.afficher();