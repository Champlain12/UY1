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
class File{
    constructor(){
        this.tete=null;
    }
    initlist(){
        return null;
    }
    save_fin(noeud){
        var nouveau = new Noeud(noeud);
        if(this.tete==null){
            this.tete=nouveau;
        }else{
            var tmp=this.tete;
            while(tmp.next){
                tmp=tmp.next;
            }
            tmp.next=nouveau;
        }
    }
    /*save_dernier(noeud){
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
    }*/
    afficher(){
        var tmp=this.tete;
        if(tmp==null){
            console.log("il ya pas d'element dans la File");
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
            console.log("il ya pas d'element dans la File");
        }else{
            while((tmp!==null)&&(tmp.info.depart!==depart)&&(tmp.info.arriver!==arriver)){
                tmp=tmp.next;
            } 
            if((tmp.info.depart==depart)&&(tmp.info.arriver==arriver)){
                console.log("la valeur exite dans dans notre File");
                console.log("les donnees sont "+tmp.info.date+" "+tmp.info.sexe+" "+tmp.info.age+" "+tmp.info.depart+" "+tmp.info.arriver+" "+tmp.info.etatroute);

            }else{
                console.log("Sorry!!les valeurs rechercher n'existe pas dans la File");
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
}
var list=new File();
var t1=new Parcour("21/05/2022","masculin",25,"meec","polytechnique","bonne");
var t2=new Parcour("21/05/2022","masculin",22,"meec","polytechnique","bonne");
var t3=new Parcour("21/05/2022","masculin",21,"meec","ngoa","bonne");
console.log ("la liste est :"+" "+list.initlist());
list.save_fin(t1);
list.save_fin(t2);
list.save_fin(t3);
list.afficher();
list.recherche("mveng","ngoa");
console.log("La taille de la file est :"+" "+list.taille());
console.log("les elements classées dans l'odre croissant sont:");
//list.sort();
//list.afficher()