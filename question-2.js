function kangaroo(arr,n)
{
    // The number of jumps needed to reach the starting index is 0
    if (n <= 1)
        return 0;

    // Return -1 if Kangaroo can't jump out of the array
    if (arr[0] == 0)
        return -1;

    // highest index in array.
    let maxReach = arr[0];

    // remaining steps
    let step = arr[0];

    // jumps needed to the end
    let jump = 1;

    // Start traversing array
    let i = 1;

    for (i = 1; i < n; i++) {
        // array over?
        if (i == n - 1)
            return jump;
        // updating end of array

        maxReach =Math.max(maxReach, i + arr[i]);
        step--;

        // stepped finished
        if (step == 0) {
            jump++;
            if (i >= maxReach)
                return -1;

            // restart the steps to reach end if array from position i.
            step = maxReach - i;
        }
    }

    return -1;
}
