var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:1500,
    loading: true,
    content: 'Hello. This is Alex, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'I am handling your request today. What brings you here?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'I can help you with that. First, could you tell me why you need to replace or return this textbook?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'I do not understand what you said. Can you choose one of the options below?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Damage in the item',
            value: 'Damage in the item' 
          },
          { text: 'Found a cheaper option in another store',
            value: 'Found a cheaper option in another store' 
          },
          { text: 'Incorrect item delivered',
            value: 'Incorrect item delivered'
          }
        ]
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Got it. Could you input your order number below?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Alright. Please give me a moment while I am pulling up your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:5000,
        loading: true,
        content:'The 3rd edition is currently in stock. For your information, you need to pay $50 more for the newer edition. Would you still like to exchange the book?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
        });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'I will process your request. Please hold on.'
    });
}).then(function(){
    return botui.message.add({
        delay:6000,
        loading: true,
        content:'I have processed your request. Please make sure to return the older edition. Is there anything else you need?'
    });
 }).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'I cannot process your message. Please select one.'
    });
 ).then(function(){
    return botui.action.button({
        action: [
          { text: 'Express shipping ($15)',
            value: 'Express shipping ($15)' 
          },
          { text: 'Subscribe to the newsletter for discounts and offers',
            value: 'Subscribe to the newsletter for discounts and offers' 
          },
          { text: 'Create a membership card',
            value: 'Create a membership card'
          }
        ]
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:4000,
        loading: true,
        content:'I have processed your request, and the issue has been resolved. Please contact us again if you need further assistance. Bye.'
    });
    
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2], "text4":response[3], "text5":response[4], "text6":response[5], "text7":response[6]}, "*");
};
