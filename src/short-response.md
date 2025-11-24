# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming? 

Provide a code snippet to illustrate _encapsulation_.

## Response 1
Encapsulation refers to the idea of bundling related data and the functions that work with that data into one unit, usually an object or a class. It also means controlling access to that data so it cant changed in unexpected ways.
 
 ```js
 class bank account {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }
 }
getBalance(){
  return this.#balance;
}
const myAccount = new BankAccount();
myAccount.deposit(100);
console.log(myAccount.getBalance());
---



## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2
In the code above `this` refers to `count` We have a class called counter and the purpose of this class is simply to count, So when `this.count = 0` is written it is being programmed to start at a number and will increment whenever there is a new count to add. So `this` is a special keyword in JavaScript that refers to the object that is currently using or calling a function.
Think of this as a placeholder that changes depending on how a function is called.
---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3
In OOP **polymorphism** means different subclasses override the same method from the parent class. Each subclass provides its own implementation of parent class. JavaScript automatically invokes the appropriate version of the method based on the object’s actual type. This allows the code to treat all methods as their own, while still accessing the same information.

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4
Inheritance is when one class is able to use the properties and methods of another class without having to rewrite them. It’s like the new class gets a “head start” because it already has the basic features built in. This helps developers avoid repeating the same code over and over. Without inheritance, we would have to copy the same functions into every similar class, which would make the code messy and harder to update. So one advantage of using inheritance is that it reduces repetition. Instead of writing the same properties and methods three separate times for cats, dogs, and birds, we put the shared code in one place (the Pet class). This makes the code easier to maintain if we ever want to change how pets sleep or add a new common property, we only update it in one class instead of three.


I would start by creating a base class called Pet. This class would contain all the properties and behaviors that every pet has in common such as name, energy, happiness, and the `sleep()` method.
Then I would create subclasses for each specific type of pet: Cat, Dog, and Bird. These subclasses would inherit everything from the Pet class so they automatically have name, energy, happiness, and `sleep()`.
Each subclass would also have its own special behavior:
Cat would add a `hunt()` method
Dog would add a `chase()` method
Bird would add a `fly()` method
This way, the shared code stays in the Pet class, and each specific pet type only defines what makes it unique.