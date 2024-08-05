const prompt = require('prompt-sync')()



const predefinedResponses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I'm a simple chatbot created by you.",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "what is the capital of France": "The capital of France is Paris.",
    "bye": "Goodbye! Have a great day!",
};




    askChatBot = (userQuestions) => {

        if(userQuestions in predefinedResponses ) {
            return predefinedResponses[userQuestions];
            
        }
        else {
            return "sorry i am not familiar with that"
        }


  
    
    }


    while(true) {
        const userInput = prompt("Type in your question: ")
        if(userInput === 'exit') {
            console.log("bye nice chatting with you");
            break
        }
        const questions = askChatBot(userInput)
        console.log(questions);
        
    
    
       
    
        
    
    
    }
    

    
    
    
        

