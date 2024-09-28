import { helloYou, helloHuman, repeatHelloYou } from "./hello-funcs";
import type { Human } from "./types";

try {
    console.log(helloYou("John"));  
    console.log(helloYou(""));      
} catch (error) {
    console.error(error);
}

const johnDoe: Human = {
    firstName: "John",
    lastName: "Doe",
    birthYear: 1980
};

try {
    const hMessage = helloHuman(johnDoe);  
    console.log(hMessage);
} catch (error) {
    console.error(error);
}

const janeDoe: Human = {
    firstName: "",
    lastName: "Doe",
    birthYear: 1980
};

try {
    const hMessage2 = helloHuman(janeDoe);  
    console.log(hMessage2);
} catch (error) {
    console.error(error);
}

try {
    const repeatedMessage = repeatHelloYou(3, "amar");  
    console.log(repeatedMessage);
} catch (error) {
    console.error(error);
}

try {
    const repeatedMessage2 = repeatHelloYou(-1, "John");  
    console.log(repeatedMessage2);
} catch (error) {
    console.error(error);
}
