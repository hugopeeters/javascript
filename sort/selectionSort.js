let myList = [9, 5, 7, 3, 6, 2, 1];

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