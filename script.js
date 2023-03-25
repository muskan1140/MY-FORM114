var form=document.getElementById('form');
var displayButton = document.getElementById("display-btn")
var displayName = document.querySelector(".data");
var clearButton = document.getElementById("clearbutton")
var error=[];

form.addEventListener('submit',function(e){
   e.preventDefault();
   var id =Math.random() * 10;
   var username=document.getElementById("username").value;
   var surname=document.getElementById('surname').value;
   var email_id=document.getElementById('email_id').value;
   var mobile=document.getElementById('mobile').value;
   var gender=document.querySelector('input[name="gender"]:checked').value;
   var City=document.getElementById('City').value;
   var degree=document.getElementById('degree').value;
   let language = getLanguage();
   let obj ={id,username,surname,email_id,mobile,gender,City,degree,language};
   addData();

   

  function getData(){
   let user = JSON.parse(localStorage.getItem('result'));
   return user;
  }

  function addData(){
   let user1 = getData() ?? [];
       
   const newUser  = [...user1];
   newUser.push(obj)
   localStorage.setItem('result',JSON.stringify(newUser));
 }
 

    function getLanguage() {
      var checkboxes = document.getElementsByName('language');

      var result = [];

      for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
              result.push(checkboxes[i].value)
          }
      }
      return result;
  }

})

clearButton.addEventListener("click",() => {
   console.log("clear")
   localStorage.clear();
   window.location.reload();
})

displayButton.addEventListener("click",function(){
   console.log("data")
   let data = localStorage.getItem("result");
   data = JSON.parse(data)
    displayName.innerHTML = '<h3 class="user-detail">User Details</h3>'
    data.map((item, idx) => {
      displayName.innerHTML += `<p class="user-title">User ${idx+1}</p>`;
      for (const key in item) {
         displayName.innerHTML += `<p class="user-entry">${key} : ${item[key]}</p>`;
      }
   })
})
