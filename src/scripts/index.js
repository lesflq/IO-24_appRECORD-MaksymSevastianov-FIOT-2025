function createProduct(obj, callback) {
    const product = { ...obj, id: Date.now() }; // Додаємо унікальний ID
    callback(product);
}

function logProduct(product) {
    console.log("Product:", product);
}

function logTotalPrice(product) {
    console.log("Total Price:", product.price * product.quantity);
}

const productData = { name: "Laptop", price: 1200, quantity: 2 };

createProduct(productData, logProduct);
createProduct(productData, logTotalPrice);

const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

// Отримуємо поточну дату
const today = new Date();

// Фільтруємо та сортуємо медикаменти
const validMedicines = Object.entries(medicines)
    .filter(([_, date]) => date > today) // Видаляємо прострочені препарати
    .sort((a, b) => a[1] - b[1]) // Сортуємо за датою
    .map(([name]) => name); // Беремо лише назви

console.log(validMedicines);

const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];
  
  const discountFruits = fruits.map((fruit, index) => ({
      ...fruit,
      price: fruit.price * 0.8, // Знижка 20%
      id: index + 1, // Унікальний ідентифікатор
  }));
  
  console.log(discountFruits);
  
  class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    // Геттер для login
    get login() {
        return this.#login;
    }

    // Сеттер для login
    set login(newLogin) {
        if (typeof newLogin === "string" && newLogin.trim().length > 0) {
            this.#login = newLogin;
        } else {
            console.error("Invalid login");
        }
    }

    // Геттер для email
    get email() {
        return this.#email;
    }

    // Сеттер для email
    set email(newEmail) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
            this.#email = newEmail;
        } else {
            console.error("Invalid email format");
        }
    }
}

// Використання:
const client = new Client("user123", "user@example.com");
console.log(client.login, client.email); // user123, user@example.com

client.login = "newUser456";
client.email = "newuser@example.com";

console.log(client.login, client.email); // newUser456, newuser@example.com

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Підрахунок тегів
const tagCount = tweets
    .flatMap(tweet => tweet.tags) // Об'єднуємо всі масиви тегів в один
    .reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1; // Збільшуємо лічильник
        return acc;
    }, {});

console.log(tagCount);

function checkBrackets(str) {
    const stack = [];
    const brackets = { "(": ")", "{": "}", "[": "]" };

    for (const char of str) {
        if (brackets[char]) {
            stack.push(char); // Відкриваюча дужка → додаємо в стек
        } else if (Object.values(brackets).includes(char)) {
            const lastOpen = stack.pop(); // Витягуємо останню відкриту дужку
            if (brackets[lastOpen] !== char) return false; // Перевіряємо пару
        }
    }

    return stack.length === 0; // Перевіряємо, чи стек порожній (усі дужки закриті)
}

// Приклади використання:
console.log(checkBrackets("{[()]}")); // true
console.log(checkBrackets("{[(])}")); // false
console.log(checkBrackets("function test() { return (a + b) * [c / d]; }")); // true
console.log(checkBrackets("function test() { return (a + b * [c / d]; }")); // false

const data = [
    { id: 1, values: [1, 2, 3] },
    { id: 2, values: [4, 5, 6] },
    { id: 3, values: [7, 8, 9] },
];

const mergedValues = data.flatMap(item => item.values);
console.log(mergedValues); 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); 
// Очікуваний результат: true

const stringArray = ["banana", "orange", "apple", "pear"];

const sortedArray = stringArray.sort();
console.log(sortedArray); 
// Очікуваний результат: ["apple", "banana", "orange", "pear"]

class Calculator {
    constructor() {
        this.result = 0;
    }

    number(value) {
        this.result = value;
        return this; // Повертає об'єкт для ланцюжкових викликів
    }

    getResult() {
        return this.result; // Повертає поточний результат
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Ділення на нуль неможливе!");
        }
        this.result /= value;
        return this;
    }
}

// Приклад використання:
const calc = new Calculator();

const result = calc
    .number(10)  // Встановлюємо початкове значення 10
    .add(5)      // Додаємо 5 (10 + 5 = 15)
    .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
    .multiply(4) // Множимо на 4 (12 * 4 = 48)
    .divide(2)   // Ділимо на 2 (48 / 2 = 24)
    .getResult(); // Отримуємо результат: 24

console.log(result); // 24
