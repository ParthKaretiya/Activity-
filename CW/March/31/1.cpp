#include <iostream>
using namespace std;

int main() {
    int arr[5] = {15,2,3,6,7};
    string num = "";
    int res;

    for(int i = 0; i < 5; i++) {
        num = num + to_string(arr[i]);  
    }
    res = stoi(num)+1;
    // res = res + 1; wswswwsw
   
    
    
   

    cout << res<< endl;  
}