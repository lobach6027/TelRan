public class Main {
    public static void main(String[] args){


    int[] arr1 = new int[]{1, 1, 2, 3, 3,4,4,5,5};
    int[] arr2 = new int[]{1, 2, 3, 4};

    formatArray(arr1);
   // checkArray(2,arr2);

}


     /*   public static int  checkArray(int x, int[] arr1) {
            for (int i = 0; i < arr1.length; i++) {
                if (x == arr1[i]) {
                    System.out.println("index of element = "+i);
                }
            }
            return -1;
        }*/


    public static int formatArray(int[] array) {
        for (int i = 0; i < array.length; i = i + 2) {
            if (array[i] != array[i + 1]) {
                System.out.println("we found element without duplicate = "+ array[i]+" "+ "index = "+i);
                break;
            }
        }
        return -1;
    }

    }
