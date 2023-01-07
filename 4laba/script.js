function random() {
    return Math.floor(Math.random() * 255)
}

let elem_1 = document.getElementById("p_elem");
let elem_2 = document.querySelector(".h4_elem");

function change_color(new_var) {
    new_var.style.color = 'rgb(' + random() + "," + random() + "," + random() + ')';
    new_var.style.background = 'rgb(' + random() + "," + random() + "," + random() + ')';
}

let add = document.getElementById("add");
add.addEventListener("click", function add_picture(){
    let new_div = document.createElement("div");

    document.getElementById("start_div").appendChild(new_div);
    new_div.id = "new_elem";

    new_div.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Ku02.JPG/132px-Ku02.JPG' id='new_picture' alt='picture'>";
}, {once: true});

let inc = document.getElementById("zoom+");
inc.addEventListener("click", function inc_picture(){
    let pic = document.getElementById("new_picture");

    let maxsize = "400";
    pic.height = maxsize;
}, {once: true});

let dec = document.getElementById("zoom-");
dec.addEventListener("click", function dec_picture(){
    let pic = document.getElementById("new_picture");

    let minsize = "90";
    pic.height = minsize;
}, {once: true});

let del = document.getElementById("delete");
del.addEventListener("click", function del_picture(){
    let new_div = document.getElementById("new_elem");

    new_div.innerHTML = "";
}, {once: true});
