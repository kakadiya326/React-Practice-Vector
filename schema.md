# Complete Guide to Mongoose Models for MERN Stack (Beginner → Advanced)

This document summarizes **all core Mongoose model concepts** required for real MERN stack backend development.

---

# 1. What is a Schema and Model in Mongoose

MongoDB is **schema-less**, meaning documents in the same collection can have different structures.

Example MongoDB documents:

```json
{ "name": "John", "age": 20 }
{ "name": "Laptop", "price": 50000 }
```

This causes **data inconsistency**.

Mongoose solves this using **Schemas**.

## Schema

A **Schema defines the structure of documents**.

It specifies:

* Fields
* Data types
* Validation rules

Example:

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});
```

## Model

A **Model is a class created from a Schema** used to interact with the database.

Operations:

* Create documents
* Read documents
* Update documents
* Delete documents

Example:

```javascript
const User = mongoose.model("User", userSchema);
```

Insert document:

```javascript
const user = new User({
  name: "John",
  age: 25
});

await user.save();
```

Flow:

```
Schema → Model → Database Operations
```

---

# 2. Basic Schema Syntax

## Simple Syntax

```javascript
const userSchema = new mongoose.Schema({
  Name: String,
  Age: Number,
  Email: String
});
```

## Professional Syntax

Preferred structure:

```javascript
const userSchema = new mongoose.Schema({
  Name: {
    type: String
  },
  Age: {
    type: Number
  },
  Email: {
    type: String
  }
});
```

This format allows adding validation rules.

Example:

```javascript
Email: {
  type: String,
  required: true
}
```

## Schema Options

Schema can accept options:

```javascript
const userSchema = new mongoose.Schema(
{
  Name: String,
  Email: String
},
{
  timestamps: true
});
```

This automatically adds:

```
createdAt
updatedAt
```

---

# 3. Mongoose Data Types

Common Mongoose data types:

| Type     | Purpose             |
| -------- | ------------------- |
| String   | text values         |
| Number   | numeric values      |
| Boolean  | true/false          |
| Date     | timestamps          |
| ObjectId | reference documents |
| Array    | list of values      |
| Mixed    | flexible data       |

## String Example

```javascript
Name: {
  type: String
}
```

## Number Example

```javascript
Price: {
  type: Number
}
```

## Boolean Example

```javascript
IsAdmin: {
  type: Boolean
}
```

## Date Example

```javascript
CreatedAt: {
  type: Date
}
```

## ObjectId Example

```javascript
UserId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
}
```

## Array Example

```javascript
Tags: {
  type: [String]
}
```

## Mixed Example

```javascript
Settings: {
  type: mongoose.Schema.Types.Mixed
}
```

---

# 4. Field Constraints

Field constraints enforce **data validation**.

Common constraints:

| Constraint          | Purpose                  |
| ------------------- | ------------------------ |
| required            | field must exist         |
| unique              | prevents duplicates      |
| default             | sets automatic value     |
| enum                | restricts allowed values |
| min/max             | numeric limits           |
| minlength/maxlength | string length rules      |
| match               | regex validation         |

## Required

```javascript
Name: {
  type: String,
  required: true
}
```

## Unique

```javascript
Email: {
  type: String,
  unique: true
}
```

## Default

```javascript
IsAdmin: {
  type: Boolean,
  default: false
}
```

## Enum

```javascript
Role: {
  type: String,
  enum: ["User", "Admin"]
}
```

## Min / Max

```javascript
Rating: {
  type: Number,
  min: 1,
  max: 5
}
```

## Minlength / Maxlength

```javascript
Password: {
  type: String,
  minlength: 6
}
```

## Regex Match

```javascript
Email: {
  type: String,
  match: /.+\@.+\..+/
}
```

---

# 5. Custom Validation

Custom validation allows defining **custom logic**.

Syntax:

```javascript
Field: {
  type: DataType,
  validate: {
    validator: function(value){
      return condition;
    },
    message: "Error message"
  }
}
```

Example:

```javascript
Age: {
  type: Number,
  validate: {
    validator: function(value){
      return value >= 18;
    },
    message: "Age must be at least 18"
  }
}
```

Example email validation:

```javascript
Email: {
  type: String,
  validate: {
    validator: function(value){
      return /.+\@.+\..+/.test(value);
    },
    message: "Invalid email"
  }
}
```

---

# 6. Schema Methods and Statics

These allow attaching **functions to models**.

## Methods (Document level)

Used on individual documents.

Syntax:

```javascript
schema.methods.methodName = function(){}
```

Example:

```javascript
userSchema.methods.isAdult = function(){
  return this.Age >= 18;
};
```

Usage:

```javascript
user.isAdult();
```

## Statics (Model level)

Used on the model itself.

Syntax:

```javascript
schema.statics.methodName = function(){}
```

Example:

```javascript
userSchema.statics.findByEmail = function(email){
  return this.findOne({ Email: email });
};
```

Usage:

```javascript
User.findByEmail("user@gmail.com");
```

---

# 7. Virtual Fields

Virtual fields are **computed fields not stored in the database**.

Example use case:

```
FirstName + LastName → FullName
```

Example:

```javascript
userSchema.virtual("FullName").get(function(){
  return this.FirstName + " " + this.LastName;
});
```

Enable virtuals in API responses:

```javascript
const userSchema = new mongoose.Schema(
{
  FirstName: String,
  LastName: String
},
{
  toJSON: { virtuals: true }
});
```

Virtual setter example:

```javascript
userSchema.virtual("FullName")
.get(function(){
  return `${this.FirstName} ${this.LastName}`;
})
.set(function(value){
  const parts = value.split(" ");
  this.FirstName = parts[0];
  this.LastName = parts[1];
});
```

---

# 8. Middleware (Pre & Post Hooks)

Middleware executes **automatically during certain operations**.

## Pre Middleware

Runs before an event.

Syntax:

```javascript
schema.pre("event", function(next){
  next();
});
```

Example:

```javascript
userSchema.pre("save", function(next){
  console.log("Saving user");
  next();
});
```

## Post Middleware

Runs after event.

```javascript
schema.post("save", function(doc){
  console.log("User saved:", doc.Email);
});
```

## Password Hashing Example

```javascript
userSchema.pre("save", async function(next){

  if(!this.isModified("Password")) return next();

  this.Password = await bcrypt.hash(this.Password,10);

  next();
});
```

---

# 9. Referencing Documents

MongoDB uses **ObjectId references instead of joins**.

Example:

```javascript
UserId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
}
```

Example order document:

```json
{
 "ProductName": "Laptop",
 "UserId": "65f2e11d4b3a2c001234abcd"
}
```

## populate()

Replace ObjectId with actual data.

```javascript
Order.find().populate("UserId");
```

Example result:

```json
{
 "ProductName": "Laptop",
 "UserId": {
   "Name": "Rahul",
   "Email": "rahul@gmail.com"
 }
}
```

---

# 10. Embedding vs Referencing

## Embedding

Store related data inside the document.

Example:

```javascript
const postSchema = new mongoose.Schema({
  Title: String,
  Comments: [
    {
      UserName: String,
      Message: String
    }
  ]
});
```

Advantages:

* faster reads
* single query

Disadvantages:

* large documents
* harder updates

## Referencing

Store ObjectId references.

Example:

```javascript
UserId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
}
```

Advantages:

* scalable
* reusable data

Rule:

```
Small related data → Embed
Large shared data → Reference
```

---

# 11. Indexes and Performance

Indexes improve **query speed**.

Without index:

```
MongoDB scans entire collection
```

With index:

```
MongoDB jumps directly to data
```

## Index Example

```javascript
Email: {
  type: String,
  index: true
}
```

## Unique Index

```javascript
Email: {
  type: String,
  unique: true
}
```

## Compound Index

```javascript
orderSchema.index({ UserId: 1, CreatedAt: -1 });
```

## Text Index

```javascript
productSchema.index({
  Title: "text",
  Description: "text"
});
```

Used for search:

```javascript
Product.find({ $text: { $search: "iphone" } });
```

---

# 12. Best Practices for Production MERN Apps

## Proper Folder Structure

```
backend
 ├ models
 ├ controllers
 ├ routes
 ├ middleware
 └ server.js
