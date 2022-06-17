// Класна робота

// Створіть функцію-конструктор Calculator, який створює об'єкти з трьома методами:
// 1. read () запитує два значення за допомогою prompt і зберігає їх значення у властивостях об'єкта.
// 2. sum() возвращает сумму введённых свойств.
// 3. mul() возвращает произведение введённых свойств.

function Calculator() {

    this.read = function() {
      this.a = +prompt('Enter first value');
      this.b = +prompt('Enter second value');
    };

    Calculator.prototype.sum = function() {
      return this.a + this.b;
    };
  
    Calculator.prototype.mul = function() {
      return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

document.write(`sum = ${calculator.sum()}; </br>`);
document.write(`mul = ${calculator.mul()}; </br>`);




//Домашня робота

// Розробіть функцію-конструктор, яка буде створювати об'єкт Human(людина) створіть масив об'єктів і реалізуйте функцію, яка буде сортувати елементи масиву за значенням властивості Age за зростанням або за спаданням.

function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.eldest = function(mensArr) {
	let maxAge = 0;
	mensArr.forEach(function(human) {
  	if (human.age > maxAge)
    	maxAge = human.age;
  });
	document.write(`Найбiльший вiк - ${maxAge}; </br>`);
};

let human = new Human();
let mensArr = [];
mensArr.push(new Human("Petro", 28));
mensArr.push(new Human("Vasil", 22));
mensArr.push(new Human("Bogdan", 25));
mensArr.push(new Human("Volodymir", 36));
  
human.eldest(mensArr);


// Розробіть функцію-конструктор, яка буде створювати об'єкт Human, додайте на свій розсуд властивості і методи в цей об'єкт.
// Подумайте, які методи і властивості слід зробити рівня екземпляра, а які рівня функції-конструктора.

/* Відповідаючи на питання 3 завдання.
Якщо, наприклад, функція-конструктор виконує якусь просту дію, то методи і властивості можна додавати рівень екземпляра.
Конкретно на прикладі мого завдання, я додав властивості тільки в екзмемляр, а методи виніс в окрему функцію-прототип.
Це було зроблено для зручності роботи з кодом, відповідно до теорії кожна функція повинна виконувати одну дію.
У функції Human Custom (name, surname, age, of, hometown) я приймаю властивості, у функції HumanCustom.prototype.show = function () я працюю з властивостями.*/

function HumanCustom(name, surname, age, job, hometown) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.job = job;
    this.hometown = hometown;
};


let human_js_developer_Petro = new HumanCustom('Petro', 'Avdeenko', '25', 'JS-developer', 'Kharkiv');
let human_js_developer_Volodymir = new HumanCustom('Volodymir', 'Adamchuk', '37', 'JS-developer', 'Kyev');
let human_js_developer_Andriy = new HumanCustom('Andriy', 'Gorbatyuk', '41', 'JS-developer', 'Zaporozhye');



HumanCustom.prototype.show = function() {
    let info_output_developer_Petro = Object.values(human_js_developer_Petro);
    let info_output_developer_Volodymir = Object.values(human_js_developer_Volodymir);
    let info_output_developer_Andriy = Object.values(human_js_developer_Andriy);

    document.write(`${info_output_developer_Petro.join(', ')}; </br>`);
    document.write(`${info_output_developer_Volodymir.join(', ')}; </br>`);
    document.write(`${info_output_developer_Andriy.join(', ')}; </br>`);
};


let mens = new HumanCustom();
mens.show();