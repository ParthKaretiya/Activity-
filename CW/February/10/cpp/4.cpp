#include <iostream>
#include <cstdio>
using namespace std;

void write(int arr[5]){
      int sum = 0;
    int avg;
      printf("Enter 5 numbers:\n");
    for (int i = 0; i < 5; i++) {
        scanf("%d", &arr[i]);
    }

    for (int i = 0; i < 5; i++) {
        sum = sum + arr[i];
    }

    avg = sum / 5;
    printf("Average = %d\n", avg);

    printf("Index and value (>= average):\n");
    for (int i = 0; i < 5; i++) {
        if (arr[i] >= avg) {
            printf("Index = %d, Value = %d\n", i, arr[i]);
        }
    }

}

int main()
{
    int arr[5];
  
  write(arr);

    return 0;
}
