#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    map<string, char> m1;

    m1["Aman"] = 'A';
    m1["amar"] = 'O';
    m1["April"] = 'B';

    for (auto& [key, value] : m1) {
        cout << "Current Key is: " << key << " and Value is " << value << endl;
    }

    return 0;
}