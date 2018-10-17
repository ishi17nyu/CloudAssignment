When you access the s3 link http://chatbothw1.s3-website.us-east-2.amazonaws.com/, we see the Chatbot interface. 
The chatbot can answer the following cases
* If the input is one from the following list {"Hi", "hi" , "Hello" , "hello" , "hey" , "Hey"}
The chatbot replies with "Hi there, how can I help?"
* If the input is one from the following list {"What is your name", "What's your name", "What is your name" , "Your name" , "your name",
*               "What is your name ?", "What's your name ?" , "What is your name ?" , "Your name ?"
* }
The chatbot replies with "My name is Chat Bot"
* If the input is one from the following list {"I want to order pizza" , "I wanna order Pizza" , "I wanna order pizza"}
The chatbot replies with "Sure, Veg or Non Veg"
* If the input is one from the following list {"veg" , "vegeterian"}
The chatbot replies with "We have many options like cheese burst,  veg supreme etc .., Which one would you like ?"
* If the input is one from the following list {"non-veg" , "non veg" , "non vegeterian"}
The chatbot replies with "We have many options like cheese pepproni,  non veg supreme etc .., Which one would you like ?"
* If the input is one from the following list {"bye" , "goodbye"}
The chatbot replies with "Bye! See you soon."
* If none of the cases are satisfied chatbot replies with Sorry, I am confused