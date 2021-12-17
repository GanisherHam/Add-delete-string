// методы в массивах

// push() - добавляет элемент в конец массива

// let arr = [1,2,3,4,5,6,7,8,9,10]

// arr.push(11);
// console.log(arr);

// for(let i = 0; i < 10; i++){
//     arr.push(i)
// }
// console.log(arr);

// pop() - удаляет элемент с конца массива

// let arr = [1,2,3,4,5,6,7,8,9,10]

// arr.pop();
// console.log(arr);

// unshift() - добавляет элемент вначало массива

// let arr = [1,2,3,4,5,6,7,8,9,10]

// arr.unshift(100);

// console.log(arr);

// shift() - удаляет элемент сначало массива

// let arr = [1,2,3,4,5,6,7,8,9,10]

// arr.shift();

// console.log(arr);


// splice() - удаляет элемент под определленным индексом

// let names = ['Alex', 'John', 'Ivan', 'Marina']

// names.splice(1, 1);

// console.log(names);

// slice() - создает новый массив(копию) и изменяет его.

// let fruits = ['apple', 'orange', 'banan', 'plum', 'pineapple']

// let result = fruits.slice(2);

// console.log(result);

// reverse() - переворачивает массив наоборот.

// let fruits = ['apple', 'orange', 'banan', 'plum', 'pineapple']

// fruits.reverse();

// console.log(fruits);

// split() - делает из строки массив

// let str = 'hello world!'

// let res = str.split(', ');

// console.log(res);

// join() - из массива делает строку

// let names = ['Alex', 'John', 'Ivan', 'Marina']

// let res = names.join(', ');

// console.log(res);

// forEach() - метод для перебора массива

// let fruits = ['apple', 'orange', 'banan', 'plum', 'pineapple']

// fruits.forEach(function(item){
//     console.log(item);
// });

// sort() - сортирует массив

// let num = [1,234,534,657,89,3]

// num.sort(function(a,b){
//     return a - b
// })

// console.log(num);

// let arr = ['арбуз', 'Вышня', 'бананы']

// arr.sort();

// console.log(arr);

// map() - создает новый массив (копию) и изменяет

// let names = ['IVan', 'jOhn', 'alEx', 'mariaNa']

// toLowerCase() - переводит строку в нижний регистр
// toUpperCase() - переводит строку в верхний регистр
// 

// let res = names.map(name => name.toLowerCase())

// console.log(res);

// filter() - фильтрует элемент массива

// let arr = [
//     {
//         name: 'Alex',
//         age: 20
//     },
//     {
//         name: 'John',
//         age: 50
//     },
//     {
//         name: 'Ivan',
//         age: 25
//     },
//     {
//         name: 'Alice',
//         age: 40
//     }
// ]

// for(let key in arr){
//     if(arr[key].age > 30){
//         console.log(arr[key].age);
//     }
// }

// arr.forEach(item => {
//     if(item.age < 30){
//         console.log(item.name, item.age);
//     }
// })

// let res = arr.filter(item => item.age < 30)

// console.log(res);

// every/some 

// let arr = [4, 'asdsa', 'asdasdas']

// console.log(arr.some(item => item === 'string')); /*  выводит true если хоть один элемент массива подходит */
// console.log(arr.every(item => item === 'number')); /* выводит true в том случае когда каждый элемент массива подходит под условие */

let arr = [];

for(i = 0; i < Infinity; i++){
    a = prompt('Вопросы ответы все')
    b = a.split(' ');
    if(b[0] == 'add' || b[0] == 'add,'){
        arr.push(b[1])
        console.log('элемент ' + b[1]);
    }else if(b[0] == 'del' || b[0] == 'del,'){
        for(let key in arr){
            if(b[1] == arr[key]){
                arr.splice(key, 1)
            }
        }
        console.log('удалил ' + b[1]);
    }
    if(a == 'stop' || a == 'Stop'){
        break;
    }
}
    console.log(arr);
        

