static int LinearSearch(int[] n, int k) {
    for (int i = 0; i < n.length; ++i) {
        if (n[i] == k)
            return i;
    }

    return -1;
}
