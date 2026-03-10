#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main (){
 ifstream file ;
 string data;
 file.open("hello.txt" , ios :: app);
 if(file.is_open()){

    getline(file, data );

    cout<< data << endl;

    while(getline (file , data)){
        cout << data << endl ;
    }

    file.close();
 }

 return 0;
}