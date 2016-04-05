'use strict';

class HelloWorld {
    hello(input) {

        const name = input || 'World';
        return `Hello, ${name}!`;

    }
}

export default HelloWorld;
