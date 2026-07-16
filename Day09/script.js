let obj = {
    name: "John",
    uni: "Harvard",
    course: "Computer Science",
    year: 3,
    isAlumn: false,
    sub: ["FS", "AI", "DL", "ML"],
    hobies: {
        sports: ["Football", "Cricket"],
        listening: "Sapphire",
        test1: {
            test2: {
                test3: {
                    test4: {
                        test5: {
                            69: "Good",
                        }
                    }
                }
            }
        }
    }
}

console.log(obj)

let var1 = obj["name"]
console.log(var1)
// Every key will be string as a data type 

// changing the value of a key 
obj["course"] = "MTECH";
console.log(obj)

// Delete any Key 
delete obj.year;
delete obj["university"];

console.log(obj)

// Adding a new key 
obj["isMarried"] = false;

// console.log(obj.hobbies.test1.test2.test3.test4.test5[100]); // undefined because 100 is not a key in the object 

let num = 10;

for (let i = 0; i < num; i++) {
    console.log(i)
}

let st = ["John", "Doe", "Jane", "Smith", "Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

for (let i = 0; i < st.length; i++) {
    // console.log(st[i])
    // for (let j = 0; j < st[i].length; j++) {
    //     console.log(st[i][j])
    // }
    // Acess the first character of each name in the st array
    console.log(st[i][0])
}
console.log(typeof st);

let firstStudent = st[0];

for (let i = 0; i < firstStudent.length; i++) {
    console.log(firstStudent[i])
}
let alph = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < alph.length; i++) {
    if (i % 2 == 0) {
        console.log('Even index',i, alph[i])
    } else {
        console.log('Odd index',i, alph[i])
    }
}

