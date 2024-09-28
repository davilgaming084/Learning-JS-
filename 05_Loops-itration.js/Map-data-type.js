// map datatype in js
// ma[ datatype is like objeect but some diifrence
// you can not duplicate key-value
// you can set anydatatype for key
// mainten same order while log map as declearin/set()


let map = new Map()
map.set("name","satish") // ("key","value")
map.set(95,60) // ("key","value")
map.set(true,false) // ("key","value")
// console.log(map);


// looping of Map
for (const [key,value] in map) {
    console.log(key + "   " + value);
}