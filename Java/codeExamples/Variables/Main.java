package codeExamples.Variables;

import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        Random randomGenerator = new Random();

        int firstNumber = randomGenerator.nextInt(8) + 2;
        int secondNumber = randomGenerator.nextInt(8) + 2;
        int subtraction = randomGenerator.nextInt(8) + 2;
        int answer = firstNumber * secondNumber - subtraction;

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

        System.out.println("The answer is " + answer);
        scanner.close();
    }
}
