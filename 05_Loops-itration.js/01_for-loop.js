// for loop

for (let i = 0; i <= 10; i++) {
    let element = i
    if (element == 5) {
        // console.log("we reach at 5"); // run this firts the print 5
    }
    // console.log(i);
}

for (let i = 1; i <=10; i++) {
    // console.log(`outer loop ${i}`); // 1 time then inner run 10 time then outer run 2 tine then inner 10 
    for (let j = 1; j <=10; j++) {
    //   console.log( i + " * " +  j + " = " + i * j);
    }
}

// loop with array
let array = ["flash","batman","superman"]
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

/// break and continue in loops>if  => help when you need code stop/break or continue  
// break/stop =>  stop loop as  your whish
// continue =>  