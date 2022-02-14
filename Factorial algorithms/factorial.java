static int factorial(int n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

// OR

static int factorial(int n) {
    int result = 1;
    for (int i = 2; i <= n; ++i) {
      result *= i;
    }

    return result;
}

// OR

static int factorial(int n) {
    if (n < 2)
      return 1;
    return n * factorial(n - 1);
}
