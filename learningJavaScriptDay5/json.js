const ObjectJson = {
    name: 'Rahul',
    class: 8,
    rollno: 36,
}

const jsonObject = JSON.stringify(ObjectJson);
console.log(jsonObject);

const backToObjectJson = JSON.parse(jsonObject);
console.log(backToObjectJson);