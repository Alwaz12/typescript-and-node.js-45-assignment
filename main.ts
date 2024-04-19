//QUESTION 1
let personName="Alwaz";
console.log("hello",personName,"would you like to learn some Typescript today");
//QUESTION 2
let personName="Alwaz";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase());
//QUESTION 3
console.log("alwaz\nALWAZ\nAlwaz");
//QUESTION 4
console.log("Audrey Hypburn once said",'"word IMPOSSIBLE itself say I AM possible"');
//QUESTION 5
let famousPerson="Audery Hypburn";
let message="once said,'Word IMPOSSIBLE itself say I AM POSSIBLE";
console.log(famousPerson,message);
//QUESTION 6
let personName = "\n\t ALWAZ KHAN\t\n";
console.log(personName);
let stripped = personName.trim();
console.log(stripped);
//QUESTION 7/8
console.log(5 +3);
console.log(11 -3);
console.log(4 *2);
console.log(16 / 2);
//QUESTION 9
let favoriteNumber: number = 4;
console.log("My favourite number is ${favouriteNumber}");
//QUESTION 10
let personName = "Alwaz";
Dated:1/4/2024
console.log("hello world simple program");
//QUESTION 11
let members: string[] =["ashraf","sarim","moiz","husnain","sohaib"];
for(let i=0; i<members.length; i++){
  console.log(members[i])
}
//QUESTION 12
let members = ["ashraf","sarim","moiz","husnain","sohaib"];
let message = "kal birthday hai kis ki:";
for (let i=0; i < members.length; i++) {
  console.log(message + members[i]);
}
//QUESTION 13
const myTrans: string [] = ["civic","bike","bus","suzuki jisme cow ho"];
for(let i=0; i <3; i++){
  console.log("I would like to own a${myTrans[i]}");
}
//QUESTION 14
let guest_list: string[] = ["sarim", "ashraf", "moiz", "husnain"];
for (let i = 0; i < guest_list.length; i++) {
  console.log("Respected Sir/Madam" + guest_list[i] +",\nWE invited you on dinner tomrrow.\n\nThankyou\n");
}
//QUESTION 15
let guest_list :  string [] = ["sarim","ashraf","moiz","husnain"];
for(let i=0; i<guest_list.length; i++){
    console.log ("Respected Sir/Madam " + guest_list[i] +",\nWE invited you on dinner tomrrow.\n\nThankyou\n");
}
let not_present : string = 'ashraf';
let new_guest : string = 'alwaz';
guest_list[1] = new_guest
for (let i=0;  i<guest_list.length; i++){
 console.log('Respeted Sir/Madam ' + guest_list[i] +',\nWe invited you on dinnertomorrow.\nThank you\n');
}
console.log('Mr. ${not_present} will not coming tomorrow dinner.')
//QUESTION 16
let guest_list :  string [] = ["sarim","ashraf","moiz","husnain"];
let new_guest : string = 'alwaz';
guest_list[1] = new_guest
for (let i=0;  i<guest_list.length; i++){
 console.log('Respeted Sir/Madam ' + guest_list[i] +',\nWe invited you on dinner tomorrow.\nThank you\n');
}
guest_list.unshift('ali','adnan','idress');
guest_list.unshift('ali','adnan','idress');
 //QUESTION 17
 let guest_list :  string [] = ["sarim","ashraf","moiz","husnain"];
 let not_present : string = 'ashraf';
 let new_guest : string = 'alwaz';
 guest_list[1] = new_guest
 guest_list.unshift('ali','adnan','idress');
console.log('\nUnfortunately we can not arrange big table , Only two people allow.')
while(guest_list.length>2){
 let remove_guest = guest_list.pop();
  console.log('Sorry Sir/Madam.${remove_guest} you are not invited for dinner.');
}
for (let i=0;  i<guest_list.length; i++){
  console.log('Respeted Sir/Madam ' + guest_list[i] +',\nYes you are still invited on tomorrow dinner\nThank you\n');
  }
  guest_list.splice(0,2)
  console.log(guest_list)
 //QUESTION 18
 let places : string [] = ['cape town','delhi','faisalbad','bankok','ahmedabad']
 console.log('original :' + places);
 console.log('copy ' + [...places].sort());
 console.log('original' + places);
 console.log('copy ' + [...places].sort().reverse());
 console.log('copy ' + [...places].sort().reverse());
 console.log('original' + places.sort());
 console.log('original' + places.sort().reverse());
 //QUESTION 19
