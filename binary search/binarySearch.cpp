#include <iostream>
#include <vector>

using namespace std;

int binarySearch(vector<int> nums, int k);

int main(void){
    int n, k;
    cin >> n >> k;
    vector<int> number;
    for(int i = 0; i < n; ++i){
        int value;
        cin >> value;
        number.push_back(value);
    }
    
    int result = binarySearch(number, k);
    cout << result << endl;
}

int binarySearch(vector<int> nums, int k){
    int left = 0,
        right = nums.size() - 1;
    
    while(left <= right){
        int middle = (right + left) / 2;
        
        if(nums[middle] == k){
            return middle;
        }else if(nums[middle] > k){
            right = middle - 1;
        }else{
            left = middle + 1;
        }
    }
    
    return -1;
}
