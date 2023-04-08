// let toggleButton=document.getElementById('btn')
// toggleButton.onclick=()=>{
//     toggleButton.addEventListener('click',()=>{
//         toggleButton.classList.toggle('hidden')
//         toggleButton.classList.toggle('visible')
//     })
// }
// let a=(...a)=>{
//     let b=0;
//     for (let n of a ){
//         b+=n
//     }
//     return b;
// }
// console.log(a(1,2,5,7,9,1));
/**************************** */
// starts with and ends with /
/**********************************/
// let myName= 'mostafa mohamed taha'
// console.log(myName.startsWith('m',0));
// console.log(myName.endsWith('a',myName.length));

/**********************************/
// let a= `mostafa mohamed taha \n`
// console.log(a.repeat(3));
// console.log(a.includes(`mohamed`));
/****************************** */
// let name='a',age='a',gender='a';
// let user = {
//     name: 'mostafa',
//     age: 36,
//     gender: 'male',
// }

// ({ name , gender, age } = user)
// console.log(`my name is ${name}
// my age ${age}
// my gender ${gender}`)

/****************************** */
// let b=['mostafa']
// let a=new Set(...b)

// console.log(a);
// console.log(a.has('a'));
// console.log(a.size);
// console.log(a.clear(),a.add('mostafa'));
// console.log(a);
/****************************** */
// let a=new Map([
//     ['name','mostafa'],
//     ['password','password'],
//     [{html:'s',css:'h'},'skills'],
//     [function hello(){console.log('hello');},'function']
// ])
// console.log(a);
// console.log(a.get('name'));
// console.log(a.has('name'));
// a.delete('name');
// console.log(a);
// a.clear();
// console.log(a);
// a.set(['name','mostafa'])
// console.log(a);
/****************************** */
// let a=new Set([1,2,3,4,5])
// a.forEach((e1,e2)=>{console.log(`${e2} => ${e1}`);});
// console.log(a);
/****************************** */
// let a=new Map([
//     ['a',1],
//     ['s',2],
//     ['sd',4],
//     [{html:'as'},5],
// ])
// a.forEach((el,key)=>{
//     console.log(`${el} => ${key}`);
// })
/****************************** */
// let a=Symbol();
// let b={
//     user:'mo',web:'he',[a]:'hidden'
// }
// console.log(b);
// for(let val of Object.entries(b)){
//     console.log(val);
// }
// console.log(Object.keys(b));
// console.log(Object.getOwnPropertyDescriptor(b));
// console.log(Object.getOwnPropertyNames(b));
// console.log(Object.getOwnPropertySymbols(b));
// console.log(JSON.stringify(b));
/****************************** */
// let a=new WeakSet([{html:'1',css:'2'},{js:'1',tailwind:'2'}]) //can't add any data but Object
// console.log(a);
// a.add({hi:'mo'})  can't add or delete
// a.delete('html')
// a.forEach((e1,e2)=>{ can't use loop
//     console.log(`${e1} => ${e2}`);
// })
//deleted by memory
/****************************** */
// for of loop have Symbol.iterator and next() [string,map,arr]
// let arr=[1,2,3,4,5]
// let a='john wick'
// for(let char of arr){console.log(char);}
/****************************** */
// let a={
//     name:'mo',
//     age:'26',
//     country:'egy',
//     course:'js',
//     [Symbol.iterator](){
//         let i=0;
//         let props=Object.keys(this)
//         return{
//             next(){
//                 return{
//                     value:a[props[i]], //props[i]
//                     done:i++===props.length
//                 }
//             }
//         }
//     }
// }
// for (let i of a){console.log(i);}
/******************************/
// function * a(num){
//     for(let i=0;i<=num.length;i++){
//         yield num[i];
//     }
// }
// let arr=[1,2,3,4,5]
// let b=a(arr)
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());
/******************************/
// let a=()=>{
//     console.log(11);
//     console.log(12);
//     console.log(13);
// }
// console.log(a);
// function* a(){
//     yield * [1,2,3]
// }
// let b=a()
// console.log(b);
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());
// console.log(b.next());
/******************************/
// function* a(){yield * [1,2,3,4]}
// function* b(){yield * ['a','b','c','d']}
// function* c(){yield * a();yield * b();}
// let d=c();
// console.log(d.next());
// console.log(d.next());
// console.log(d.next());
// console.log(d.next());
// console.log(d.next());
// console.log(d.next());
// console.log(d.next());
// console.log(d.next());
// console.log(d.next());
/******************************/
// import {a,arr,hello} from './app.js'
// console.log(a);
// console.log(arr);
// console.log(hello('mo'));
/******************************/
// let a=[1,2,3,4,5,6]
// let b=Array.of(100)
// let c=Array.from(a,el=>el-1)
// let d=a.fill(100,3,5)
// console.log(d);
// console.log(c);
// console.log(b);
// console.log(a.find(el=>el>2));
// console.log(a.findIndex(el=>el>2));
// console.log(a.copyWithin(0,2,4));
/******************************/
// class user {
//   constructor (name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   a = () => console.log(`${this.name} your age is ${this.email}`)
// }
// let user1=new user('mo',26)
// console.log(user1.a());
// class admin extends user{
//     constructor(name,email){
//         super(name,email)
//     }
// }
// let adminUser=new admin('mos',22)
// console.log(adminUser.a());
/******************************/
// stack - api -queue - event loop from queue to stack
// console.log(1);
// console.log(12);
// window.setTimeout(()=>{console.log(14);},0)
// console.log(13);
/******************************/
//promises
// let a= new Promise((res,rej)=>{
//     let connect=false;
//     connect===true?res('ok'):rej('no')
// }).then(res=>console.log(res),rej=>console.log(rej))
/******************************/
// let req=(apiUrl)=>{
//     return new Promise ((res,rej)=>{
//         let req1=new XMLHttpRequest();
//         req1.onload=()=>{
//             req1.readyState===4 && req1.status===200
//             ?res('ok')
//             :rej('no')
//         }
//         req1.open('GET',apiUrl,true);
//         req1.send()
//     })
// }
// req('https://api.publicapis.org/entries').then(
//     (result)=>console.log(result),
//     (error)=>console.log(error),
// )
/******************************/
// let a=new Promise((res,rej)=>{
//     let b=[1,2,3,4,5,6];
//     res(b)
// }).then((res)=>{console.log(res);return res})
// .then((res)=>{console.log(`${res[0]}`); return res})
// .then((res)=>{console.log(`${res[res.length-1]}`); return res})
/******************************/
// fetch('https://api.publicapis.org/entries').then((res)=>{
//     let a=res.json();
//     console.log(a);
//     return a
// }).then((repo)=>{
//     console.log(`${repo.length}`);
//     return repo
// })
/******************************/