let btnn = document.querySelector('.burger_line')
let new_nav = document.querySelector('.nav_to_small_screen')
let close_btn = document.querySelector('.close')
btnn.addEventListener('click', function () {
    new_nav.style.display = "block";
    new_nav.style.zIndex = "5000";
    close_btn.style.display = "block";

})
close_btn.addEventListener('click', function () {
    new_nav.style.display = "none";
    new_nav.style.zIndex = "-5000";
    close_btn.style.display = "none";

})


// start crud
var cus_btnn=document.querySelector('.custom_BTN ');
var courseName = document.getElementById("courseName");
var courseCategory = document.getElementById("courseCategory");
var coursePrice = document.getElementById("coursePrice");
var courseDescription = document.getElementById("courseDescription");
var courseImage = document.getElementById("imageInput");
var courseTeacher = document.getElementById("courseTeacher");
let fileName='';
var update=document.getElementById("update");
var add_cor=document.getElementById("click");
update.style.display='none';
var currunt_index=0;

// var arr_courses =JSON.parse(localStorage.getItem('arr_courses'));
let localStorageData = localStorage.getItem('courses');
let dataArray = JSON.parse(localStorageData);
let arr_courses = dataArray;
if(arr_courses === null){
    arr_courses=[]
}
else{
    let arr_courses = dataArray;
}
display();
var search = document.getElementById("search");
let imageSrc;
function uploadImage() {
    const input = document.getElementById('imageInput');
         fileName = input.value.split('\\').pop(); // extract the file name
        }
function getValues(e) {
    e.preventDefault();
    addCourse();
    resetInput();
    display();
}


//create course
function addCourse() {
    var courses = {
        Cname: courseName.value,
        Ccategory: courseCategory.value,
        Cprice: coursePrice.value,
        Cdescription: courseDescription.value,
        Cimage: fileName,
        Cteacher: courseTeacher.value
    };
    arr_courses.push(courses);
    localStorage.setItem("courses", JSON.stringify(arr_courses));
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Course Added Successfully',
        showConfirmButton: false,
        timer: 1400
    })
}

// localStorage.setItem("myData", JSON.stringify(arr_courses));

function resetInput() {
    courseName.value = '';

    courseCategory.value = '';

    coursePrice.value = '';

    courseDescription.value = '';
    
    courseImage.value='';

    courseTeacher.value = '';
}
//display data
function display() {
    var table_data = '';
    for (var i = 0; i < arr_courses.length; i++) {
        table_data += `
        <tr class="d-flex justify-content-around text-center overflow-hidden style="width: 100%;">
            <td  class="custom_td td_1" > ${arr_courses[i].Cname} </td>
            <td  class="custom_td td_2 mb-3" ><img width="100%" height="100%" src="../images/${arr_courses[i].Cimage}"></td>
            <td class="custom_td td_3" > ${arr_courses[i].Ccategory} </td>
            <td class="custom_td td_4" > ${arr_courses[i].Cprice} </td>
            <td class="custom_td td_5" > ${arr_courses[i].Cdescription} </td>
            <td class="custom_td td_6" > ${arr_courses[i].Cteacher} </td>
            <td class="custom_td td_7" > <button class="btn btn-danger" onclick="getCourse(${i})">UPDATE</button> </td>
            <td class="custom_td td_8" > <button class="btn btn-danger" onclick="deleteCourse(${i})"> DELETE </button> </td>
        </tr>
        `
        
    
    }

    document.getElementById("data").innerHTML = table_data;
}

//delete table
document.getElementById("deleteBtn").onclick = function () {
    Swal.fire({
        title: 'Are you sure to delete all?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            arr_courses = [];
            localStorage.setItem("courses", JSON.stringify(arr_courses));
            document.getElementById("data").innerHTML = '';
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })

}
//delete row
function deleteCourse(index) {
    Swal.fire({
        title: 'Are you sure to delete all?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            arr_courses.splice(index, 1);
            localStorage.setItem("courses", JSON.stringify(arr_courses));
            display();
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })

}

//search  
search.onkeyup = function () {
    var table_data = ` `;
    for (var i = 0; i < arr_courses.length; i++) {
        if (arr_courses[i].Cname.toLowerCase().includes(search.value.toLowerCase())) {
            table_data += `
            <tr class="d-flex justify-content-around text-center overflow-hidden style="width: 100%;">
                <td  class="custom_td td_1" > ${arr_courses[i].Cname} </td>
                <td  class="custom_td td_2 mb-3" ><img width="100%" height="100%" src="../images/${arr_courses[i].Cimage}"></td>
                <td class="custom_td td_3" > ${arr_courses[i].Ccategory} </td>
                <td class="custom_td td_4" > ${arr_courses[i].Cprice} </td>
                <td class="custom_td td_5" > ${arr_courses[i].Cdescription} </td>
                <td class="custom_td td_6" > ${arr_courses[i].Cteacher} </td>
                <td class="custom_td td_7" > <button class="btn btn-danger" onclick="getCourse(${i})">UPDATE</button> </td>
                <td class="custom_td td_8" > <button class="btn btn-danger" onclick="deleteCourse(${i})"> DELETE </button> </td>
            </tr>
            `
        }
        document.getElementById("data").innerHTML = table_data;

    }
}
var currunt_index=0;

