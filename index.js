

//Preliminaries Header

const header = document.createElement("div")
document.getElementById("header").appendChild(header)
header.className = "header"
header.textContent = "JavaScript Made This!!"
header.style.textAlign = "center"
header.style.fontSize = "24px"


const h3 = document.createElement("h3");
h3.innerHTML = '<span class="name">Larissa</span><span>wrote the JavaScript.</span>';
h3.style.display = "inline"
header.appendChild(h3)
h3.style.fontSize = "16px"


//Bronze Clear Screen

const clear =  document.getElementById('clear-button');
const messages =  document.getElementById('messages')

clear.addEventListener('click', () => {
    document.getElementById('messages').innerHTML = " "
    
})


// Silver Dropdown Background Color Message Change NOT WORKING PROPERLY

const leftDiv = document.getElementsByClassName("left");
const rightDiv = document.getElementsByClassName("right");
const dropDownBar = document.getElementById("theme-drop-down")

const dropDownFunction = dropDownBar.addEventListener("click", function() {
    if(dropDownBar.value === 'theme-one') {
        for(let i = 0; i < leftDiv.length; i++) {
            leftDiv[i].style.backgroundColor = "cornflowerblue"
           
        }
        for(let i = 0; i < rightDiv.length; i++) {
            rightDiv[i].style.backgroundColor = "tan"
        }

    } else if (dropDownBar.value === 'theme-two') {

        for(let i = 0; i < leftDiv.length; i++) {
        }    if( i % 2 === 0) {
            leftDiv[i].style.backgroundColor = "black"
            leftDiv[i].style.color = "white"
        
        } else {
            rightDiv[i].style.backgroundColor = "red"
        }

    }
}) 

//Gold Send Message Button Left and Right

const divArray = document.querySelectorAll(".message")
const sendButton = document.getElementById("button")
const inputText = document.getElementById('input');
form.addEventListener('submit', (event) => {
 event.preventDefault()
})
sendButton.onclick = function() {
    const divArray = document.querySelectorAll(".message");
    const div = document.createElement("div")
    div.innerHTML = inputText.value;
    messages.appendChild(div);
    
        if(divArray.length % 2 === 0) {
            div.className = "message left"
            div.style.padding = "3px"
            document.getElementById('input').value = " "
            
        
            } else {
            div.className = "message right"
            div.style.padding = "3px"
            document.getElementById('input').value = " "
                  
            }
           
        }
    
