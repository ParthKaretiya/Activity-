#include <iostream>
#include <fstream>
#include <map>        
using namespace std;

map<string,int>m;

class Addition {
public:
    int add(int a, int b) {
        m["Addition"]++ ;
        return a + b;
        
    }
};

class Multiplication {
public:
    int multiply(int a, int b) {
         m["Multiplication"]++ ;
        return a * b;
    }
};

class Subtraction {
public:
    int sub(int a, int b) {
         m["Subtraction"]++ ;
        return a - b;
    }
};

class Division {
public:
    int divi(int a, int b) {
         m["Division"]++ ;
        return a / b;
    }
};

class Calculator : public Addition,public Multiplication,public Subtraction,public Division{};

int main() {

    Calculator c;
    ofstream file("result.txt",ios::app);


   int addResult = c.add(70, 10);
                   c.add(7, 10);
                   c.add(70, 1);
    int mulResult = c.multiply(50, 30);
    int subResult = c.sub(10, 2);
    int divResult = c.divi(15, 3);


    

    cout << "Addition: " <<addResult << endl;
    cout << "Multiplication: " << mulResult << endl;
    cout << "Subtraction: " << subResult << endl;
    cout << "Division: " << divResult << endl;


    file << "Addition: " << addResult << endl;
    file << "Multiplication: " <<mulResult << endl;
    file << "Subtraction: " << subResult << endl;
    file << "Division: " << divResult << endl;
    
    cout<< "Addition Count : " << m["Addition"] << endl; 
    cout<< "Subtraction Count : " << m["Subtraction"] << endl; 
    cout<< "Multiplication Count : " << m["Multiplication"] << endl; 
    cout<< "Division Count : " << m["Division"] << endl; 

    file.close();

    cout << "Results saved successfully.";

    return 0;
}