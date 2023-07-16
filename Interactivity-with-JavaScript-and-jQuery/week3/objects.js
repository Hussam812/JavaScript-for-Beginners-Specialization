//objects can contain arrays and other objects

var person ={
    firstname :"John",
    lastname : "Smith",
    pets: ["dog", "cat", "chicken", "llama"],
    phonenumber: {
        home: "916-123-4567",
        work: "916-432-8765",
        cell: "916-456-7890"
    }

};

//console.log(person.firstname);
//console.log(person.pets[2]);
//console.log(person.phonenumber.work);


//objects can contain functions

//person.greeting = function(){console.log("hello!")};

//person.greeting();

person.greeting = function(){
    console.log(`Hello ${this.firstname} ${this.lastname}`)
};

//person.greeting();

//object constructor

function Person(first, last, age, eye){
    this.fisrtName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");

var myMother = new Person("Sally", "Rally", 48, "green");


//console.log(myFather);

//putting objects and functions together

function printableMessage(){
    var message = "Hello!";

    function printMessage(){
        console.log(message);
    }

    function setMessage(newMessage){
        message = newMessage;
    }
    return {
        printMessage: printMessage,
        setMessage: setMessage,
    }
}

var awesome1 = printableMessage();
awesome1.printMessage();

var awesome2 = printableMessage();
awesome2.setMessage("Hi");
awesome2.printMessage();