#include<iostream>

using namespace std;

class Car{
    public:
    
    // Pure virtual fucntion is used to list out the compulsory information to be displayed to the user
    // What to do?
    
    virtual void engineInfo() = 0;
    
    virtual void brakeInfo() = 0;
    
    void display(){
        cout << "Car is accesed"<<endl;
        
    }
};

class Tata : public Car{
    // How to do?
    public:
    
      void engineInfo(){
          cout << "The engine started using the key"<<endl;
      }
      
      void brakeInfo(){
          cout << "Brake is available but front"<<endl;
      }
      
};

class Honda: public Car{
    // How to do?
    
    //hello function
    public:
    
      void engineInfo(){
          cout << "The engine started using the voice command"<<endl;
          cout << "Engine capacity is 12 ltr"<<endl;
          cout<<"Engine is available for PETROL and CNG type only"<<endl;
      }
      
      void brakeInfo(){
          cout << "Brake is available for front and back plus Automatic object detaction brake "<<endl;
      }
    
};

int main(){
    
    //main function 
        //..
    Tata obj;
    obj.engineInfo();
    obj.brakeInfo();

    //object of honda
    
    Honda obj1;
    obj1.engineInfo();
    obj1.brakeInfo();

    return 0;
}