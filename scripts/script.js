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
