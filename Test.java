public class Test {

    private String calc(String input) {
        String reverse = "";
        for (int i=input.length()-1; i >=0; i--) {
            reverse = reverse + input.charAt(i);
        }
      return input;
    }
    public static void main(String[] args) {
        Person3 Sruti = new Person3("Sruti");
        System.out.println(Sruti.toString());
    }
}