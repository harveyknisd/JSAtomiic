function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") return;
  
  appendMessage("You", userInput);
  
  // Call function to get AI response
  var aiResponse = getAIResponse(userInput);
  
  setTimeout(function() {
    appendMessage("AI", aiResponse);
  }, 500);
  
  document.getElementById("user-input").value = "";
}

function appendMessage(sender, message) {
  var chatBox = document.getElementById("chat-box");
  var messageElement = document.createElement("div");
  messageElement.innerHTML = "<strong>" + sender + ": </strong>" + message;
  chatBox.appendChild(messageElement);
}

function getAIResponse(userInput) {
  // This is a dummy function, replace it with your actual AI logic
  // For simplicity, just echoing back the user's input
  return "You said: " + userInput;
}
