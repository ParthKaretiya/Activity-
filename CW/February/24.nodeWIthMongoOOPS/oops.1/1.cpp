#include <iostream>
#include <string> 
using namespace std ;

class Car {
    public : 
    string brand;
    int speed ;

    void drive(){
        cout << brand << " is driving at the speed of" << speed << "Km/H" << endl;
    }
};

int main (){

    Car c1 ;
    c1.brand = "BMW" ;
    c1.speed = 70;

    Car c2 ;
    c2.brand = "Audi";
    c2.speed = 100 ;

    c1.drive();
    c2.drive();




    return 0;
}