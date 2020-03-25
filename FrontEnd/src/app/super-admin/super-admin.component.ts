import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent implements OnInit {
  xeroxCount: any;
  constructor() { }

  ngOnInit() {
    //this.isValid = false;
    //this.samplefunction('ash');
    //this.timeoutFunction();
    //this.setFunction();
    //this.mapFunction();
    //this.sortFunction();
    //this.palindromFunction();
    //this.objectAssignFunction();
    //this.removeArrayFunction();
    //console.log("callbackFunction:::::",this.callbackFunction(1,2,this.sub));
    //this.arrayAndObjectFunction();
    //this.forOfAndForIn();
    //this.forEachFunction();
    //this.testFunction();
    //this.globalAndLocalVariable();
    //this.seprateStrintAndNumber();
    //this.filterFunction();
    //this.splitString();
    //this.countVowelsRegex();
    //this.firstLetterUpperCase("hello babu ashraf");
    //this.indexAndValueArry();
    //this.indexAdd();
    //this.test();
    //var closer = this.functionOne(99);
    //closer(); 
  }
  count (event) {
    console.log(event.data);
    let xeroxCount = event.data;
  }
  // functionOne (age) {
  //   var msg = age;
  //   return function two () {
  //     console.log(msg);
  //   }
  // }
  test(){
    let str = 'ashraf'
    let split = str.split('');
    let mt = [];
    split.forEach(value => {
      if( value == 'a') {
        return;
      } else {
        mt.push(value);
      }
    });
         console.log(mt.join(''));
  }
  indexAdd() {
    let array = [1,2,3,4,5];
    array.forEach((value,index) => {
      if(index || index == 0) {
        let current = array[index] + array[index-1] || array[index];
        console.log(current);
      }
    });
  }

  firstLetterUpperCase (str) {
    let split = str.split(" ");
    let array = [];
    split.forEach((value) => {
    array.push(value.charAt(0).toUpperCase() + value.slice(1));
    });
    console.log(array.join(' '));
  }
  indexAndValueArry() {
    let arrayOne = [0,2,3,4,5];
    let arrayTwo = ['a','b','c','d'];
    let arraysort = arrayOne.sort();
    let arraylength = arraysort.length;
    let outPut = [];
    arrayOne.forEach((value,index) => {
      const isAvailable = arrayOne.find(element => {return value === element});
        if(isAvailable || isAvailable===0) {
          console.log(index);
          console.log(arrayTwo[isAvailable]);
        }
    });
    // for(let i=0; i <= arraylength; i++) {
    //   let data = '';
    //   const isAvailable = arraysort.find((element) => {return i === element});
    //   if(isAvailable || isAvailable === 0) {
    //     data = arrayTwo[isAvailable] || '';
    //   }
    //   outPut.push(i + data);
    // }
    console.log("!!!:::",outPut);
  }

  twoArrayFunction() {
    const array1 = [0, 1, 3, 2, 5];
    const array2 = ['babu', 'asraf', 'ragaul'];
    const a = Math.max(...array1)
    const newarray =[];
    for(let i=0; i < a; i++) {
    let data = '';
    const findarray = array1.find((element)=> {
      return i === element
    });
    console.log("findArray::::",findarray);
      if(findarray || findarray === 0) {
      data = array2[findarray] || '';
      }
      newarray.push(i + data )
    }
    console.log(newarray);
  }

  countVowelsRegex() {
    let text = 'Ashraf';
    let matchingInstances = text.match(/[aeiou]/gi);
    if(matchingInstances) {
         console.log(matchingInstances.length);
        return matchingInstances.length
    } else{
        return 0
    }
} 

  splitString() {
    let str = "ashraf_12_45"
    let value = str.split('_');
    console.log(":::::::",value[1]);
  }

  filterFunction() {
    let arr = [5,9,10,3,13,15,8];
    let index = arr.length - 1;
    const bigEl = arr[index];
    let data = arr.filter((value)=> {
      return value >= bigEl;
      
    })
    console.log(data);
  }

  samplefunction(str) {
    let newString = "";
    // let splitFunction = str.split('');
    // let reverseFunction = splitFunction.reverse();
    // let joinFunction = reverseFunction.join();
    for (let i = str.length-1; i>=0;i--) {
      newString += str[i];
    }
    console.log(newString);
  }

  seprateStrintAndNumber() {
    let parts = ['a',2,5,6,7,'t'];
    let stringArr = [];
    let numberArr = [];
    parts.forEach((value,index) => {
      if(typeof(value) == 'string') {
        stringArr.push(value);
      } else {
        numberArr.push(value);
      }
    });
    console.log("TestString::::::",stringArr); // prints "def"
    console.log("TestNumber::::::",numberArr); // prints "def"
  }

  globalAndLocalVariable() {
    var b = 10;
    function a(){
      var b = 0;
    }
    a();
    console.log("test::::",b);
  }

  testFunction (){
    let sum = (x: number, y: number): any => { 
      return x + y; 
      } 
      console.log(sum(10, 1)); //returns 30
  }
  forEachFunction() {
  // Type One
    // let arr = ["ashraf","Ali"];
    // let arr2 = [];
    // arr.forEach((arr,index) => 
    //  { console.log("ForEach:::",arr)});
  //Type two
    var a = [1,2,3,4];
    let splitList;
    a.forEach((value,index) => {
     if(value <= a.length)
      //splitList = ('[') + value + (']');
      console.log("ForEach:::",index, value);
    });
  }

  forOfAndForIn() {
    let arr = [2,4,6];
    for(let value in arr){
      console.log("IN:::::",value);
    }
    for(let value of arr){
      console.log("OF:::::",value);
    }
  }
  arrayAndObjectFunction() {
    let arr = ['one','two'];
    //let obj ={...arr}
    //let obj = Object.assign({},arr);
    //let addArray = arr.splice(0,2);
    //let inc = arr.includes('three');
    console.log("testFunction::::",1);
  }

  callbackFunction(a,b,callback) {
    return callback(a,b);
  }
  // add - callbackFunction
  add (a,b) {
    return a+b;
  }
  // sub - callbackFunction
  sub (a,b) {
    return a-b;
  }

  removeArrayFunction() {
    //let arr = [1,2,3,4,5,6,7,8,9,0];
    //let arr  = ["ash","raf","df","jk"]
    //let removedArr = arr.splice(0,2); //output : 3,4,5,6,7,8,9,0
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for( var i = 0; i < arr.length; i++){ 
      if ( arr[i] === 1) {
        arr.splice(i, 1); 
      }
    }//=> [1, 2, 3, 4, 6, 7, 8, 9, 0]
    console.log(arr);
  }
  objectAssignFunction() {
    let obj1 = { a: 10, b: 10, c: 10 }; 
    let obj2 = { b: 20, c: 20 }; 
    let obj3 = { c: 30 }; 
    let newObject = Object.assign(obj1,obj2,obj3);
    console.log(newObject);
  }
  
  palindromFunction() {
    let str = 'asah';
    // let a = str.split('');
    // console.log("a",a);
    // let b = a.reverse();
    // console.log("b",b);
    // let c = b.join('');
    // console.log("c",c);
    // let d = str == c;
    // console.log("d",d);
    console.log(str == str.split('').reverse().join(''));
  }
  sortFunction() {
    let numbers = [85, 83, 29, 70, 4, 0, 17, 8, 55];
    console.log(numbers.sort());
  }

  mapFunction(){
    //  let mapValue = new Map([
    //   ['cucumber', 500],
    //   ['cucumber', 500],
    //   ['tomatoes', 350],
    //   ['onion',    50]
    // ]);
    // mapValue.set('ashraf',200);
    // for(let s of mapValue.keys()){
    //   console.log(s);
    // }
    let arr =[4,6];
    const obj = arr.map((value,index)=>{
      return {index,value};
    });
    // for(let o of obj){
    //   console.log(o);
    // }
    Object.keys(obj).forEach((key,index)=> {
      console.log(key,obj[key]);
    })
   }
   
  setFunction() {
    let one =[1,2,3];
    let two =[3,4,5];
    let set = new Set([...one,...two]);
    //let set = new Set(["oranges", "apples", "bananas","ashraf","ashraf"]); // Remove Duplicate value
    set.forEach((value, index) => { console.log('After:::::',value) });
  }
  
  timeoutFunction() {
    //setTimeout
    for (var i = 1; i < 5; i++) { // if user var 
      setTimeout(() => console.log(i), 1000)  // output : 5 5 5 5
    }
  } 

}
