/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/
const form = document.getElementById("quiz-form")
const answers = Array.from(document.querySelectorAll(".answer"));
const questionItem = document.querySelectorAll(".question-item");
const Alert=document.getElementById("alert")

form.addEventListener("submit", e => {
    e.preventDefault();

    questionItem.forEach(questionItem => {
        questionItem.classList.add("incorrect")
        questionItem.classList.remove("correct")
        
    })
   

    const check = answers.filter(answer => answer.checked);
    check.forEach(answer => {
        const isCorrect = answer.value === "true";
        const questionItems=answer.closest(".question-item")
        if (isCorrect) {
            questionItems.classList.add("correct")
            questionItems.classList.remove("incorrect")

        }
        else {
            questionItems.classList.add("incorrect")
            questionItems.classList.remove("correct")
            
        }
        const allTrue = check.every(answer => answer.value === "true");
        const allAnswer = check.length === questionItem.length;
        
        if (allTrue && allAnswer) {
            Alert.classList.add("active")
            setTimeout(() => {
                Alert.classList.remove("active")
            },2000)
        }
        
    });
})


