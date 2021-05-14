function schoolInfoSync(){
    var schoolCode = document.getElementById("schoolCode").value;

    if(schoolCode==1){
        document.getElementById("schoolName").value = "Jaime C."
        document.getElementById("municipality").value = "Yabucoa"
    } else{
        document.getElementById("schoolName").value = ""
        document.getElementById("municipality").value = ""
    }
}

//Submit button checking validation for each field 
(function () {
    "use strict"

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add("was-validated")
        }, false)
    })
})()

//Functions for images tied to each unit or product in the tableForUnitSN

function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#img1").attr("src", e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#formFile1").change(function(){
    readURL1(this);
});

function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#img2").attr("src", e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#formFile2").change(function(){
    readURL2(this);
});

function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#img3").attr("src", e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#formFile3").change(function(){
    readURL3(this);
});

function readURL4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#img4").attr("src", e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#formFile4").change(function(){
    readURL4(this);
});

function readURL5(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#img5").attr("src", e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#formFile5").change(function(){
    readURL5(this);
});

function readURL6(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#img6").attr("src", e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#formFile6").change(function(){
    readURL6(this);
});

function readURL7(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#img7").attr("src", e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#formFile7").change(function(){
    readURL7(this);
});

function readURL8(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#img8").attr("src", e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#formFile8").change(function(){
    readURL8(this);
});

function readURL9(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#img9").attr("src", e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#formFile9").change(function(){
    readURL9(this);
});

function readURL10(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#img10").attr("src", e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#formFile10").change(function(){
    readURL10(this);
});

