#include <iostream>
#include <set>
#include <string>
using namespace std;

int main (){

    multiset <int> ms ;
    multiset <int> ms1 = {12,10,14,12,10,15,17};

    ms.insert(23);

    for (int num : ms1){
        cout << num << endl;
    }



    return 0;
}