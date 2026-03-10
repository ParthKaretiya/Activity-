#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

// sort -> method :: vector, array and deque........

int main(){
    
    vector <char> v1 = {'S', 'z', 'r', 'D'};
    
    
    cout << "Vector Operation for Sort method...." << endl;
    
    sort(v1.begin(), v1.end());
    
    for(const auto& value : v1){
        cout << "After performing sort operation in v1:  " << value<< endl;
    }
    
    reverse(v1.begin(), v1.end());
    
    cout << "Reverse Operation......" << endl;
    
       for(const auto& value : v1){
        cout << "After performing sort operation in v1:  " << value<< endl;
    }
 
    
    
    return 0;
}