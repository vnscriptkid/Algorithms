# Book of Data Structures and Algorithms - 1st Edition

## Chapter 2: Hash Table

### 🔢 What is it?
* __Definition__: Data structure that stores data in terms of key-value pairs. 
* __Hash function__: 
  * The core of hash table, :one: take in the 🔑, :two: doing some computation :three: and then produce a index (where actually data with that key is stored)
  * Must be consistent: one key always results in one index

### ☯️ How is `hash table` different from `array`?
- Arrays are great as it allows fast access using index but in the wild, we normally don't have access to index

![image](https://user-images.githubusercontent.com/28957748/125766269-9cd4665d-f092-4b0a-b6fb-8d28866113c0.png)

- __Hash table__ solves array's problem by building a mapping between __keys__ 🔑 (a identity that defines one unique item in the list) and the actual __values__

![image](https://user-images.githubusercontent.com/28957748/125774070-5015a754-e0e7-459d-ae0a-cdffff9a683b.png)

### ❓ Why do we need hash table?
- Hash table gives us ability to have quick access to data using a key

### ⏰ When you might want to use it?

### 🏗️ Rebuild your own hash table

### 💥 Handling collisions

#### :one: Separate chaining
![image](https://user-images.githubusercontent.com/28957748/125787659-778ace5c-7e9a-4f8a-98f9-62f8ed0fd7e7.png)

#### :two: Linear probing
