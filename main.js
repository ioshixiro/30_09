//map 1
function countInMap(arr) {
    let result = new Map();
    let count = 0;
    
    for(const index of arr){
        if(result.has(index)){
            count = result.get(index)+1;
            result.set(index, count)
        }else{
            result.set(index, 1);
        }
    }
    
    // console.log(result);
}

countInMap([1, 2, 2, 3, 0, 4, 5, 6, 7, 7, 7, 8]);

//map 2
function countInMap(str) {
    let result = new Map();
    let count = 0;
    
    for(let i = 0; i < str.length; i++){
        if(result.has(str[i])){
            count = result.get(str[i])+1;
            result.set(str[i], count)
        }else{
            result.set(str[i], 1);
        }
    }
    
    // console.log(result);
}

countInMap('hello autumn.');

//map 3
function findIndexSum(arr) {
    let result = new Map();

    for (let i = 0; i < arr.length; i++) {
        for (let ii = 0; ii < arr[i].length; ii++) {
            if (result.has(ii)) {
                result.set(ii, result.get(ii) + arr[i][ii]);
            } else {
                result.set(ii, arr[i][ii]);
            }
        }
    }
    
    // console.log(result);
}

findIndexSum([[1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1]]);

//map 4
function infoById(index, map){
    // console.log(map.get(index));
}

let id_info = new Map();
id_info.set(1, "a1, a2");
id_info.set(2, "b1, b2");
id_info.set(3, "c1, c2");
infoById(2, id_info);

//map 5
Map.prototype.add_word = function(uzb, eng){
    this.set(uzb, eng);
}

let dict = new Map();
dict.add_word('mowina', 'car');
dict.add_word('kitob', 'book');
// console.log(dict);

//map 6
function combineMassives(arr, arr2){
    let result = new Map();
    for(let i = 0; i < arr.length; i++){
        result.set(arr[i], arr2[i]);
    }
    // console.log(result);
}

combineMassives([1, 2, 3, 4, 5, 6], ['q', 'w', 'e', 'r', 't', 'y']);

//map 7
Map.prototype.add_count = function(key, value){
    if(this.has(key)){
        this.set(key, +this.get(key) + +value)
    }else{
        this.set(key, 1);
    }
}

let list = new Map();
list.add_count('apple', 1);
list.add_count('watermalon', 1);
list.add_count('apple', 1);
list.add_count('apple', 1);
// console.log(list);

//map 8
Map.prototype.add_count = function(str){
    str = str.split("-");
    let key = str[0];
    let value = str[1];

    if(this.has(key)){
        this.set(key, +this.get(key) + +value)
    }else{
        this.set(key, 1);
    }
}

let list_2 = new Map();
list_2.add_count('apple-1');
list_2.add_count('watermalon-1');
list_2.add_count('apple-1');
list_2.add_count('apple-1');
// console.log(list_2);

// set 1
function sortInSet(arr){
    let result = new Set();
    for(let i = 0; i < arr.length; i++) result.add(arr[i]);
    // console.log(result);
}

sortInSet([1, 2, 3, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6])

//set 2f
function findCommons(arr1, arr2) {
    let result = [];

    for (const item of arr1) {
        if (arr2.includes(item) && !result.includes(item)) {
            result.push(item);
        }
    }

    // console.log(result);
}

findCommons([1, 2, 6, 3, 4, 4, 4, 5], [4, 4, 9, 5, 5, 6, 7, 8]);

//set 3
Set.prototype.add_and_sort = function(arr){
    this.forEach(value => {
        arr.push(value);
    });

    this.clear();

    arr.sort((a, b) => a - b);

    for(const index of arr) this.add(index);

    // console.log(this);
}

let set_list = new Set();
set_list.add(10);
set_list.add_and_sort([1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9, 9]);

//set 4
Set.prototype.getLetters = function(str){
    let arr = str.split("");
    for(const index of arr) this.add(index);
    // console.log(this);
}

let Letters_list = new Set();
Letters_list.getLetters("hello world");

//set 5
function findNotCommons(arr1, arr2) {
    let result = new Set();

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    for(const index of arr1) if(!(arr2.includes(index))) result.add(index);
    for(const index of arr2) if(!(arr1.includes(index))) result.add(index);

    // console.log(result);
}

findNotCommons([1, 2, 6, 3, 4, 4, 4, 5], [4, 4, 9, 5, 5, 6, 7, 8]);

//set 6
Set.prototype.getLetters = function(str) {
    let arr = str.split("");
    for (const index of arr) this.add(index);
    // console.log(this);

    if (this.size !== arr.length) {
        // console.log("There are common letters in the string.");
    }
}

let Letter_list = new Set();
Letter_list.getLetters("hello world");

//set 7
Set.prototype.append = function(arr){
    for(const index of arr)
        this.add(index);
}

Set.prototype.console_log = function(){
    console.log(this);
}

let list_for_append = new Set();
list_for_append.append([1, 2, 3]);
list_for_append.append([3, 4, 5, 6, 7]);
list_for_append.append([6, 7, 8]);
list_for_append.console_log();