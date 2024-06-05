const text = "Hello world! HELLO again.";
const pattern = /hello/gi; // Global, case-insensitive search

let match;
while ((match = pattern.exec(text)) !== null) {
  console.log(`Found '${match[0]}' at index ${match.index}`);
}

// Output:
// Found 'Hello' at index 0
// Found 'HELLO' at index 13
