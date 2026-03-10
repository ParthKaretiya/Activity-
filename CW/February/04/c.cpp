#include <iostream>
using namespace std;



int main (){
    int a = 10;
    int *ptr = &a;
    int **ptr1 = &ptr;

    cout<< a <<endl;
    cout << &a <<endl;
    cout << &ptr <<endl;

    // cout<< "HEllo WOrlf" <<endl;
    return 0;
}
