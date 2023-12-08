//add a reference to the module... 
const testModuleVar = require('./testModule');
const testModuleStat = require('./StaticModule');
const testModuleClass = require('./classTest');
//call the function name ... 
console.log('Results: ' + testModuleVar.name());
console.log('Results: ' + testModuleVar.age());
testModuleVar.setPetName("Santiago");
console.log('Results: ' + testModuleVar.getPetName());
console.log('Results: ' + testModuleVar.sabineVar);
testModuleVar.sabineVar =testModuleVar.sabineVar+20;
console.log('Results: ' + testModuleVar.sabineVar); 
//use the static ...

console.log(testModuleStat);

testModuleStat.passMessage("testMessage");
testModuleStat.passMessage("testMessage_2");
testModuleStat.passMessage("testMessage_3");



//using "classes" -> no we are not having to "invoke" -> gives us a REF to the base definition....
//The require statement gives you what many other languages call the base type.
console.log(testModuleClass);

//make two seperate instances..
let instA = new testModuleClass();
console.log(instA);
instA.passMessage("testMessage Again");
instA.passMessage("testMessageTwo Again");
instA.printMessages();
console.log(instA);


let instB = new testModuleClass();
console.log(instB);
instB.passMessage("testMessageOnB Again");
instB.printMessages();
console.log(instB);
// next var
// const testModuleStatTwo = require('./staticModule');
// console.log(testModuleStatTwo);
// testModuleStatTwo.passMessage("testMessage");
// testModuleStatTwo.passMessage("testMessage_2");
// testModuleStatTwo.passMessage("testMessage_3");

