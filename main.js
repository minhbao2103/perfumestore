//CASE 1:
const nums = [9,8,7,5,4,2,12,22,35,12]
const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        console.log([nums[i], nums[j]] = [nums[j], nums[i]])
      }
    }
  }

  return nums;
};

const resultOfBubbleSort = bubbleSort(nums);
console.log(resultOfBubbleSort);
// dùng for thì lặp theo từng cặp, rồi mới sắp xếp , lặp nhiều lần.

// CASE3:
const numsOfCase2 = [9,9,7,7,2,'1',5,4,2,12,22,35,12]
const bubbleSortOfCase2 = () => {
    for(let i = 0 ; i < numsOfCase2.length - 1; i++) {
        for(let j = i+1 ; j < numsOfCase2.length; j++) {
            if(numsOfCase2[j] < numsOfCase2[i]) {
                [numsOfCase2[i],numsOfCase2[j]] = [numsOfCase2[j],numsOfCase2[i]]
            }
        }
    }
    return numsOfCase2
}
const resultOfBubbleSortOfCase2 = bubbleSortOfCase2(numsOfCase2)
console.log('case2',resultOfBubbleSortOfCase2)
// trùng số thì sắp xếp liền kề nhau
// Nếu là chuỗi số thì cũng sắp xếp bình thường 

// CASE 3:
const sortNums = nums.sort((a,b) => {return a-b})
console.log('case3',sortNums)
// dùng hàm sort thì ngắn gọn, nhưng hàm sort thì chỉ sắp xếp chính xác với 
// chuỗi, còn về số thì so sánh ko chính xác (ví dụ 30 > 100 vì 3 lớn hơn 1 trong bảng nhị phân)