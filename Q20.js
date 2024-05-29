/*

*/
switch (fruit) {
    case 'apple': {
        const color = 'red';
        let taste = 'sweet';
        console.log(color, taste); // Outputs: red sweet
        break;
    }
    case 'banana': {
        const color = 'yellow';
        let taste = 'sweet';
        console.log(color, taste); // Outputs: yellow sweet
        break;
    }
    case 'lemon': {
        const color = 'yellow';
        let taste = 'sour';
        console.log(color, taste); // Outputs: yellow sour
        break;
    }
    default: {
        const color = 'unknown';
        let taste = 'unknown';
        console.log(color, taste); // Outputs: unknown unknown
    }
}
