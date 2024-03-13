const countHTML = document.getElementById("count");
const errorHTML = document.getElementById('error');
const clearHTML = document.getElementById('clear');

const increment = () => {
    const count = parseInt(countHTML.innerText);
    countHTML.innerText = count+1;
    if (count===0) {
        errorHTML.style.display = "none";
        clearHTML.style.display = "inline"
    }
}

const decrement = () => {
    const count = parseInt(countHTML.innerText);
    if (count>0) {
        countHTML.innerText = count-1;
    }else{
        errorHTML.style.display = "block";
    }
}

const clearCount = () => {
    countHTML.innerHTML = 0;
    clearHTML.style.display = "none";
}