let movieArr = [
    ["Everything, Everywhere..", "The Banshees of Inisherin", "The Whale"],
    ["Prisoners", "Dune", "Arrival"],
    ["Puss in Boots:TLW", "Over The Hedge", "The Princess and The Frog"]
];

console.log(movieArr[0][0]);
console.log(movieArr[0][1]);
console.log(movieArr[0][2]);
console.log(movieArr[1][0]);
console.log(movieArr[1][1]);
console.log(movieArr[1][2]);
console.log(movieArr[2][0]);
console.log(movieArr[2][1]);
console.log(movieArr[2][2]);

let row;
let item;

for(row = 0; row < movieArr.length; row++){
    for(item = 0; item < movieArr.length; item ++){
        console.log(movieArr[row][item]);
    }
}


for(item = 0; item < movieArr[1].length; item++){
    console.log(movieArr[1][item]);
}