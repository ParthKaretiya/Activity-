#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int sub(int a, int b) {
    return a - b;
}

int mul(int a, int b) {
    return a * b;
}

int divide(int a, int b) {
    return a / b;
}

int main() {
    int a, b;

    cout << "Enter A: ";
    cin >> a;

    cout << "Enter B: ";
    cin >> b;

    cout << "Addition: " << add(a, b) << endl;
    cout << "Subtraction: " << sub(a, b) << endl;
    cout << "Multiplication: " << mul(a, b) << endl;

    if (b != 0)
        cout << "Division: " << divide(a, b) << endl;
    else
        cout << "Division not possible (divide by zero)" << endl;

    return 0;
}
