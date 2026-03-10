#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(){

    vector<char> v1 = {'s' ,'z','t','o'} ;
    auto itr = find(v1.begin() ,v1.end() ,'t');

    if(itr != v1.end()){
        cout<<"Element Found " <<    *itr <<endl;
    }
    else{
        cout<< "Element Doesn't Eist" << endl;
    }

    return 0;
}