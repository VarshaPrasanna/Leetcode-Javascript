/*
1. Initialize an Array: Create an array to store the minimum cost, Size will be same as cost array
    let minimumCost=new Array(cost.length)

2. Base Case: Initialize first two elements of minimum cost array This will be the minimum cost to reach the first two steps
    minimumCost[0]=cost[0]
    minimumCost[1]=cost[1]

3. Iterate Through the Array: For each i, calculate the minimum cost to reach the current step i while considering both the cost of the current step and the minimum cost of previous two steps,
   for(let i=2;i<=cost.length;i++){
        minimumCost[i]=cost[i]+Math.min(minimumCost[i-1],minimumCost[i-2])
    }

4. Return the Minimum Cost to reach last step:
    Return the minimum of the last two elements
    For index 0 minimum cost will be the last element minimumCost[cost.length - 1]
    For index 1 minimum cost will be second last element minimumCost[cost.length - 2]

Complexity
Time complexity:O(n)
Space complexity:O(n)
*/

var minCostClimbingStairs = function (cost) {
  let minimumCost = new Array(cost.length);
  minimumCost[0] = cost[0];
  minimumCost[1] = cost[1];
  for (let i = 2; i <= cost.length; i++) {
    minimumCost[i] = cost[i] + Math.min(minimumCost[i - 1], minimumCost[i - 2]);
  }
  return Math.min(minimumCost[cost.length - 1], minimumCost[cost.length - 2]);
};
