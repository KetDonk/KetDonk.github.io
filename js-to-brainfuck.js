<<<<<<< HEAD
class JSToBrainfuck {
    constructor() {
        this.memory = new Array(30000).fill(0);
        this.pointer = 0;
        this.output = '';
    }

    // Convert a character to Brainfuck
    charToBrainfuck(char) {
        const ascii = char.charCodeAt(0);
        let bf = '';
        
        // Optimize by finding the closest multiple of 10
        const tens = Math.floor(ascii / 10);
        const remainder = ascii % 10;
        
        // Add the tens
        bf += '+'.repeat(tens);
        bf += '[>++++++++++<-]>';
        
        // Add the remainder
        bf += '+'.repeat(remainder);
        bf += '.';
        
        // Reset the cell to 0
        bf += '[-]';
        
        return bf;
    }

    // Convert a string to Brainfuck
    stringToBrainfuck(str) {
        let bf = '';
        for (let char of str) {
            bf += this.charToBrainfuck(char);
        }
        return bf;
    }

    // Convert a number to Brainfuck
    numberToBrainfuck(num) {
        const str = num.toString();
        return this.stringToBrainfuck(str);
    }

    // Convert console.log to Brainfuck
    convertConsoleLog(expression) {
        // Remove the console.log() wrapper
        const content = expression.slice(12, -1);
        
        // Check if it's a string or number
        if (content.startsWith('"') || content.startsWith("'")) {
            // It's a string
            const str = content.slice(1, -1);
            return this.stringToBrainfuck(str);
        } else {
            // Assume it's a number
            return this.numberToBrainfuck(parseInt(content));
        }
    }

    // Main conversion function
    convert(jsCode) {
        let bfCode = '';
        
        // Split the code into lines
        const lines = jsCode.split('\n');
        
        for (let line of lines) {
            line = line.trim();
            
            if (line.startsWith('console.log')) {
                bfCode += this.convertConsoleLog(line);
            }
        }
        
        return bfCode;
    }
}

// Example usage
const translator = new JSToBrainfuck();
const jsCode = `
console.log("Hello");
console.log(42);
`;

const brainfuckCode = translator.convert(jsCode);
console.log('Generated Brainfuck code:');
=======
class JSToBrainfuck {
    constructor() {
        this.memory = new Array(30000).fill(0);
        this.pointer = 0;
        this.output = '';
    }

    // Convert a character to Brainfuck
    charToBrainfuck(char) {
        const ascii = char.charCodeAt(0);
        let bf = '';
        
        // Optimize by finding the closest multiple of 10
        const tens = Math.floor(ascii / 10);
        const remainder = ascii % 10;
        
        // Add the tens
        bf += '+'.repeat(tens);
        bf += '[>++++++++++<-]>';
        
        // Add the remainder
        bf += '+'.repeat(remainder);
        bf += '.';
        
        // Reset the cell to 0
        bf += '[-]';
        
        return bf;
    }

    // Convert a string to Brainfuck
    stringToBrainfuck(str) {
        let bf = '';
        for (let char of str) {
            bf += this.charToBrainfuck(char);
        }
        return bf;
    }

    // Convert a number to Brainfuck
    numberToBrainfuck(num) {
        const str = num.toString();
        return this.stringToBrainfuck(str);
    }

    // Convert console.log to Brainfuck
    convertConsoleLog(expression) {
        // Remove the console.log() wrapper
        const content = expression.slice(12, -1);
        
        // Check if it's a string or number
        if (content.startsWith('"') || content.startsWith("'")) {
            // It's a string
            const str = content.slice(1, -1);
            return this.stringToBrainfuck(str);
        } else {
            // Assume it's a number
            return this.numberToBrainfuck(parseInt(content));
        }
    }

    // Main conversion function
    convert(jsCode) {
        let bfCode = '';
        
        // Split the code into lines
        const lines = jsCode.split('\n');
        
        for (let line of lines) {
            line = line.trim();
            
            if (line.startsWith('console.log')) {
                bfCode += this.convertConsoleLog(line);
            }
        }
        
        return bfCode;
    }
}

// Example usage
const translator = new JSToBrainfuck();
const jsCode = `
console.log("Hello");
console.log(42);
`;

const brainfuckCode = translator.convert(jsCode);
console.log('Generated Brainfuck code:');
console.log(brainfuckCode); 
