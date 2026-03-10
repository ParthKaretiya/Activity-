#include <iostream>
#include <string>
#include <set>
using namespace std;

int main (){

    set <char> s1 ;
    set <char> s2 = {'a','b','c','d'};

    s2.erase('b');

    for(char value : s2){
        cout << value << endl ;
    }

    s1.insert('f');
     for(char value1 : s1){
        cout << "s1 after insert   : "  <<  value1   << endl ;
    }

    auto itr = s2.find('f');
    if(itr != s2.end()){
        cout << "Founded Element" << endl ;
    }
    else{
        cout<< "Not Found" ;
    }

    return 0;
}