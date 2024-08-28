import java.util.Scanner;
public class triangle{
    public static void main(String[] args){
        Scanner scanner= new Scanner(System.in);
        //demandons a l'utilisateur d'entre la taille de son triangle
        System.out.println("saisiser la taille de votre triangle :");
        int hauteur=scanner.nextInt();
        int nombre_etoile, nombre_espace, base_triangle,i,j,k;
        nombre_espace=0;
        nombre_etoile=1;
        base_triangle=hauteur+(hauteur-1);

        //affichons le triangle 
        for(i=1; i<=hauteur; i++){
            nombre_espace=(base_triangle-nombre_etoile)/2;
            for(j=1;j<=nombre_espace; j++) System.out.print(" ");
            for(k=1;k<=nombre_etoile; k++) System.out.print("*");
            System.out.println();
            nombre_etoile=nombre_etoile+2;
        }
    }
}