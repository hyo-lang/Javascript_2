package ex1;

import java.util.Scanner;

public class Ex3_Ifelse {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("점수: ");
		
		int score = Integer.parseInt(sc.nextLine());
		
		String grede;
		
		if (score >=90) {
			grade = 'A';
			System.out.println("당신의 등급은 " + grade + "입니다. " );
		} else if (score >= 80){
			grade = 'B';
			System.out.println("당신의 등급은 " + grade + "입니다. " );
		}
		else if (score >= 70) {
			grade = 'C';
			System.out.println("당신의 등급은 " + grade + "입니다. " );
	
	} else {
		System.out.println("불합격 입니다. ");
	}

}

}