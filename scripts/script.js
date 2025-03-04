//Main Part
const allCompletedButtons = document.getElementsByClassName("completedBtn");
let taskAssigned = 6;
let taskDone = 23;
for(let i = 0; i < allCompletedButtons.length; i++){
    let button = allCompletedButtons[i];
    button.addEventListener("click", function(){
        button.classList.remove("cursor-pointer");
        button.classList.add("cursor-not-allowed", "bg-gray-300");
        
     
       
        if(taskAssigned > 0){
            alert("Board Updated Successfully!");
            taskAssigned--; 
            document.getElementById("taskAssigned").innerText = taskAssigned;
            taskDone++;
            document.getElementById("taskDone").innerText = taskDone;
            if(taskAssigned == 0){
                alert("Congratulation! You have completed all the current Task");
            }
        }

            // get current time
            const currentTime = new Date().toLocaleTimeString(); 
            // active log
            const allCardTitle = document.getElementsByClassName("cardTitle");
            let singleCardTitle = allCardTitle[i].innerText;
            document.getElementById("activeLog").innerHTML += `<p class="bg-[#F4F7FF] rounded-lg p-3 mx-2 my-4">You have completed the task ${singleCardTitle} at ${currentTime}</p>`;
            
            // clear History button
            document.getElementById("clearHistory").addEventListener("click", function(){
                document.getElementById("activeLog").remove();
            });
    });
};

// Bonos Part

// Discover Something New 
document.getElementById("discoverSomethingBtn").addEventListener("click", function(){
    window.location.href = "question.html";
});

// changing the theme
let number = 0;
document.getElementById("themeBtn").addEventListener("click", function(){
    number++;
    const arrayOfColors = [
        "Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Black", "White",
        "Gray", "Cyan", "Magenta", "Lime", "Maroon", "Navy", "Olive", "Teal", "Aqua", "Silver",
        "Gold", "Beige", "Turquoise", "Lavender", "Violet", "Indigo", "Coral", "Salmon", "Crimson", "Khaki",
        "Plum", "Orchid", "Tomato", "Azure", "Ivory", "Mint", "Peach", "Chocolate", "SkyBlue", "Sienna",
        "Chartreuse", "SlateBlue", "DeepPink", "MediumPurple", "DarkCyan", "ForestGreen", "DodgerBlue", "HotPink", "MediumSeaGreen", "RoyalBlue"
    ];
    document.getElementById("body").style.backgroundColor = arrayOfColors[number];
});

// current Date
const getAllDateInfo = new Date().toString();
const divideDateInfo = getAllDateInfo.split(" ");
const today = divideDateInfo[0];

let date = [];
for(let i = 1; i < 4; i++){
    date.push(divideDateInfo[i]);
}
const ActualFinalDate = date.join(" ");
document.getElementById("dateContainer").innerHTML = `
<h1 class="text-xl">${today},</h1>
<h1 class="font-bold text-xl">${ActualFinalDate}</h1>
`;