class Parcour{
    constructor(date,sexe,age,depart,arriver,etatroute){
        this.date=date;
        this.sexe=sexe;
        this.age=age;
        this.depart=depart;
        this.arriver=arriver;
        this.etatroute=etatroute;
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
    initlist(){
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
                console.log("les donnees sont "+tmp.info.date+" "+tmp.info.sexe+" "+tmp.info.age+" "+tmp.info.depart+" "+tmp.info.arriver+" "+tmp.info.etatroute);
                tmp=tmp.next;
            }
        }
    }
    recherche(depart,arriver){
        var tmp=this.tete;
        if(tmp==null){
            console.log("il ya pas d'element dans la liste");
        }else{
            while((tmp!==null)&&(tmp.info.depart!==depart)&&(tmp.info.arriver!==arriver)){
                tmp=tmp.next;
            } 
            if((tmp.info.depart===depart)&&(tmp.info.arriver===arriver)){
                console.log("la valeur exite dans dans notre pile");
                console.log("les donnees sont "+tmp.info.date+" "+tmp.info.sexe+" "+tmp.info.age+" "+tmp.info.depart+" "+tmp.info.arriver+" "+tmp.info.etatroute);

            }else{
                console.log("Sorry!!les valeurs rechercher n'existe pas dans la pile");
            }
        }
    }
    taille(){
        var n=0;
        var tmp=this.tete;
        while(tmp){
            n=n+1;
            tmp=tmp.next;
        }
       return n;
    }
    supprimer(age){
        if(this.tete===null){
            console.log("la pile est vide est");
        }else{
            var tmp=this.tete;
             var prec=this.tete;
            while((tmp!==null)&&(tmp.info.age==age)){
                prec=tmp;
                tmp=tmp.next;
                if(tmp.info.age==age){
                    prec.next=tmp.next;
                }
            }
        }
        return prec;
    }
    sort(){
        var L= new Pile();
        var n=this.taille;
        var mini,tmp;
        while(n>0){
            tmp=this.tete;
            mini=tmp.info.age;
            if(mini>tmp.info.age){
                mini=tmp.info.age;
            }
            tmp=tmp.next;
            n=n-1;
        }
        L.savetete(mini);
        this.supprimer(mini);
    }    
}
var list=new Pile();
var t1=new Parcour("21/05/2022","masculin",25,"meec","polytechnique","bonne");
var t2=new Parcour("21/05/2022","masculin",22,"meec","polytechnique","bonne");
var t3=new Parcour("21/05/2022","masculin",21,"meec","ngoa","bonne");
console.log ("la liste est :"+" "+list.initlist());
list.savetete(t1);
list.savetete(t2);
list.savetete(t3);
list.afficher();
list.recherche("meec","ngoa");
console.log("La taille de la pile est :"+" "+list.taille());
console.log("les elements classées dans l'odre croissant sont:");
list.sort();
list.afficher();