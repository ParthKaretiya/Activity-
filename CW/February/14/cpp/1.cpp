#include <iostream>
#include <vector>
using namespace std;

int main() {

    vector<int> v1(10);
    cout << "Enter 10 Numbers" << endl;

    for (int i = 0; i < 10; i++) {
        cin >> v1[i];
    }

    int n1;
    cout<< "Enter Index Number You Want" << endl ;
    cin >> n1; 
    cout<< "Your Number is " << v1[n1] << endl;

    int n2;
    cout<< "Enter Index Number You Want to Remove" << endl ;
      cin >> n2; 
      v1.erase(v1.begin() + n2);
    cout<< "Removed Number" << endl ;

    for(int i = 0; i < 9; i++) {
        cout << v1[i] << " ";
    }


    return 0;
}
