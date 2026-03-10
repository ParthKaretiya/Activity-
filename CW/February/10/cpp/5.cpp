#include <iostream>
#include <cstdio>
#include <fstream>
using namespace std;

void write1(int a)
{
    string result;

    if (a > 0) {
        result = "Positive Number";

        if (a % 2 == 0) {
            result += " and Even Number";
        } else {
            result += " and Odd Number";
        }
    }
    else if (a < 0) {
        result = "Negative Number";
    }
    else {
        result = "Zero";
    }

    // Print on screen
    cout << "Value: " << a << " -> " << result << endl;

    // Write to file
    ofstream file("sample.txt");
    if (file.is_open()) {
        file << "Value: " << a << " -> " << result << endl;
        file.close();
    }
}

int main()
{
    int a;

    printf("Enter Your Number\n");
    scanf("%d", &a);

    write1(a);

    return 0;
}
