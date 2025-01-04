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
  javascript: `
function welcome() {
  console.log("Hello JavaScript!");
}
welcome();
`,

  typescript: `
function welcome(): void {
  console.log("Hello TypeScript!");
}
welcome();
`,

  python: `
def welcome():
    print("Hello Python!")
    
welcome()
`,

  java: `
public class Welcome {
    public static void main(String[] args) {
        System.out.println("Hello Java!");
    }
}
`,

  c: `
#include <stdio.h>
int main() {
    printf("Hello C!\\n");
    // int num = 42;
    // int *ptr = &num;
    // printf("Pointer value: %d\\n", *ptr);
    return 0;
}
`,

  php: `
<?php
echo "Hello PHP!\n";
?>
`,
};
