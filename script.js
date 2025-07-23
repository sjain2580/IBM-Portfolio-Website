function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);
    setTimeout(() => {
      showPopup(false);
    }, 8000); // Hides after 3 seconds
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
  else {
    // If the recommendation is empty, you might want to show an alert or a different message
    alert("Please enter a recommendation before submitting!");
  }
}

function showPopup(bool) {
  // Ensure the 'popup' element exists in your HTML
  const popupElement = document.getElementById('popup');
  if (popupElement) {
    if (bool) {
      popupElement.style.visibility = 'visible';
      popupElement.style.opacity = '1';
    } else {
      popupElement.style.visibility = 'hidden';
      popupElement.style.opacity = '0';
    }
  } else {
    console.error("Error: Element with ID 'popup' not found. Please add it to your HTML.");
    if (bool) {
        alert("Recommendation submitted!");
    }
  }
}
