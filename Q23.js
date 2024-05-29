/*
JavaScript provides functions to both decode and encode URLs:

Decoding URLs:

Use the decodeURIComponent() function to decode a URL component 
that has been encoded using encodeURIComponent(). 
This is useful when you receive data from a URL parameter or query string that might be encoded.

*/

const encodedString = "%C3%A9cole%20Normale%20Sup%C3%A9rieure";
const decodedString = decodeURIComponent(encodedString);
console.log(decodedString); // Output: École Normale Supérieure (decoded characters)


/*
Encoding URLs:

Use the encodeURIComponent() function to encode a URL component
 that might contain special characters. This is important before including user 
 input or dynamic data in a URL to prevent errors or unexpected behavior.
*/

const name = "John Doe";
const encodedName = encodeURIComponent(name);
const url = "https://example.com?name=" + encodedName;
console.log(url); // Output: https://example.com?name=John%20Doe (encoded special character)

/*
In summary, decodeURIComponent() helps you retrieve the original characters from an encoded URL component, 
while encodeURIComponent() ensures safe inclusion of user input or dynamic data in URLs by encoding special
characters.
*/