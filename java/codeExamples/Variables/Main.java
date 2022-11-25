package codeExamples.Variables;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int firstNumber = 2;
        int secondNumber = 5;

        int subtraction = 7;
        int answer;
        String prompt = ". Press ENTER when ready";

        System.out.println("Think of a number between 1-10" + prompt);
        scanner.nextLine();
        System.out.println("Multiply by " + firstNumber + prompt);
        scanner.nextLine();
        System.out.println("Multiply result by " + secondNumber + prompt);
        scanner.nextLine();
        System.out.println("Divide result by original number" + prompt);
        scanner.nextLine();
        System.out.println("Now subtract " + subtraction + prompt);
        scanner.nextLine();

        answer = firstNumber * secondNumber - subtraction;
        System.out.println("The answer is " + answer);
        scanner.close();
    }
}
