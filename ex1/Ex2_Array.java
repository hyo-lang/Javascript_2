package ex1;

import java.util.Scanner;

public class Ex2_Array {
	public static void main(String[] args) {
		System.out.println("당신의 점수?" );
		
		Scanner sc = new Scanner(System.in);
		
		int score = Integer.parseInt(sc.nextLine());
		char grade = (score>90)? 'A' : ((score>80)? 'B' : 'C');
		
		System.out.println("당신의 점수는 " + score + " 이고 당신의 등급은 " + grade + " 입니다." );
		
	}

}
