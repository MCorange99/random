/**
 * This makes files with named with an username which contains another username, there are no duplicates. presents to each other still possible
 */

/**
 * 
 * @param {Array} arr 
 * @returns 
 */

function filter(arr) {
    return arr.map((i)=>{
        i = i.trim()
        return (
            i !== undefined &&
            i !== ""
        );
    })
}

const fs = require("fs");
 
// const users = ["liv", "mcorange", "harley", "drago"];
const users = filter(fs.readFileSync("input.txt").split("\n").map((v) => v));

let out = [];

function get(users) {
    out = [];
    const shuffled = users
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    let i = 0;
    while (i < users.length) {
        if (shuffled[i] === users[i]) {
            return false;
        }
        out.push([shuffled[i], users[i]]);
        i++;
    }
    return true;
}

let ret = false;


while (!ret) {
    ret = get(users);
}

for (const item of out) {
    fs.writeFileSync(`out/${item[0]}.txt`, item[1]);
}
