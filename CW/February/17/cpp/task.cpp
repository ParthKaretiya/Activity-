#include <iostream>
#include <vector>
#include <numeric>
#include <algorithm>
#include <fstream>

using namespace std;

int main() {

    int n;
    cout << "Enter Size of Vector: ";
    cin >> n;

    vector<int> v1;

    cout << "Now Enter Every Element of Vector:\n";

    for(int i = 0; i < n; i++){
        int value1;
        cin >> value1;
        v1.push_back(value1);
    }

    cout << "Elements are:\n";

    for(int value : v1){
        cout << value << " ";
    }

    int total = accumulate(v1.begin(), v1.end(), 0);
    cout << "\nTotal score: " << total << endl;

    int maxValue = *max_element(v1.begin(), v1.end());
    cout << "Max Element: " << maxValue << endl;

    int minValue = *min_element(v1.begin(), v1.end());
    cout << "Min Element: " << minValue << endl;

    sort(v1.begin(), v1.end());
    cout << "\nAfter sorting:\n";
    for(int value : v1){
        cout << value << " ";
    }

    reverse(v1.begin(), v1.end());
    cout << "\nAfter reverse:\n";
    for(int value : v1){
        cout << value << " ";
    }

    ofstream file("Output.txt");

    if(file.is_open()){
        file << "Total is: " << total << endl;
        file << "Minimum is: " << minValue << endl;
        file << "Maximum is: " << maxValue << endl;
        file.close();
    } else {
        cout << "Error opening file." << endl;
    }

    return 0;
}
