// Palindrome Number

#include <iostream>
#include <cstdio>
using namespace std;

void write(int n){
 int temp = 0;
    int b;
    int original;
    
    original = n; 
      while (n > 0) {
        b = n % 10;               
        temp = (temp * 10) + b;  
        n = n / 10;             
    }

    if (original == temp) {
        printf("Number is Palindrome");
    } else {
        printf("Number is Not Palindrome");
    }


}

int main()
{
    int n;
   

    printf("Enter Number: ");
    scanf("%d", &n);
  
    write(n);
  
    return 0;
}
