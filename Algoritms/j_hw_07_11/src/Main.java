public class Main {
    //Задание 1
  //Лучший случай  - константный порядок роста О(1), если a и b равны, цикл не выполниться.
  //Худший случай - линейный порядок роста О(n), будет произведен цикл WHILE

    void method1(int a, int b) {
        while (a != b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }
        System.out.println(a);
        System.out.println(b);
    }


    // Задание 2
    void method2(int n) {
        for (int i = 0; i < n / 2; i++) { // линейный порядок роста n/2
            for (int j = 1; j + n / 2 <= n; j++) {//линейный порядок роста от  j <=n-n/2
                for (int k = 1; k <= n; k = k * 2) { // логарифмический рост log(n)
                    System.out.println("I am expert!"); // сложность от O((n^2)/4*log(n))
                }
            }
        }
    }

   // Задание 3
    void method3(int n) {
        for (int i = 1; i <= n; i++) {//линейный порядок роста n
            for (int j = 1; j <= n; j = j + i) {//линейный порядок роста (n - 1)
                System.out.println("I am expert!"); //Сложность О(n^2-n)=O(n^2)
            }
        }
    }
}