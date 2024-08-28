import java.util.Scanner;
public class Exo16{
    public static void main(String[] args){
        //creation d'un objet scanner pour lire les entrer de l'utilisateur
        Scanner scanner = new Scanner(System.in);
        System.out.println("Donnez un nombre positif");
        double nombre = scanner.nextDouble();
        while(nombre!=0){
            while(nombre<0){
                System.out.println("svp positif :");
                nombre = scanner.nextDouble();
            }
            if(nombre>0){
                //calcule de la racine carrer du nombre entrer par l'utilisateur
                double racinecarre = Math.sqrt(nombre);
                //affichage de la reponse
                System.out.println("la racine carrer de "+" "+ nombre +" "+"est :" +" "+ racinecarre);
            }
            System.out.println("Donnez un nombre positif");
            nombre = scanner.nextDouble();
        }
        System.out.println("Donnez un nombre positif"+" "+ nombre);
        System.out.println("merci A bientot");
    }
}