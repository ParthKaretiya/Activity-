#include <iostream>
#include <fstream>
using namespace std;

int main (){
 ofstream file ;
 file.open("hello.txt", ios ::app);
 if(file.is_open()){
    file<< "4 Time File"<< endl ;
    file.close();
 }

 return 0;
}