```

## Always Use Validation

Define:

* type
* required
* validation
* defaults

## Use Timestamps

```javascript
timestamps: true
```

## Index Frequently Queried Fields

Examples:

```
Email
UserId
CreatedAt
```

## Avoid Large Documents

MongoDB limit:

```
16MB per document
```

Use referencing instead of storing everything inside one document.

## Use Middleware for Security

Example: hash passwords.

## Separate Logic

```
routes → API handling
controllers → business logic
models → database logic
```

## Consistent Field Naming

Example:

```
UserId
ProductId
OrderId
CreatedAt
```

## Handle Errors

```javascript
try{
  const user = await User.create(req.body);
}
catch(err){
  res.status(400).json({error: err.message});
}
```

## Use Lean Queries

```javascript
User.find().lean()
```

Benefits:

* faster queries
* lower memory usage

## Use Environment Variables

`.env`

```
MONGO_URI=mongodb://localhost:27017/app
```

Connection:

```javascript
mongoose.connect(process.env.MONGO_URI);
```

Never hardcode database URLs.

---

# Final Summary

Complete Mongoose learning path:

```
1. Schema & Model
2. Schema Syntax
3. Data Types
4. Field Constraints
5. Custom Validation
6. Methods & Statics
7. Virtual Fields
8. Middleware
9. Referencing
10. Embedding vs Referencing
11. Indexes
12. Production Best Practices
```

This knowledge covers **the full Mongoose model system used in real MERN applications**.
