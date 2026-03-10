#include <iostream>
#include <string>
using namespace std ;

int main (){
    int a , b, ans = 0;
    char op ;

    cout << "Enter First Numbers" << endl;
    cin >> a  ;

    cout << "Enter Operator : + - * /" << endl;
     cin >> op ;

      cout << "Enter second Numbers" << endl;
    cin >> b ;

   

    switch (op){
        case '+' :
        cout << a << " + " << b << " = " << a+b;
        break;

           case '-' :
        cout << a << " - " << b << " = " << a-b;
        break;

           case '*' :
        cout << a << " * " << b << " = " << a*b;
        break;

           case '/' :
        cout << a << " / " << b << " = " << a/b;
        break;
    
    default : 
    cout << "Error" << endl ;
    

    }
    return 0;


}