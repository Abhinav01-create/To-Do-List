const searchInput = document.getElementById("search-input");
const bullet = document.getElementById("bullet");

function addTask(){
    if(searchInput.value === ''){
        alert('Please enter a valid input.');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=searchInput.value;
        bullet.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    searchInput.value='';
    saveData();
}

bullet.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",bullet.innerHTML)
}
function showTask(){
    bullet.innerHTML=localStorage.getItem("data");
}
showTask();

