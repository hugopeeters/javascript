class SortingHelper {

    constructor () {

    }

    selectionSort(myList) {
        for (let i = 0; i < myList.length; i++) {
    
            //find smallest
            let smallest = myList[i];
            let index = i;
            for (let j = i; j < myList.length; j++) {
                if (myList[j] < smallest) {
                    smallest = myList[j];
                    index = j;
                }
            }
    
            //swap
            let temp = myList[i];
            myList[i] = myList[index];
            myList[index] = temp;
    
            //log
            console.log(myList);
        }
    }

    mergeSort(myList) {

        //single-element array is already sorted
        if (myList.length < 2) {
            return myList;
        }
    
        //determine midpoint
        let i = Math.floor(myList.length / 2);
    
        //sort left subarray
        let sortedLeft = this.mergeSort(myList.slice(0, i));
    
        //sort right subarray
        let sortedRight = this.mergeSort(myList.slice(i, myList.length));
    
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

    bubbleSort(myList) {
        let repeat = true;
    
        while (repeat) {
    
            //repeat is false if we don't swap enything this pass
            repeat = false;
    
            //loop through the array (skip the last item) bubble high values up
            for (let i = 0; i < myList.length - 1; i++) {
                if (myList[i] > myList[i + 1]) {
    
                    //swap
                    let temp = myList[i];
                    myList[i] = myList[i + 1];
                    myList[i + 1] = temp;
    
                    //make sure we repeat
                    repeat = true;
                }
            }
    
            //log
            console.log(myList);
        }
    }
}