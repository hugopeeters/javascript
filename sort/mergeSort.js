let myList = [3, 6, 4, 1, 8, 5, 9];

function mergeSort(_myList) {

    //single-element array is already sorted
    if (_myList.length < 2) {
        return _myList;
    }

    //determine midpoint
    let i = Math.floor(_myList.length / 2);

    //sort left subarray
    let sortedLeft = mergeSort(_myList.slice(0, i));

    //sort right subarray
    let sortedRight = mergeSort(_myList.slice(i, _myList.length));

    //log
    console.log("Split: " + sortedLeft + " | " + sortedRight);

    //merge results
    let result = [];
    do {
        //console.log("Intermediate: " + sortedLeft + " | " + sortedRight);

        if (sortedLeft.length == 0) {
            //console.log("left is empty");
            result.push(sortedRight.shift());
        } else if (sortedRight.length == 0) {
            //console.log("right is empty");
            result.push(sortedLeft.shift());
        } else {
            if (sortedLeft[0] < sortedRight[0]) {
                //console.log("left is smaller");
                result.push(sortedLeft.shift());
            } else {
                //console.log("right is smaller");
                result.push(sortedRight.shift());
            }
        }
    } while (sortedRight.length > 0 || sortedLeft.length > 0)

    //log
    console.log("merged: " + result);

    //return
    return result;
}

mergeSort(myList);