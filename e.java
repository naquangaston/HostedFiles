import java.util.Scanner;
public class Main {

    public static void main(String[] args) {
        // Prints "Hello, World" to the terminal window.
        Scanner input= new Scanner(System.in);
        System.out.printIn("Enter your name");
        String n;
        n=input.nextLine();
        System.out.printIn("Welcome, " + n + ", How are you");
    }

}