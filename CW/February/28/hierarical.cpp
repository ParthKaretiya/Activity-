#include<iostream>

using namespace std;

class Lenovo{
    
    // Function members....
    
    public:
       void display(){
           cout << "The display fucntion is defined in the parent class which is -> Lenovo"<< endl;
       }
    
};

class Legion : public Lenovo{
    // Function members....
    
    public:
       void display1(){
           cout << "The display1 fucntion is defined in the chlid class which is -> Legion"<< endl;
       }

    
};

class Loq : public Lenovo{
    // Function members....
    
    public:
       void display2(){
           cout << "The display2 fucntion is defined in the child class which is -> Loq"<< endl;
       }

};

class Ideapad : public Lenovo{
    // Function members....
    
    public:
       void display3(){
           cout << "The display3 fucntion is defined in the child class which is -> Ideapad"<< endl;
       }

    
};

class Yoga : public Lenovo{
    // Function members....
    
    public:
       void display4(){
           cout << "The display4 fucntion is defined in the child class which is -> Yoga"<< endl;
       }

    
};


int main(){
    
    Ideapad i1;
    
    i1.display();
    i1.display3();
    
    Loq l1;
    
    l1.display();
    l1.display2();
    
    Yoga y1;
    
    y1.display();
    y1.display4();
    
    return 0;
}