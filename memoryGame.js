var arrOfImages = ["apple.png","banana.jpeg","grape.jpeg","kiwi.jpeg","mango.jpeg","orange.jpeg","pineapple.jpeg","strawberry.jpeg","watermelon.png"]

function displayCards(arr){
    var container = document.getElementById("container");

    console.log(container);
    for (var x = 0; x<arr.length;x++){
        var newImgElement = document.createElement("img");
        // set the src of the img tag to be the name of the file
        newImgElement.src = "images/" + arr[x];
        // give the element an id 
        newImgElement.id = x;
        // give the element a class so CSS can be applied to it
        newImgElement.className = "card";
        // add the element to the container div
        container.appendChild(newImgElement);
    }
}


function doubleImages(arr) {
    
    for (var i = arr.length - 1; i >= 0; i--) {
        arr.push(arr[i]);
    }
    return arr;
}
console.log(doubleImages(arrOfImages));


function shuffleCards(arr) {
    for (var i = 0; i < arr.length; i++) {
        // get 2 random index values
        var idx1 = Math.floor(Math.random()*arr.length);
        var idx2 = Math.floor(Math.random()*arr.length);
    
        // swap them in the array
        var temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    return arr;
}


// shuffling card before displaying it
shuffleCards(arrOfImages);
displayCards(arrOfImages);  


function hideACard(idx) {
    // get the image with the specified idx/id
    var specificCard = document.getElementById(idx);
    // set the image's source to the question mark
    specificCard.src = "images/questionmark.jpeg";
}
// call on the hideACard function for each card in array of images
for (var i = 0; i < arrOfImages.length; i++) {
    // let's call on the hideACard function we just made
    hideACard(i);
}

// function revealCard(event) {    // this time, the click event is going to be the input
//     // the event actually contains the element (and all its attributes)
//     // we'll use it to get the id of the element that was clicked
//     var clickedImageId = event.target.id;
        
//     // grab the element that was clicked on
//     var clickedImage = document.getElementById(clickedImageId); 
//     // update the image's source to show a different picture
//     clickedImage.src = "images/" + arrOfImages[clickedImageId];
// }


var cardElements = document.getElementsByClassName("card");
for (var i = 0; i < cardElements.length; i++) {
    cardElements[i].addEventListener("click", revealCard);
}

var cardsPicked = [];    // keep track of which cards have been picked
function revealCard(event) {
    if (cardsPicked.length >= 2) return;
    var clickedImageId = event.target.id;
        
    var clickedImage = document.getElementById(clickedImageId); 
    clickedImage.src = "images/" + arrOfImages[clickedImageId];
    
    // add the clicked image to our array
    cardsPicked.push(clickedImageId);
    
    // if 2 cards have been picked
    if (cardsPicked.length == 2) {
        // if the 2 selected images are the same
        if (arrOfImages[cardsPicked[0]] == arrOfImages[cardsPicked[1]]) {
            // function to do somethingwith cardPicked[0] and cardPicked[1]
            // resets the cards picked
            cardsPicked = [];
        
        } else {
            // make a function that will flip the cards back over
            var hidePickedCards = function() {
                for (var i = 0; i < cardsPicked.length; i++) {
                    hideACard(cardsPicked[i]);
                }
                // hideACard(cardsPicked[0]);    
                // hideACard(cardsPicked[1]);
                cardsPicked = [];
            }
            window.setTimeout(hidePickedCards, 1000);
        }
    }
}





