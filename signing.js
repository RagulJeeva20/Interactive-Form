
let namespan=document.getElementById("namespan");
let mailspan=document.getElementById("mailspan");
let dobspan=document.getElementById("dobspan");
let phspan=document.getElementById("phspan");
let submitspan=document.getElementById("submitspan");

function validatename()
{
    let name=document.getElementById("name").value;
    
    
    if (!name.match(/^[A-Za-z]*$/))
     {
        namespan.innerHTML="Give Valid Name";
        return false;
     } 
     if (name.length==0)
     {
        namespan.innerHTML="Give Any Name";
        return false;
     }
    namespan.innerHTML='<i class="fa-solid fa-circle-check"></i>';

    return true;
}

function validatephone()
{
    let phone=document.getElementById("phno").value;
    let exp=/^\d{10}$/;
    if (!phone.match(exp))
    {
        phspan.innerHTML="Invalid phno";
        return false;
    }
    if (phone.length!=10)
    {
        phspan.innerHTML="ph-no should be 10 digits";
        return false;
    }
    phspan.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

}
function validatemail()
{
    let email=document.getElementById("mail").value;
    if(email.length==0)
    {
        mailspan.innerHTML="Email is Required";
        return false;
    }
    if (!email.match(/^[A-Z a-z0-9_.]*[@][a-zA-Z]*[\.][a-z]{2,4}$/)) {
        mailspan.innerHTML="Email Invalid";
        return false;
    }
    mailspan.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
}
function validatedob()
{
    let dat=document.getElementById("dob").value;
    if (dat=='')
    {
        dobspan.innerHTML="DOB Required";
        return false;
    }
    
    dobspan.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
    
}
function validatesub()
{
  if (validatedob()&&validatemail()&&validatephone()&&validatename())
  
    {
    location.reload();
    }
    else{
        submitspan.innerHTML="please fill all details correctly"
    }
    
}
