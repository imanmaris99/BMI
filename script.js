var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

/*modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];*/


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = "kekurangan berat badan";
     }else if(18.5<=bmi&&bmi<=24.9){
    result = "Alhamdulillah sehat";
     }else if(25<=bmi&&bmi<=29.9){
    result = "memiliki berat badan berlebih";
     }else if(30<=bmi&&bmi<=34.9){
    result = "harus konsultasi ke dokter";
     }else if(35<=bmi){
    result = 'perlu ke Rumahsakit';
     }

  var resultb = '';
    if(bmi<18.5){
      resultb = "Berat Badan Kurang";
        }else if(18.5<=bmi&&bmi<=24.9){
      resultb = "Normal";
        }else if(25<=bmi&&bmi<=29.9){
      resultb = "Berat badan berlebih";
        }else if(30<=bmi&&bmi<=34.9){
      resultb = "Berada dalam kategori obesitas";
        }else if(35<=bmi){
      resultb = 'Extremely Obese';
        }

  var resultc = '';
    if(bmi<18.5){
      resultc = "Beberapa penyakit dari berat badan kurang";
       }else if(18.5<=bmi&&bmi<=24.9){
      resultc = "Kesehatan prima";
       }else if(25<=bmi&&bmi<=29.9){
      resultc = "Beberapa penyakit yang berasal dari kegemukan";
       }else if(30<=bmi&&bmi<=34.9){
      resultc = "Beberapa penyakit yang berasal dari kegemukan";
       }else if(35<=bmi){
      resultc = 'Extremely Obese';
       }

  var resultd = '';
    if(bmi<18.5){
      resultd = 
      "Infertilitas","Anemia","Osteoporosis","Sistem Imun Lemah";
        }else if(18.5<=bmi&&bmi<=24.9){
      resultd = "Terus dijaga";
        }else if(25<=bmi&&bmi<=29.9){
      resultd = 
      "Diabetes","Hipertensi","Sakit Jantung","Osteoarthritis";
        }else if(30<=bmi&&bmi<=34.9){
      resultd = 
      "Diabetes","Hipertensi","Sakit Jantung","Osteoarthritis";
        }else if(35<=bmi){
      resultd = 
      "Diabetes","Hipertensi","Sakit Jantung","Osteoarthritis";
        }

resultArea.style.display = "block";
document.querySelector(".comment1").innerHTML = ` <span id="comment1">${resultb}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);
document.querySelector(".comment").innerHTML = `Anda <span id="comment">${result}</span>`;
document.querySelector(".comment2").innerHTML = ` <span id="comment2">${resultc}</span>`;
document.querySelector(".comment3").innerHTML = ` <span id="comment3">${resultd}</span>`;
}

function kosong()
 {
    let radios =document.getElementsByName("radio");
    for(i=0;i<radios.length;i++)
    {
        radios[i].checked = false;
    }
    document.getElementById("weight").value = "";
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementsByClass("comment1").innerHTML = "";
    document.getElementsByClass("comment").innerHTML = "";
    document.getElementsByClass("comment2").innerHTML = "";
    document.getElementsByClass("comment3").innerHTML = "";
 }



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
