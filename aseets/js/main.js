let btn = document.querySelector('.burger_line')
let new_nav = document.querySelector('.nav_to_small_screen')
let close_btn = document.querySelector('.close')
btn.addEventListener('click', function () {
    new_nav.style.display = "block";
    new_nav.style.zIndex = "5000";
    close_btn.style.display = "block";

})
close_btn.addEventListener('click', function () {
    new_nav.style.display = "none";
    new_nav.style.zIndex = "-5000";
    close_btn.style.display = "none";

})

const links = document.querySelectorAll('.crud_dev .cat_div3 a');

links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

let localStorageData = localStorage.getItem('courses');
let dataArray = JSON.parse(localStorageData);
let courses = dataArray;
if(courses === null){
    courses=[]
}
else{
    courses = dataArray;
}
var table_data = '';
var table_data_dev = '';
var table_data_bu = '';
var table_data_de = '';
var table_data_hf = '';
var table_data_li = '';
for (var i = 0; i < courses.length; i++) {
    table_data = `
    <div class="mleft ">
    <div class=" cards overflow-hidden mt-4">
    <div class="conteeent overflow-hidden">
    <div><img width="100%"  src="aseets/images/${courses[i].Cimage}"></div> 
    <p class="firstp"> ${courses[i].Ccategory} </p>
    <p class="secp"> ${courses[i].Cname} </p>
    <p class="thip overflow-hidden"> ${courses[i].Cdescription} </p>
    <div class="d-flex justify-content-between ">
    <span class="span1"> ${courses[i].Cteacher} </span>
    <span class="span2"> ${courses[i].Cprice} </span>
    </div>
    </div>
    </div>
    </div>
        <br> <br>  
    `
    if (courses[i].Ccategory.toLowerCase() === "development") {
        table_data_dev += table_data;
        // console.log(table_data_dev);
    }
    if (courses[i].Ccategory.toLowerCase() === "business") {
        table_data_bu += table_data;
        // console.log(table_data);
    }
    if (courses[i].Ccategory.toLowerCase() === "design") {
        table_data_de += table_data;
    }
    if (courses[i].Ccategory.toLowerCase() === "health & fitness") {
        table_data_hf += table_data;
    }
    if (courses[i].Ccategory.toLowerCase() === "lifestyle") {
        table_data_li += table_data;
    }

}
document.getElementById("development").innerHTML = table_data_dev;

document.getElementById("Business").innerHTML = table_data_bu;

document.getElementById("Design").innerHTML = table_data_de;

document.getElementById("Health_Fitness").innerHTML = table_data_hf;

document.getElementById("Lifestyle").innerHTML = table_data_li;

document.querySelector('#adevelopment').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("development").style.setProperty('display', 'flex', 'important');
    document.getElementById("Business").style.setProperty('display', 'none', 'important');
    document.getElementById("Design").style.setProperty('display', 'none', 'important');
    document.getElementById("Health_Fitness").style.setProperty('display', 'none', 'important');
    document.getElementById("Lifestyle").style.setProperty('display', 'none', 'important');
})

document.querySelector('#adevelopment1').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("development").style.setProperty('display', 'none', 'important');
    document.getElementById("Business").style.setProperty('display', 'flex', 'important');
    document.getElementById("Design").style.setProperty('display', 'none', 'important');
    document.getElementById("Health_Fitness").style.setProperty('display', 'none', 'important');
    document.getElementById("Lifestyle").style.setProperty('display', 'none', 'important');
})

document.querySelector('#adesign').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("development").style.setProperty('display', 'none', 'important');
    document.getElementById("Business").style.setProperty('display', 'none', 'important');
    document.getElementById("Design").style.setProperty('display', 'flex', 'important');
    document.getElementById("Health_Fitness").style.setProperty('display', 'none', 'important');
    document.getElementById("Lifestyle").style.setProperty('display', 'none', 'important');
})

document.querySelector('#ahealth_fitness').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("development").style.setProperty('display', 'none', 'important');
    document.getElementById("Business").style.setProperty('display', 'none', 'important');
    document.getElementById("Design").style.setProperty('display', 'none', 'important');
    document.getElementById("Health_Fitness").style.setProperty('display', 'flex', 'important');
    document.getElementById("Lifestyle").style.setProperty('display', 'none', 'important');
})

document.querySelector('#alifestyle').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("development").style.setProperty('display', 'none', 'important');
    document.getElementById("Business").style.setProperty('display', 'none', 'important');
    document.getElementById("Design").style.setProperty('display', 'none', 'important');
    document.getElementById("Health_Fitness").style.setProperty('display', 'none', 'important');
    document.getElementById("Lifestyle").style.setProperty('display', 'flex', 'important');
})

const hideBtn = document.getElementById("clos_btn");
const myDiv = document.getElementById("sing-in");

hideBtn.addEventListener("click", () => {
    myDiv.style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

const disp_div = document.getElementById("logg_btnn");
disp_div.addEventListener("click", () => {
    myDiv.style.display = "block";
    document.getElementById("overlay").style.display = "block";
    myDiv.style.zIndex='8000'
});


const hhideBtn = document.getElementById("closs_btn");
const mmyDiv = document.getElementById("sign-up");

hhideBtn.addEventListener("click", () => {
    mmyDiv.style.display = "none";
    document.getElementById("overlayy").style.display = "none";
});

const disp_divv = document.getElementById("ssgn_btnn");
disp_divv.addEventListener("click", () => {
    mmyDiv.style.display = "block";
    document.getElementById("overlayy").style.display = "block";
});




const disp_ivv=document.getElementById("logg_btn");
disp_ivv.addEventListener("click", () => {
    myDiv.style.display = "block";
    document.getElementById("overlay").style.display = "block";
    myDiv.style.zIndex='8000'
    new_nav.style.display = "none";
    new_nav.style.zIndex = "-5000";
    close_btn.style.display = "none";
});

const disp_diwvv = document.getElementById("ssgn_btn");
disp_diwvv.addEventListener("click", () => {
    console.log('mamma')
    mmyDiv.style.display = "block";
    document.getElementById("overlayy").style.display = "block";
    new_nav.style.display = "none";
    new_nav.style.zIndex = "-5000";
    close_btn.style.display = "none";
});


let loading=document.querySelector('.loading');

document.body.style.height = "100vh"; // Hide scrollbar track

window.addEventListener('load',function(){
    setTimeout(function(){
        loading.style.opacity='0';
        loading.style.visibility="hidden";
        loading.style.transition='1s';
        document.body.style.height = "auto"; // Hide scrollbar track
    },2000)
})



let scrYposition=document.querySelector('.crud_dev');
var arrowup=document.querySelector('.arrowup');
arrowup.style.opacity='0'
window.addEventListener('scroll',function(){
    if(this.window.scrollY>=(scrYposition.offsetTop-700)){
        arrowup.style.opacity='1'
    }
    else{
        arrowup.style.opacity='0'
    }
})
arrowup.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    });
})


document.querySelector('.googlePlay').addEventListener('click',function(){
    window.open('https://play.google.com/store/apps/details?id=com.heybrainapp', '_blank')
})
document.querySelector('.apple').addEventListener('click',function(){
    window.open('https://apps.apple.com/us/app/heybrain-online-courses/id1512482891', '_blank')
})
