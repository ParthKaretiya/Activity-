#include <iostream>
using namespace std;

int main() {
    int arr[6];
    int *p = arr;

    int size = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < size; i++) {
        cout << "Enter value at index " << i << ": ";
        cin >> arr[i];
    }

    cout << "\nValues using pointer:\n";
    for (int i = 0; i < size; i++) {
        cout << p[i] << endl;
    }

    return 0;
}
