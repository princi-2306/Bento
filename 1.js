const content = document.getElementById("human");
const dialog = document.getElementById("dialog-box");
content.addEventListener("mouseenter" , () => {
    console.log("i have been touched")
    dialog.classList.add("show");
});

content.addEventListener("mouseleave", () => {
    dialog.classList.remove("show");
});

const icon = document.getElementById("bell");
icon.addEventListener("click",() => {
    icon.classList.add("animate");

    setTimeout(() => {
        icon.classList.remove("animate");
    }, 500);
})

// let tab = document.getElementsByClassName("one");
// tab.addEventListener("mouseenter" , () =>{
//     console.log("i have been touched, dont touch me again")
//     tab.classList.add()
// })

let boxes = Array.from(document.getElementsByClassName("one"));
boxes.forEach(function(tab){
    tab.addEventListener("mouseenter", () => {
        console.log("i have been touched, dont touch me again")
        tab.classList.add("ladder");
    })
    tab.addEventListener("mouseleave",() => {
        tab.classList.remove("ladder");
    })
})

const options = ["App devlopement","UI/UX","ReactJs","Vue","Angular","Full Stack","DevOps"]
function showDropdown(){
    const input = document.getElementById("searchInput");
    const dropdown = document.getElementById("dropdown");
    const filter = input.value.toLowerCase();

    dropdown.innerHTML = "";
    if(filter === ""){
        dropdown.style.display = "none";
        return;
    }
    const filterOption = options.filter(option => option.toLowerCase().includes(filter));
    if(filterOption.length > 0){
        dropdown.style.display = "block";
        filterOption.forEach(option => {
            const div = document.createElement("div");
            div.textContent = option;
            const ranColor = color[Math.floor(Math.random()* color.length)];
            div.style.backgroundColor = ranColor;
            div.onclick = () => {
                input.value = option;
                dropdown.style.display = "none";
            };
            dropdown.appendChild(div);
           
            div.style.backgroundColor = ranColor;
        });
    } else {
        dropdown.style.display = "none";
    }
}

document.addEventListener("click", (e) => {
    if(!e.target.closest(".dropdown-container")){
        document.getElementById("dropdown").style.display = "none";
    }
})
const color = ["#F1E7E7","E69DB8","#FFD0C7","FFFECE","E69DB8","E69DB8"];

const trainers = [
    { img:"assets/pngtree-smart-business-man-png-image_10275552.png",
      name: "John Green",
      mail: "johnGreen@gmail.com",
      exp : "15+",
      platform : "#1",
      teaching : "10 ya",
      courses : "12",
      para : "Hello everyone! I'm excited to introduce you to my course, designed to make complex topics simple and engaging. Whether you're looking to build strong foundational skills or master advanced concepts, this course covers hands-on projects and real-world applications.",
      first : "Full Stack Devlopment",
      second : "Global Space",
      third : "June 2024 - present",
      four : "Senior JavaScript Development",
      five : "Microsoft LTD.",
      six : "May 2020 - July 2023",
      seven : "UI / UX engineer",
      eight : "Figma",
      nine : "June 2018-May 2020"
    },
    {   img : "assets/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweat.avif",
        name: "Ashley Simon",
        mail: "simon.ashley@gmail.com",
        exp : "5+",
        platform : "#2",
        teaching : "15 ya",
        courses : "11",
        para : "Hello everyone! I'm excited to welcome you to this course. Together, we'll explore the concepts step by step, with plenty of interactive learning. I'm here to support you, so don't hesitate to ask questions. Let's make this a great learning experience!",
        first : "Front-End Development",
        second : "Amazon",
        third : "August 2023 - present",
        four : "Junior JavaScript Development",
        five : "JP Morgan Chase",
        six : "Sept 2020 - August 2023",
        seven : "Data Analyst",
        eight : "WebEx",
        nine : "June 2017-Sept 2020"
      }
   
];

const arrow = document.getElementById("arrow2");
const imgE = document.getElementById("img1")
const nameE = document.getElementById("name")
const mailE = document.getElementById("mail");
const expE = document.getElementById("exp");
const platformE = document.getElementById("platform");
const teachingE = document.getElementById("teaching");
const coursesE = document.getElementById("courses");
const paraE = document.getElementById("p");
const firstE = document.getElementById("first");
const secondE = document.getElementById("second");
const thirdE = document.getElementById("third");
const fourE = document.getElementById("four");
const fiveE = document.getElementById("five");
const sixE = document.getElementById("six");
const sevenE = document.getElementById("seven");
const eightE = document.getElementById("eight");
const nineE = document.getElementById("nine");

let currentIdx = 0;
function changeContent(){
  const trainer  = trainers[currentIdx];
  nameE.innerHTML = trainer.name;
  mailE.innerHTML = trainer.mail;
  expE.innerHTML = trainer.exp;
  platformE.innerHTML = trainer.platform;
  teachingE.innerHTML = trainer.teaching;
  coursesE.innerHTML = trainer.courses;
  paraE.innerHTML = trainer.para;
  imgE.src = trainer.img;
  firstE.innerHTML = trainer.first;
  secondE.innerHTML = trainer.second;
  thirdE.innerHTML = trainer.third;
  fourE.innerHTML = trainer.four;
  fiveE.innerHTML = trainer.five;
  sixE.innerHTML = trainer.six;
  sevenE.innerHTML = trainer.seven;
  eightE.innerHTML = trainer.eight;
  nineE.innerHTML = trainer.nine;


  currentIdx = (currentIdx + 1) % trainers.length;
}
arrow.addEventListener("click",changeContent);
changeContent();

const openBtn = document.getElementById("openDialog");
const closeBtn = document.getElementById("closeDialog");
const overlay = document.getElementById("dialogOverlay");

openBtn.addEventListener("click", () => {
    overlay.classList.add("show");
})

closeBtn.addEventListener("click", () =>{
    overlay.classList.remove("show");
})
// hides dialog box if user clicks outisde of dialog box
overlay.addEventListener("click", (e)=> {
    if(e.target === overlay){
        overlay.classList.remove("show");
    }
})

document.getElementById("btn2").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.text("Hello! This is your generated PDF file.", 10, 10);
    doc.save("GeneratedFile.pdf");
});


