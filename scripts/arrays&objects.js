{
    const arr = [1, 2, 3];

    // Add to the array
    arr.push('hello');
    console.log(arr);

    // Remove from the end of the array
    arr.pop();
    console.log(arr);

    // Add to the start of the array
    arr.unshift('hello');
    console.log(arr);

    // Remove from the start of the array
    arr.shift();
    console.log(arr);


    // Concatenate 2 or more arrays
    const arr2 = [4, 5, 6];
    let arr3 = arr.concat(arr2);
    console.log(arr3);

    // Concat 3 arrays
    const arr4 = arr.concat(arr2, arr3);
    console.log(arr4);

    // Get the length of an array
    console.log(arr3.length);

    // flatten the array
    const multiArr = [
        [1, 2],
        [3, 4],
        [5, 6]
    ];
    console.log(multiArr.flat());

    // Slice array
    console.log(arr4.slice(0, 6));
    console.log(arr4.slice(3, 6));
    console.log(arr4);
}