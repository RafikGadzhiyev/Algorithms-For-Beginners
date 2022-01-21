#include <iostream>
#include <vector>

using namespace std;

int linearSearch(vector<int> nums, int k);

int main(void){
    int n, k;
    cin >> n >> k;
    vector<int> numbers;
    for(int i = 0; i < n; ++i){
        int value;
        cin >> value;
        numbers.push_back(value);
    }
    
    int result = linearSearch(numbers, k);
    
    cout << result << endl;
}

int linearSearch(vector<int> nums, int k){
    for(int i = 0; i < nums.size(); ++i){
        if(nums[i] == k){
            return i;
        }
    }
    
    return -1;
}
