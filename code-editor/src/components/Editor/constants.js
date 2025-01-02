// Supported language versions for the Piston API
export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  c: "10.2.0",
  php: "8.2.3",
};

// Custom code snippets for each language
export const CODE_SNIPPETS = {
  javascript: `// Uncomment to demonstrate specific functionality in JavaScript
// Example: Working with Arrays

function welcome() {
  console.log("Hello from JavaScript, the versatile language for the web!");
}
welcome();

// const numbers = [1, 2, 3];
// console.log("Array doubled:", numbers.map(num => num * 2));
`,

  typescript: `// Uncomment to demonstrate specific functionality in TypeScript
// Example: Enforcing types with interfaces

function welcome(): void {
  console.log("Greetings from TypeScript, bringing types to JavaScript!");
}
welcome();

// interface Person {
//   name: string;
//   age: number;
// }
// const user: Person = { name: "John", age: 30 };
// console.log(user);
`,

  python: `
# Uncomment to demonstrate specific functionality in Python
# Example: List comprehensions

def welcome():
    print("Hello from Python, the favorite of data scientists!")
    
welcome()

# numbers = [1, 2, 3]
# doubled = [num * 2 for num in numbers]
# print("Doubled numbers:", doubled)
`,

  java: `
public class Welcome {
    public static void main(String[] args) {
        System.out.println("Hello from Java, the backbone of enterprise applications!");
        // Person person = new Person("Bogdan");
        // System.out.println("Person's name: " + person.getName());
    }
}

// Uncomment to demonstrate specific functionality in Java
// Example: Working with classes
// public class Person {
//     private String name;
//     public Person(String name) {
//         this.name = name;
//     }
//     public String getName() {
//         return name;
//     }
// }
`,

  c: `
// Uncomment to demonstrate specific functionality in C
// Example: Working with pointers

#include <stdio.h>
int main() {
    printf("Hello from C, the powerhouse of low-level programming!\\n");
    // int num = 42;
    // int *ptr = &num;
    // printf("Pointer value: %d\\n", *ptr);
    return 0;
}
`,

  php: `
<?php
echo "Hello from PHP, the language for server-side scripting!\n";

// Uncomment to demonstrate specific functionality in PHP
// Example: Associative arrays
// $user = array("name" => "John", "age" => 30);
// echo "User name: " . $user["name"];
?>
`,
};
