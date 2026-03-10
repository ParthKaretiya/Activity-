#include <iostream>
#include <cstdio>
using namespace std;

void write(int a)   
{
    if (a > 0) {
        printf("Positive Number\n");

        if (a % 2 == 0) {
            printf("Even Number\n");
        } else {
            printf("Odd Number\n");
        }
    }
    else if (a < 0) {
        printf("Negative Number\n");
    }
    else {
        printf("Zero\n");
    }
}

int main()
{
    int a;

    printf("Enter Your Number\n");
    scanf("%d", &a);

    write(a);   

    return 0;
}
