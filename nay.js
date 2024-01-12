// task 1

// const user = {
//     name: "Georgiy",
//     age: 13,
//     hobby: 'play Foodball',
//     premium: true
//   };

//   user.mood = 'happy';

//   user.hobby = 'skydiving';

//   user.premium = false;

//   const entries = Object.entries(user);
  
//   for (const [key, value] of entries) {
//     console.log(`${key}: ${value}`);
//   }

// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of.
// Зробити у деструктуризації

// task 2

// function countProps(obj) {
//     const propsCount = Object.keys(obj).length;
//     return propsCount;
//   }
  
//   // Приклад використання:
//   const user = {
//     name: "Georgiy",
//     age: 13,
//     hobby: 'play Foodball',
//     premium: true
//   };
  
//   const numberOfProps = countProps(user);
//   console.log(`Кількість властивостей в об'єкті: ${numberOfProps}`);

//Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
// Функція повертає число — кількість властивостей.
// Зробити у деструктуризації

// task 3

// function findBestEmployee(employees) {
//     let maxTasks = 0;
//     let bestEmployee = '';
  
//     for (const [employee, tasks] of Object.entries(employees)) {
//       if (tasks > maxTasks) {
//         maxTasks = tasks;
//         bestEmployee = employee;
//       }
//     }
  
//     return bestEmployee;
//   }

//   const teamTasks = {
//         Georgiy: 13,
//         Sasha: 11,
//         Tihon: 8,
//         Denis: 10
//   };
  
//   const bestEmployeeName = findBestEmployee(teamTasks);
//   console.log(`Найпродуктивніший співробітник: ${bestEmployeeName}`);

//Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого 
// (який виконав більше всіх задач). Співробітники і кількість виконаних завдань 
// містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
// Зробити у деструктуризації

// task 4

// function countTotalSalary(employees) {
//     let totalSalary = 0;
  
//     for (const [, salary] of Object.entries(employees)) {
//       totalSalary += salary;
//     }
  
//     return totalSalary;
//   }
  
//   // Приклад використання:
//     Homs: 5000,
//     Watson: 4000,
//     Moriarti: 3000,
//     Monalit: 3000
//   };
  
//   const totalSalary = countTotalSalary(salaries);
//   console.log(`Загальна сума зарплати: ${totalSalary}`);

//Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. 
// Функція рахує загальну суму зарплати працівників і повертає її.
// Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
// Зробити у деструктуризації

// task 5

// function getAllPropValues(arr, prop) {
//     const propValues = [];
  
//     for (const obj of arr) {
//       if (prop in obj) {
//         const { [prop]: value } = obj;
//         propValues.push(value);
//       }
//     }
  
//     return propValues;
//   }

//   const products = [
//     { name: 'Laptop', price: 1200 },
//     { name: 'Smartphone', price: 800 },
//     { name: 'Tablet', price: 500 }
//   ];
  
//   const prices = getAllPropValues(products, 'price');
//   console.log(`Масив цін продуктів:`, prices);

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
// Зробити у деструктуризації

// task 6

// function calculateTotalPrice(allProducts, productName) {
//     for (const { name, price, quantity } of allProducts) {
//       if (name === productName) {
//         return price * quantity;
//       }
//     }
//     return null; // Повертає null, якщо продукт не знайдено в масиві
//   }
  
//   // Приклад використання:
//   const products = [
//     { name: 'Laptop', price: 1200, quantity: 2 },
//     { name: 'Smartphone', price: 800, quantity: 3 },
//     { name: 'Tablet', price: 500, quantity: 1 }
//   ];
  
//   const totalCost = calculateTotalPrice(products, 'Smartphone');
//   console.log(`Загальна вартість продукту: ${totalCost}`);
  
//Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту 
//(значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Зробити у деструктуризації

// task 7

const account = {
    balance: 1000,
    transactions: [],
  
    deposit(amount) {
      this.balance += amount;
      this.addTransaction(amount, 'deposit');
      console.log(`Поповнення рахунку на ${amount} грн. Загальний баланс: ${this.balance} грн.`);
    },
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log('Недостатньо коштів на рахунку.');
      } else {
        this.balance -= amount;
        this.addTransaction(amount, 'withdraw');
        console.log(`Зняття ${amount} грн. Загальний баланс: ${this.balance} грн.`);
      }
    },
  
    getBalance() {
      console.log(`Поточний баланс: ${this.balance} грн.`);
    },
  
    getTransactionHistory() {
      console.log('Історія транзакцій:');
      for (const { type, amount, date } of this.transactions) {
        console.log(`${date} - ${type}: ${amount} грн.`);
      }
    },
  
    addTransaction(amount, type) {
      const date = new Date().toLocaleString();
      this.transactions.push({ type, amount, date });
    }
  };
  
  // Приклад використання:
  account.deposit(500);
  account.withdraw(200);
  account.getBalance();
  account.getTransactionHistory();

// Напиши сценарій керування особистим кабінетом інтернет-банку. 
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
// Зробити у деструктуризації