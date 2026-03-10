#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main (){

    vector<int> v1 = {23,45,56,67,7,8,90,23};
    cout<< "Before Using Heap" << endl;

    for(const auto &value : v1){
        cout << value << " " ;
    }

    cout<< " After Using Heap" << endl;

    make_heap(v1.begin() , v1.end());

    for(const auto& value :v1){
        cout<< value<< " ";
    }

    return 0;
}