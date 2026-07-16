let obj = {
    name: "John",
    uni: "Harvard",
    course: "Computer Science",
    year: 3,
    isAlumn: false,
    sub: ["FS", "AI", "DL", "ML"],
    hobies: {
        sports: ["Football", "Cricket"],
        songs: ["Anyone", "Under the Milky Way"],
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