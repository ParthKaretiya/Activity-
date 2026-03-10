#include<iostream>
#include<vector>

using namespace std;
int main(){
    
    vector<int> v1 = {1,2,3,4};
    vector<int> v2;
    
    v1.push_back(67);
    
    
    for(int value : v1){
        cout << value << endl;
    }
    
    cout<< "total size of v1 is:  " << v1.size()<<endl;
    
    v1.pop_back();
    
    
    
    cout<< "total size of v1 is:  " << v1.size()<<endl;
    
    v1.insert(v1.begin() + 2, 67);
    
    
    v1.erase(v1.begin() + 5);
    
      for(int value : v1){
        cout << value << endl;
    }
    
    cout<<v1.front()<<endl;
      cout<< v1.back()<<endl;
    
    v1.clear();
    
    
        cout<< "total size of v1 is:  " << v1.size()<<endl;

    
    
    return 0;
}