// Control
document.addEventListener("DOMContentLoaded", button_presses);
let user_score = 0
let comp_score = 0
let round_no = 0
let final_result = ""

// Producing a random computer choice
function comp_choice() {
    let choice_int = Math.floor(Math.random() * 3); // 0 to 2
    if (choice_int === 0) return "Rock";
    if (choice_int === 1) return "Paper";
    return "Scissors";
}

// Setting up event listeners for each button
function button_presses()
{   const rock_btn = document.querySelector("#rock_btn");
    const paper_btn = document.querySelector("#paper_btn");
    const scissors_btn = document.querySelector("#scissors_btn");
    const replay_btn = document.querySelector("#replay_btn")

    rock_btn.onclick = () => handleUserChoice("Rock");
    paper_btn.onclick = () => handleUserChoice("Paper");
    scissors_btn.onclick = () => handleUserChoice("Scissors");
    replay_btn.onclick = () => replay();
}

// Alerts User about the choices and calls the result function
function handleUserChoice(user_choice) {
    alert(`${user_choice} button clicked`);
    let computer_choice = comp_choice();
    alert(`Computer chose: ${computer_choice}`);
    result_decider(computer_choice,user_choice);
}

function result_decider(computer_choice,user_choice) 
{   
    if (computer_choice == "Scissors" && user_choice == "Paper") {
        score_manager("Computer wins");
    } else if (computer_choice == "Scissors" && user_choice == "Scissors") {
        score_manager("Draw");
    } else if (computer_choice == "Scissors" && user_choice == "Rock") {
        score_manager("User wins");
    } else if (computer_choice == "Paper" && user_choice == "Rock") {
        score_manager("Computer wins");
    } else if (computer_choice == "Paper" && user_choice == "Paper") {
        score_manager("Draw");
    } else if (computer_choice == "Paper" && user_choice == "Scissors") {
        score_manager("User wins");
    } else if (computer_choice == "Rock" && user_choice == "Scissors") {
        score_manager("Computer wins");
    } else if (computer_choice == "Rock" && user_choice == "Rock") {
        score_manager("Draw");
    } else if (computer_choice == "Rock" && user_choice == "Paper") {
        score_manager("User wins");
    }    
}

function score_manager(result)
{
    alert(result)
    if (result == "User wins")
        {
            user_score++;
            round_no++;
        }
    else if (result == "Computer wins")
        {
            comp_score++;
            round_no++;
        }
    else{round_no++}

    if (round_no ==5)
        {
            if (comp_score>user_score){final_result="Computer Wins"}
            else if (comp_score<user_score){final_result="User Wins"}
            else{final_result="Draw"}
            
        }
        
    score_display(comp_score,user_score,round_no,final_result)
    
}

function score_display(comp_score,user_score,round_no,final_result)
{
    const computer_score_display = document.querySelector("#computer_score")
    const user_score_display = document.querySelector("#user_score")
    const round_no_display = document.querySelector("#round_no")
    const final_result_display = document.querySelector("#final_result")

    computer_score_display.textContent = comp_score;
    user_score_display.textContent = user_score;
    round_no_display.textContent = round_no;
    final_result_display.textContent = "Result: " + final_result;

}

function replay()
{
     user_score = 0;
     comp_score = 0;
     round_no = 0;
     final_result = "";
     score_display(0,0,0,"");
}