//update
function getCourse(index){
    var cou_s=arr_courses[index];   //get cours that user click on it
    currunt_index=index;
    courseName.value=cou_s.Cname;
    courseCategory.value=cou_s.Ccategory;
    coursePrice.value=cou_s.Cprice;
    courseDescription.value=cou_s.Cdescription;
    courseTeacher.value=cou_s.Cteacher;
    filePathInput.value=cou_s.Cimage;
    // courseImage.value=filePathInput.value;
    add_cor.style.display='none';
    update.style.display='block';
    llfilePathInput.style.display='block';
    filePathInput.style.display='block';
    cus_btnn.style.top="11%";
}
var filePath='';
var new_filePath='';
var fileInput = document.getElementById("imageInput");
var llfilePathInput = document.getElementById("llfilePath");

var filePathInput = document.getElementById("filePath");
llfilePathInput.style.display='none';
filePathInput.style.display='none';
fileInput.addEventListener('change', function() {
    filePath = fileInput.value;
    new_filePath=filePath.split("\\").pop();
    filePathInput.value = new_filePath;
});
update.onclick=function(e){
    var upd_img=filePathInput.value;
    e.preventDefault();
    var courses = {
        Cname: courseName.value,
        Ccategory: courseCategory.value,
        Cprice: coursePrice.value,
        Cdescription: courseDescription.value,
        Cimage: upd_img,
        Cteacher: courseTeacher.value
    }
    let preName=arr_courses[currunt_index].Cname;
    arr_courses[currunt_index].Cname=courses.Cname;
    arr_courses[currunt_index].Ccategory=courses.Ccategory;
    arr_courses[currunt_index].Cprice=courses.Cprice;
    arr_courses[currunt_index].Cdescription=courses.Cdescription;
    arr_courses[currunt_index].Cimage=courses.Cimage;
    arr_courses[currunt_index].Cteacher=courses.Cteacher;
    localStorage.setItem('courses',JSON.stringify(arr_courses))       
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `${preName} Updated Successfully`,
        showConfirmButton: false,
        timer: 1400
    })
    llfilePathInput.style.display='none';
    filePathInput.style.display='none';
    display();
    add_cor.style.display='inline-block';
    update.style.display='none';
    resetInput();
}




const hideBtn = document.getElementById("clos_btn");
const myDiv = document.getElementById("sing-in");

hideBtn.addEventListener("click", () => {
    console.log('ngiig')
    myDiv.style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

const disp_div = document.getElementById("logg_btn");
disp_div.addEventListener("click", () => {
    myDiv.style.display = "block";
    document.getElementById("overlay").style.display = "block";
    myDiv.style.zIndex='8000'
    new_nav.style.display = "none";
    new_nav.style.zIndex = "-5000";
    close_btn.style.display = "none";
});
const disp_ivv=document.getElementById("logg_btnn");
disp_ivv.addEventListener("click", () => {
    myDiv.style.display = "block";
    document.getElementById("overlay").style.display = "block";
    myDiv.style.zIndex='8000'
    new_nav.style.display = "none";
    new_nav.style.zIndex = "-5000";
    close_btn.style.display = "none";
});

const hhideBtn = document.getElementById("closs_btn");
const mmyDiv = document.getElementById("sign-up");

hhideBtn.addEventListener("click", () => {
    mmyDiv.style.display = "none";
    document.getElementById("overlayy").style.display = "none";
});

const disp_divv = document.getElementById("ssgn_btn");
disp_divv.addEventListener("click", () => {
    console.log('mamma')
    mmyDiv.style.display = "block";
    document.getElementById("overlayy").style.display = "block";
    new_nav.style.display = "none";
    new_nav.style.zIndex = "-5000";
    close_btn.style.display = "none";
});
const disp_diwvv = document.getElementById("ssgn_btnn");
disp_diwvv.addEventListener("click", () => {
    console.log('mamma')
    mmyDiv.style.display = "block";
    document.getElementById("overlayy").style.display = "block";
    new_nav.style.display = "none";
    new_nav.style.zIndex = "-5000";
    close_btn.style.display = "none";
});
