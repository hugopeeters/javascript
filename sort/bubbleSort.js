let myList = [9, 5, 7, 3, 6, 2, 1];
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