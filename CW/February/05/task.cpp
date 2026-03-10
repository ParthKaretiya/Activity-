#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ofstream file;
    file.open("task.txt", ios::app);
    string data1;

    if (file.is_open()) {
        cout << "Enter text: " ;
        getline(cin, data1);

        file << data1 << endl;
        file.close();
    }

    return 0;
}
