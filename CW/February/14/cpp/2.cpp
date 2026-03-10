#include <iostream>
#include <list>
#include <string>
using namespace std;

int main() {

    list<int>l1;
    list<int>l2;
    list<int>l3;

    int m;
    cout << "Enter your M elements: " << endl;
    cin >> m;

    cout << "You have to enter numbers for " << m << " times" << endl;
    for(int i=0; i<m ; i++){
        int value;
        cin >> value;
        l1.push_back(value); 

    }

    cout << "Elements in list l1 are:" << endl;

    for(int value : l1) {     
        cout << value << endl;
    }

    int n;
    cout << "Enter N elements: " << endl;
    cin >> n;

     cout << "You have to enter numbers for " << n << " times" << endl;
    for(int i=0; i<n ; i++){
        int value;
        cin >> value;
        l2.push_back(value); 

    }

    cout << "Elements in list l2 are:" << endl;
    for(int value : l2){
        cout<< value << endl;
    }

    for(int value : l1){
        l3.push_back(value);
    }

    for(int value : l2){
        l3.push_back(value);
    }

    cout<< "Your Reversed And Merged List Is.....";

   l3.reverse() ;
   for(int value : l3){
    cout<< value << " ";
   }
    return 0;
}
