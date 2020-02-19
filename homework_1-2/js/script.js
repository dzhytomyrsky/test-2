// this не ссылается на саму функцию
// function foo (num) {
//     console.log('foo: ' + num );

//     this.count++;
// }

// foo.count = 0;

// for (var i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo.call(foo, i);
//     }    
// }

// console.log(foo.count);
// function foo (num) {
//     console.log(num);

//     this.count++;
// }

// foo.count = 0;

// for (let i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo.call(foo, i)
//     }
// }

// console.log(foo.count);

// this не ссылается на область видимости
// "Объект" области вилимости не доступен в JS коде. 
// Это внутренняя часть механизма реализации языка (интерпритатора) 

// function baz () {
//     var a = 2;
//     this.bar();
// }

// function bar () {
//     console.log(this.a);
// }

// baz();

// function a1 () {
//     var a = 2;
//     this.a2();
// }

// function a2 () {
//     console.log()
// }

// В действительности this — это привязка, которая создается во время вызова функции,
// и на что она ссылается определяется тем, где и при каких условиях функция была вызвана.

// function baz () {
//     // стек вызова - только baz(), так что точка вызова - глобальная область видимости
//     console.log('baz');

//     bar(); // <-- точка вызова для bar()
// }

// function bar () {
//     // стек вызовов: baz() --> bar(), по этому точка вызова - baz();
//     console.log('bar');

//     foo(); // <-- точка вызова для foo()
// }

// function foo () {
//     debugger;

//     // стек вызовов: baz() --> bar() --> foo()
//     // по этому точка вызова - bar();

//     console.log('foo');
// }

// baz(); // точка вызова - глобальная область видимости


// function foo () {
//     console.log(this.a);
// }

// var a = 2;

// foo();

// function foo () {
//     console.log(this.a);
// }

// var obj2 = {
//     a   : 42,
//     foo : foo
// }

// var obj1 = {
//     a    : 2,
//     obj2 : obj2 
// }

// obj1.obj2.foo();


// var obj = {
//     a   : 2,
//     foo : function () {
//         console.log(this.a);
//     },
// }

// var bar = obj.foo;

// var a = "ой, глобальная";

// bar();

function foo () {
    console.log(this.a);
}

function doFoo (fn) {
    fn(); // <-- точка визова
}

var obj = {
    a: 2,
    foo: foo,
}

var a = 'ой, глобальная';

doFoo( obj.foo );