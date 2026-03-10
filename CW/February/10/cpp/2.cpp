#include <iostream>
#include <cstdio>
using namespace std;

void write(int n)
{
    int a = 0;
    int b = 1;
    int temp;

    for (int i = 1; i <= n; i++) {
        printf("%d\n", a);
        temp = a + b;
        a = b;
        b = temp;
    }
}

int main()
{
    int n;

    printf("Enter how many terms: ");
    scanf("%d", &n);

    write(n);   // function call

    return 0;
}
