let ragistration, makeResult, studentList, showResult;

ragistration = document.getElementById('ragistration');
makeResult = document.getElementById('makeResult');
studentList = document.getElementById('studentList');
showResult = document.getElementById('showResult');

let regSec = document.getElementById('regSec');
let resultMakeSec = document.getElementById('resultMakeSec');
let studentListSec = document.getElementById('studentListSec');

studentListSec.style.display = "none";
resultMakeSec.style.display = "none";



ragistration.addEventListener('click', function () {
   ragistration.classList.add('active');
   makeResult.classList.remove('active');
   studentList.classList.remove('active');
   regSec.style.display = "block"
   resultMakeSec.style.display = "none";
   studentListSec.style.display = "none";

});

makeResult.addEventListener('click', function () {
   makeResult.classList.add('active');
   resultMakeSec.style.display = "block"
   studentListSec.style.display = "none";
   regSec.style.display = "none"
   ragistration.classList.remove('active');
   studentList.classList.remove('active');


});

studentList.addEventListener('click', function () {
   studentList.classList.add('active');
   studentListSec.style.display = "block";
   resultMakeSec.style.display = "none"
   regSec.style.display = "none"
   ragistration.classList.remove('active');
   makeResult.classList.remove('active');


});

showResult.addEventListener('click', function () {
   studentList.classList.add('active');
   studentListSec.style.display = "block";
   resultMakeSec.style.display = "none"
   regSec.style.display = "none"
   ragistration.classList.remove('active');
   makeResult.classList.remove('active');


});

let regBtn, submitBnt;
let regName, regFname, regRoll, regCls;

regBtn = document.getElementById('regBtn');
submitBnt = document.getElementById('submitBtn');

regName = document.getElementById('regName');
regFname = document.getElementById('regFname');
regRoll = document.getElementById('regRoll');
regCls = document.getElementById('regCls');

function checkForm() {
   if (regName.value !== '' && regFname.value !== '' && regRoll.value !== '' && regCls.value !== '') {
      regBtn.removeAttribute('disabled')
   } else {
      regBtn.setAttribute('disabled', true)
   }
}

let sname, fname, rnom, cls, showData;
let hindi, english, science, mathematics, socialScience;


sname = document.getElementById('sname');
fname = document.getElementById('fname');
rnom = document.getElementById('rnom');
cls = document.getElementById('cls');
showData = document.getElementById('myData')


hindi = document.getElementById('hindi');
english = document.getElementById('english');
science = document.getElementById('science');
mathematics = document.getElementById('mathes');
socialScience = document.getElementById('sscience');


regBtn.addEventListener('click', function () {
   sname.value = regName.value;
   fname.value = regFname.value;
   rnom.value = regRoll.value;
   cls.value = regCls.value;

   regName.value = '';
   regFname.value = '';
   regRoll.value = '';
   regCls.value = '';
})

function fillForm() {
   if (sname.value !== '' && fname.value !== '' && rnom.value !== '' && cls.value !== '' && hindi.value !== '' && english.value !== '' && science.value !== '' && socialScience.value !== '' && mathematics.value !== '') {
      submitBnt.removeAttribute('disabled');
   } else {
      submitBnt.setAttribute('disabled', true)
   }


}

submitBnt.addEventListener('click', () => {
   let total = parseInt(hindi.value) + parseInt(english.value) + parseInt(science.value) + parseInt(mathematics.value) + parseInt(socialScience.value);

   let per = total / 5;

   let  resultShow = document.getElementById('resultShow');  
   // let  resultFail ;
   
   if(per > 30){
      resultShow.value = "Pass"; 
   }else{
      resultShow.value = "Fail" ;
   };



   tableData.innerHTML += `
         <tr class="${resultShow.value}">
            <td>${sname.value}</td>
            <td>${cls.value}</td>
            <td>500</td>
            <td>${total}</td>
            <td>${per}%</td>
            <td>${resultShow.value}</td>
           
         </tr>
        `;

        
   
   sname.value = '';
   fname.value = '';
   cls.value = '';
   rnom.value = '';
   hindi.value = '';
   english.value = '';
   science.value = '';
   mathematics.value = '';
   socialScience.value = '';
   resultShow.value = '';


})