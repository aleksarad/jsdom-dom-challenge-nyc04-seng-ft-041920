//get counter to increase by 1 every second
let counter = document.querySelector("#counter")
let i = 0;
setInterval(increaseCounter, 1000);
function increaseCounter() {
    i++;
    counter.innerText = i;
}

//increment and decrement counter
const increment = document.querySelector("#plus")
const decrement = document.querySelector("#minus")

increment.addEventListener("click", function(e) {
    i++;
    counter.innerText = i;
})

decrement.addEventListener("click", function(e) {
    i--;
    counter.innerText = i;
})

//likes
//still need to update LI's
const likes = document.querySelector("#heart")
const likesContainer = document.querySelector(".likes")

likes.addEventListener("click", function(e) {
    console.log(counter.innerText)

    const newLike = document.createElement("li");
    newLike.innerText = `liked ${counter.innerText}`
    likesContainer.append(newLike);
})

//comments

const commentForm = document.querySelector("#comment-form")
const commentDiv = document.querySelector("#comment-div")
const commentInput = document.querySelector("#comment-input")

commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const newComment = document.createElement("p");
    newComment.innerText = commentInput.value; 
    commentDiv.append(newComment);
})


//pause