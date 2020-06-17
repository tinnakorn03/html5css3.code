
//function Control Canvas & Svg ----------------------------------------- 

//___2
var c2 = document.querySelector('#mycanvas2');
var ctx2 = c2.getContext("2d");
ctx2.moveTo(0, 0);
// move pointer to coordinates where x=0 and y=0;
ctx2.lineTo(150, 100);
// draw line to coordinates where x=200, and y=150
ctx2.stroke();
// draw outline of stroke

//___3
var c3 = document.querySelector('#mycanvas3');
var ctx3 = c3.getContext("2d");

ctx3.beginPath();
ctx3.moveTo(10, 10);
ctx3.lineTo(280, 10);
ctx3.lineTo(280, 140);
ctx3.lineTo(10, 140);
ctx3.lineTo(10, 10);
ctx3.fillStyle = "#aaa"
ctx3.fill();
ctx3.closePath();

ctx3.beginPath();
ctx3.moveTo(10, 10);
ctx3.lineTo(140, 80);
ctx3.lineTo(280, 10);
ctx3.fillStyle = "#888";
ctx3.fill();
ctx3.closePath();

//___4
var c4 = document.querySelector('#mycanvas4');
var ctx4 = c4.getContext("2d");
ctx4.arc(160, 70, 40, 0, 2 * Math.PI);

ctx4.fill()



//function Control Canvas & Svg --------------------------------------End
//function CSS3 Borders ตัวอย่าง 3 Modal
function openModal() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // อ้างอิงจาก Attribute "class" เรียกใช้ class ที่ชื่อ close
    //เนื่องจาก Attribute "class" จะเก็บชื่อไว้ในรูปแบบ Array จึงต้องอ้างถึงตำแหน่ง Arrayที่ต้องการด้วย
    var span = document.getElementsByClassName("close")[0];

    //ตัวอย่าง Attribute "class"
    //class="close open text"
    //class จะเท่ากับ class:{[0]close,[1]open,[2]text}

    // เมื่อคลิกbutton Open Modal ให้เปิดModal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // เมื่อคลิก X ให้ปิด Modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // เมื่อมีการคลิกพื้นที่นอก Modal ให้มันปิด Modal ไปด้วย
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}


//////////////////////////////////////////////////////////////////////////
//function Control Web UI ------------------------------------------------ 
function GetData() {

    var item = document.getElementById('items');

    //Get the values
    var val = item.getAttribute('data-itemName');
    alert(val);

    val = val.split("_");
    val = val[1];
    val = parseInt(val) + 1;

    //Change the values
    item.setAttribute('data-itemName', 'Test' + '_' + val); //เขียนค่ากลับลงไปใน attribute


};

function Addclass_hidden() {

    var val = document.getElementById('Ex_hidden').innerText;
    val = val.trim();
    if (val != "hidden")
        document.getElementsByTagName("button")[0].removeAttribute("hidden");
    if (val == "hidden")
        document.getElementsByTagName("button")[0].setAttribute("hidden", "");


    //document.getElementById("Ex_hidden").style.backgroundColor = "white";

};

function slecteMunu(name) {
    //add hidden & remove class ให้กับ Nav---------------------------------//
    //HTML5
    document.getElementsByName("Home")[0].setAttribute("hidden", "");
    document.getElementById("Home").classList.remove("active");

    document.getElementsByName("TagInput")[0].setAttribute("hidden", "");
    document.getElementById("TagInput").classList.remove("active");

    document.getElementsByName("AttributesForInput")[0].setAttribute("hidden", "");
    document.getElementById("AttributesForInput").classList.remove("active");

    document.getElementsByName("VideoAudio")[0].setAttribute("hidden", "");
    document.getElementById("VideoAudio").classList.remove("active");

    document.getElementsByName("CanvasSvg")[0].setAttribute("hidden", "");
    document.getElementById("CanvasSvg").classList.remove("active");

    document.getElementsByName("Example")[0].setAttribute("hidden", "");
    document.getElementById("Example").classList.remove("active");


    //CSS3
    document.getElementsByName("CSS3Borders")[0].setAttribute("hidden", "");
    document.getElementById("CSS3Borders").classList.remove("active");

    document.getElementsByName("CSS3Backgrounds")[0].setAttribute("hidden", "");
    document.getElementById("CSS3Backgrounds").classList.remove("active");

    document.getElementsByName("CSS3TextEffects")[0].setAttribute("hidden", "");
    document.getElementById("CSS3TextEffects").classList.remove("active");

    document.getElementsByName("CSS3Fonts")[0].setAttribute("hidden", "");
    document.getElementById("CSS3Fonts").classList.remove("active");

    document.getElementsByName("CSS32DTransforms")[0].setAttribute("hidden", "");
    document.getElementById("CSS32DTransforms").classList.remove("active");

    document.getElementsByName("CSS33DTransforms")[0].setAttribute("hidden", "");
    document.getElementById("CSS33DTransforms").classList.remove("active");

    document.getElementsByName("CSS3Transitions")[0].setAttribute("hidden", "");
    document.getElementById("CSS3Transitions").classList.remove("active");

    document.getElementsByName("CSS3Animations")[0].setAttribute("hidden", "");
    document.getElementById("CSS3Animations").classList.remove("active");

    //-------------------------------------------------------------------//

    //remove hidden & add class ให้กับ Nav
    document.getElementsByName(name)[0].removeAttribute("hidden");
    document.getElementById(name).classList.add("active");

}

function minlength() {
    var minlength = document.getElementById("minlength").value;
    if (minlength.length < 3)
        alert("minlength < 3");
}

//function Control UI -------------------------------------------------End 
//////////////////////////////////////////////////////////////////////////
