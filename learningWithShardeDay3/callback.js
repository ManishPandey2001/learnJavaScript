// 54 	What is a callback function
// 55 	Why do we need callbacks
// 56 	What is a callback hell
// 62 	What is callback in callback

let studentData = {
    name:'MAJA RAJA',
    class: 8,
    rollNo: 45,
    fees:'',
}

const studentData1= {
    name:'Kamla',
    class: 9,
    rollNo: 12,
    fees:'',

    }

function studentDetails(studentData,studentFees){
  console.log(`The Student's name is:${studentData.name} is in Class:${studentData.class} and has Rollno:${studentData.rollNo}`);
  studentFees(studentData);
}

function studentFees(studentData){
    // studentDetails(studentData);
    let fees = (studentData.rollNo*20) + (studentData.class*3000) +2000;
    console.log('Student fees is:',fees);
    studentData.Fees =fees;
    console.log(studentData);
    return fees;
}
studentDetails(studentData,studentFees);// studentfees is a syncoronus callback
setTimeout(()=> studentDetails(studentData1,studentFees),4000);//studentdetails is asyncouros here


let value = 1;
function doSomething(abv){
    console.log('please do someting')
}
doSomething((() => {
  value = 2;
  console.log('heelo',value);
})());

console.log(value);


