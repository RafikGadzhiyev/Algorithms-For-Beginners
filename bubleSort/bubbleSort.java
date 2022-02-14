    public static void main(String[] argv) {
        for (int i = 0; i < numbers.length; ++i) {
            for (int j = 0; j < numbers.length; ++j) {
                if (numbers[i] < numbers[j]) {
                    int tmp = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = tmp;
                }
            }
        }
    }
