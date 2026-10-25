//Trying to make the comment translate left when you hover on a message until mouseout
//*let message = document.getElementsByClassName("commentMessages");
//message.addEventListener("mouseover", translateLeft);

//function translateLeft() {
//    document.getElementById('firstComment').style.animation = "messageSlideLeft 2s 2s forward";
//}

function showCommentButtons() {
    let hiddenCommentButtons = document.getElementsByClassName("hiddenCommentButtons");
    console.log(hiddenCommentButtons);

Array.from(hiddenCommentButtons).forEach(button => {
    if (getComputedStyle(button).display === "none") {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
})
    console.log("buttons activated!");
}