function iphone(){}
iphone.prototype.faceId = function(){
    console.log("unlock my phone with face!");
}

iphone.prototype.video = function(){
    console.log("take 4k video with my iphone");
}

iphone.prototype.stocksApp = function(){
    console.log("find out what the stock market is doing");
}


let myPhone = new iphone();
myPhone.faceId();
myPhone.video();
myPhone.stocksApp();

myPhone.app = "instagram";

console.log(myPhone);

myPhone.stocksApp = function(){
    console.log("upgrade to Pro version");
}

myPhone.stocksApp();
console.log(myPhone);

myPhone.stocksApp = undefined;

myPhone.stocksApp;
console.log(myPhone);

const myArray = ['banana', 'peach', "apple"];
console.log(myArray);

const carManufacturer = {
    name: "Honda",
    model: "Accord",
    trimLevel: "ex",
    baseFeatures: ["wheels", "engine", "seats"],
    entertainment: "crappy audio system"
}

const dealership = Object.create(carManufacturer);

dealership.equipment = "roof rack";
dealership.warranty = "extended";
dealership.branding = "license plate frame";

const myCar = Object.create(dealership);

myCar.custom = "after market trailer hitch";
myCar.bumperSticker = "Save the Llamas!";
myCar.entertainment = "fancy audio system";



console.log(myCar.model);
console.log(myCar.branding);
console.log(myCar.entertainment);

console.log("######################################")

for (const key in myCar){
    const val = myCar[key];
    console.log(`kay is "${key}" and value is "${val}"`);
}