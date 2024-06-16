const realObject = {
  name: "mansih",
  age: 34,
  mobile: 304126728,
};

const proxyHandler = {
  set: function (targetObject, property, val) {
    if (property === "age" && typeof val === "number" && val > 0){
      targetObject[property] = val;
      return true;
    }else{
      throw new TypeError("this is error");
    }
  },
};

const middleMan = new Proxy(realObject, proxyHandler);
middleMan.age =-3;
console.log(middleMan);
