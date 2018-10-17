import json

def lambda_handler(event, context):
    message = "Sorry, I am confused"

    list1 = ["Hi", "hi" , "Hello" , "hello" , "hey" , "Hey"]
    list2 = ["What is your name", "What's your name", "What is your name" , "Your name" , "your name",
              "What is your name ?", "What's your name ?" , "What is your name ?" , "Your name ?"]
    list3 = ["I want to order pizza" , "I wanna order Pizza" , "I wanna order pizza"]
    list4 = ["veg" , "vegeterian"]
    list5 = ["non-veg" , "non veg" , "non vegeterian"]
    list6 = ["bye" , "goodbye"]

   
    if event['message'] in list1:
        message = "Hi there, how can I help?"

    if event['message'] in list2:
        message = "My name is Chat Bot"

    if event['message'] in list3:
        message = "Sure, Veg or Non Veg"

    if event['message'] in list4:
        message = "We have many options like cheese burst,  veg supreme etc .., Which one would you like ?"

    if event['message'] in list5:
        message = "We have many options like cheese pepproni,  non veg supreme etc .., Which one would you like ?"

    if event['message'] in list6:
        message = "Bye! See you soon."

    return {
        'message' : message
    }