let invitations : string [] = ['ashraf','moiz']
let count_invitations : number = invitations.length
console.log('${count_invitations} people will come to the dinner')
//QUESTION 20
let country: string[] = ['Pakistan','India','NewYork','China','Japan'];
console.log('List of country:');
console.log(country);
//QUESTION 21
let person: {name: string,fname: string , age: number} = {name:"ALWAZ", fname: "male" , age: 18}
console.log(person)
//QUESTION 22
const days : string [] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
console.log(days{7})
console.log(days[6])
//QUESTION 23
let car = "subaru";
console.log("is car =='subaru'? predict true")
console.log(car == "subaru")
console.log("is car != 'honda city'? predict true")
console.log(car != 'honda city')
console.log("is car == 'subaru'? predict false")
console.log(car == 'subaru')
console.log("is car == 'SUBARU'? predict false")
console.log(car == 'SUBARU')
console.log("is car.length == 6? predict true")
console.log(car.length == 6)
console.log("is car.length == 10? predict true")
console.log(car.length == 10)
console.log("is 10 > 45 ? predict false")
console.log(10 > 45)
console.log("is 72 > 63 ? predict false")
console.log(72 > 63)
console.log("is 52 > 45 ? predict false")
console.log(52 > 45)
console.log("is 63 > 55 ? predict false")
console.log(63 > 55)
console.log("is car == 'subaru' && car.length == 6? predict true ")
console.log(car == 'subaru' && car.length == 6)
//QUESTION 24
let myName = "Ali";
console.log(myName == "Ali");
console.log(myName !== "ali");
let myNumber = 10;
console.log(myNumber == 10);
console.log(myNumber !== 10);
console.log(myNumber > 5);
console.log(myNumber < 5);
console.log(myNumber <= 5);
console.log(myNumber >= 5);
let num1 = 10;
let num2 = 5;
console.log(num1 > 9 && num2 < 5);
console.log(num1 > 9 || num2 < 5);
let myArray = [2 , 3, "Ali"];
let myString = "Alwaz"
console.log(Array.isArray(myArray));
console.log(Array.isArray(myString));
//QUESTION 25
let aleinColor = "green";
if(aleinColor == "green"){
    console.log("player just earned 5 points");
}else{

}
//QUESTION 26
let aleinColor = "green";
if(aleinColor == "green"){
    console.log("the player just earned 5 points");
}else{
    console.log("the player just earned 10 points");
}
if(aleinColor == "white"){
    console.log("the player just earned 5 points");
}else{
      console.log("the player just earned 10 points");
}
//QUESTION 27
let alienColor ="yellow";
if (alienColor == "green") {
    console.log("5 point")
}else if (alienColor == "yellow") {
    console.log("10 points")
}else {
    console.log("15 points")
}
//QUESTION 28
let age : number = 18
if (age < 2) {
    console.log ("you are a baby")
} else if (age < 4) {
    console.log(" you are a toddler")
} else if (age < 13) {
    console.log(" you are a kid")
} else if (age < 20) {
    console.log("you are a teenager")
}  else if (age < 65) {
    console.log("you are a adult")
} else {
    console.log("you are older")
}
//QUESTION 29
let favorite_fruits = ["kivi", "orange", "banana" , "berry", "peach"];
if (favorite_fruits.includes("kivi")) {
    console.log('kivi');
}
if(favorite_fruits.includes("orange")) {
    console.log('orange');
}
if(favorite_fruits.includes("banana")) {
    console.log('banana');
}
if(favorite_fruits.includes("berry")) {
    console.log('you really like bananas')
}
if(favorite_fruits.includes("peach")) {
    console.log('you really like bananas')
}
//QUESTION 30
let users : string [] = ['eric' ,'haseeb','ali','fatima','admin']
for(let user of users){
    if(user === "admin"){
       console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${user},thank you for logging in again`)
    }
}
//QUESTION 31
let users : string [] = ['eric' ,'haseeb','ali','fatima','admin']
if (users.length === 0) {
    console.log ("We need to find some users!")
} else {
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin, would you like to see astatus report?")
        } else {
            console.log(`Hello ${user}, thank you for logging in again`)
        }
    }
}
users = []
if (users.length === 0) {
    console.log ("we need to find some users!")
}
//QUESTION 32
let current_users : string [] = ["Admin", "Eric" , "Ali" , "Hamza","Moiz"]
let new_users : string [] = ["Admin" , "Moiz" , "Ashraf" , "Haseeb", "Noor"]
let current_users_lower : string [] =current_users.map(user => user.toLowerCase())
for (let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLowerCase())) {
        console.log(`sorry ${new_user}, that name is taken`)
    } else {
        console.log(`Yes ${new_user}, is still in available list`)
    }
}
//QUESTION 33
let numbers : number [] =[1,2,3,4,5,6,7,8,9]
for (let number of numbers) {
    if (number === 1) {
        console.log (`${number}st`)
    }else if (number === 2) {
        console.log (`${number}nd`)
    }else if (number === 3) {
        console.log (`${number}rd`)
    } else {
        console.log(`${number}th`)
    }
}
//QUESTION 34
let favorite_pizza : string [] = ["pepperoni" , "chicken" , "veg"]
for (let pizza of favorite_pizza) {
    console.log(pizza)
}
console.log ("\n")
for (let pizza of favorite_pizza){
    console.log(` I really like ${pizza} pizza!`)
}
console.log ("nI really love pizza!")
//QUESTION 35
let animals : string [] = ["cat","lion","dog"]
for (let animal of animals) {
    console.log(animal)
}
console.log ("\n")
for (let animal of animals){
    console.log ( ` A ${animal} has a tall`)
}
console.log ("\n all of these are great pets! but i love cats more")
//QUESTION 36
function makeShirt(size: string, text: string): void {
    console.log(`you order a ${size} shirt that says ${text}`)
}
makeShirt(`large`, '"i love typescript"')
makeShirt(`medium`, '"i need a big shirt"')
//QUESTION 37
function makeShirt(size: string = 'large', text: string = 'I love typescript'): void {
    console.log(`you have order a ${size}, shirt that says ${text}`)
}
makeShirt();
makeShirt('medium')
makeShirt('small', 'I need a big shirt to wear')
//QUESTION 38
function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}`)
}
describe_city('karachi')
describe_city('france', 'europe')
describe_city('lahore', 'punjab')
//QUESTION 39
function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`
}
let c1 = cityCountry('lahore' , 'pakistan')
let c2 = cityCountry('tokyo' , 'japan')
let c3 = cityCountry('paris' , 'france')
console.log(c1)
console.log(c2)
console.log(c3)
//QUESTION 40
function myAlbum(artistName: string, albumTitle: string, numberOfTracks?: number){
    return {artistName, albumTitle, numberOfTracks}
}
let album1 = myAlbum("ali" ,"sarim",30);
console.log(album1);
let album2 = myAlbum("bilal" ,"husnain",55);
console.log(album2);
let album3 = myAlbum("hamza" ,"seenbreez");
console.log(album3);
//QUESTION 41
function show_magicians(magicians:string[]): void {
   for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician: string[] =["ali","sarim","ashraf"];
show_magicians(magician)
//QUESTION 42
let magicianNames = ["Moiz","Sarim","Ashraf","Sohaib"];
function show_magicians(great: string){
    for(let item  of  magicianNames){
        console.log(great, item);
    }
};
show_magicians("Hello, How are you Mr.");   
show_magicians("Hello. ");
//QUESTION 43
let magicianNames = ["Moiz","Sarim","Ashraf","Sohaib"];
let magicianNamesCopy = [...magicianNames];
function show_magicians(greet: string){
    let withGreetings = "";
    for(let item  of  magicianNamesCopy){
        withGreetings += `${greet} ${item}\n`;
    }
    return withGreetings;
};
let myGreetings = show_magicians("HEllo");
let makeArray = myGreetings.split('\n')
console.log(makeArray);
console.log(magicianNames)
//QUESTION 44
function sandwich(...items: string[]): void {
  console.log("sandwich order:")
  for (let i = 0; i < items.length; i++) {
    console.log(`- ${items[i]}`)
  }
}
console.log("enjoy your sndwish alwaz khan")
sandwich('capsicum' , 'tomato' , 'chicken')
sandwich('beef' , 'cheese')
sandwich('garlic chicken' , 'mayo sauce')
//QUESTION 45
type car = {
  manufacture: String
  model: string
  [key: string]: any;
}
function createCar(manufacture: string, model: string, optional: Record<string, any>): car{
  return{
    manufacture,
    model,
    ...optional
  }
}
const mycar: car = createCar("toyota","corolla", { color: "silver" ,year: "2024"})
console.log(mycar)
