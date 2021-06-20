function addto(clicked){
if(document.getElementById("pinpage").style.display=="grid"){
    var value = document.getElementById(clicked).value;
    var input = document.getElementById("pass");
    var inputval=document.getElementById("pass").value;
    if(inputval.length<4){
    input.value+=value;
    }
}
else if(document.getElementById("Depositpage").style.display=="grid"){
    var value = document.getElementById(clicked).value;
    var input = document.getElementById("depositmoney");
    var inputval=document.getElementById("depositmoney").value;
    input.value+=value;
}
else if(document.getElementById("Withdrawpage").style.display=="grid"){
    var value = document.getElementById(clicked).value;
    var input = document.getElementById("withdraw");
    var inputval=document.getElementById("withdraw").value;
    if(inputval.length<10){
        input.value+=value;
        }
}
else if(document.getElementById("transferpage").style.display=="grid"){
    var value = document.getElementById(clicked).value;
    var input = document.getElementById("accountnumber");
    var inputval=document.getElementById("accountnumber").value;
    if(inputval.length<10){
        input.value+=value;
        }
}
else if(document.getElementById("newpinpage").style.display=="grid"){
    var value = document.getElementById(clicked).value;
    var input = document.getElementById("newpin");
    var inputval=document.getElementById("newpin").value;
    if(inputval.length<4){
        input.value+=value;
        }
}
else if(document.getElementById("transferamount").style.display=="grid"){
    var value = document.getElementById(clicked).value;
    var input = document.getElementById("amount_to_transfer");
    var inputval=document.getElementById("amount_to_transfer").value;
    input.value+=value;
}
}

function clearpin(){
    if(document.getElementById("pinpage").style.display=="grid"){
    document.getElementById("pass").value="";
    }
    else if(document.getElementById("Depositpage").style.display=="grid"){      
        document.getElementById("depositmoney").value="";
    }
    else if(document.getElementById("transferpage").style.display=="grid"){
        document.getElementById("accountnumber").value="";
    }
    else if(document.getElementById("newpinpage").style.display=="grid"){
        document.getElementById("newpin").value="";
    }
    else if(document.getElementById("transferamount").style.display=="grid"){
        document.getElementById("amount_to_transfer").value="";
    }
    else if(document.getElementById("Withdrawpage").style.display=="grid"){
        document.getElementById("withdraw").value="";
    }
}
function submitpin(){
    if(document.getElementById("pinpage").style.display=="grid"){
    document.getElementById("atmcard").onclick='';
    password="1234";
    var pass=document.getElementById("pass").value;
    if(pass==password){
        document.getElementById("pinpage").style.display="none";
        document.getElementById("fundpage").style.display="grid";
    }
    else{
        if(pass.length==0){
            alert("Please enter PIN");
        }
        else{
        alert("Sorry PIN is incorrect!");
        document.getElementById("pass").value="";
        }
    }
    }
}
function scancard(){
    document.getElementById("atmcard").classList.add("cardanim");
    setTimeout(function(){document.getElementById("mainpage").style.display="none";}, 2400);
    setTimeout(function(){document.getElementById("pinpage").style.display="grid";}, 2400);    
}

// Balance Withdraw and deposit
var balance = 1000;
function showBalance(){
    document.getElementById("fundpage").style.display="none";
    document.getElementById("fundbalance").style.display="grid";
    document.getElementById("balAmount").innerHTML=balance;
}

//function to print receipt
function printreceipt(){
    setTimeout(function(){
        document.getElementById("receipt").style.display="block";
    },1000);
}

//function to take the receipt
function takereceipt(){
    setTimeout(function(){
        document.getElementById("receipt").style.display="none";
    },200);
    document.getElementById("fundbalance").style.display="none";
    document.getElementById("fundpage").style.display="grid";
}
//When user needs no receipt goes to the fund page
function noreceipt(){
    document.getElementById("fundbalance").style.display="none";
    document.getElementById("fundpage").style.display="grid";
}

//When cancel button pressed goto main page
function gotohome(){
    document.getElementById("fundpage").style.display="none";
    document.getElementById("mainpage").style.display="grid";
    document.getElementById("atmcard").classList.add("cardremoveanim");
}

//function to show the deposit page
function deposit(){
    document.getElementById("fundpage").style.display="none";
    document.getElementById("Depositpage").style.display="grid";
}
//function to deposit amount
function depositamount(){
    var depositedamount = document.getElementById("depositmoney").value;
    if(depositedamount.length==0){
        alert("Please enter amount to deposit");
    }
    else{    
    balance =  balance+parseInt(depositedamount);
   
    setTimeout(function(){
        document.getElementById("Depositpage").style.display="none";
        document.getElementById("fundpage").style.display="grid";
    },1000);
    }
}
//function to cancel deposit and go to fund page
function cancelDeposit(){
    document.getElementById("Depositpage").style.display="none";
    document.getElementById("fundpage").style.display="grid";
    document.getElementById("depositmoney").value="";
}
//function to show the tranfer page
function transfer(){
    document.getElementById("fundpage").style.display="none";
    document.getElementById("transferpage").style.display="grid";
}

//function to tranfer money
function tranferamount(){
    var accountnumber = document.getElementById("accountnumber").value;
    if(accountnumber.length==0){
        alert("Please enter the account number to transfer");
    }
    else{    
     
        document.getElementById("transferpage").style.display="none";
        document.getElementById("transferamount").style.display="grid";
        document.getElementById("accountnumber").value=""; 
    }
}

//function transfer amount 
function transfernow(){
    var amount_to_transfer = document.getElementById("amount_to_transfer").value;
    if(amount_to_transfer>=balance){
        alert("Sorry insufficient balance");
        document.getElementById("transferamount").style.display="none";
        document.getElementById("fundpage").style.display="grid";
    }
    else if(amount_to_transfer.length==0){
        alert("Please enter the amount");
    }
    else{
        balance = balance-amount_to_transfer;
        document.getElementById("transferamount").style.display="none";
        document.getElementById("fundpage").style.display="grid";
    }
}


//function to cancel tranfer
function canceltransfer(){
    document.getElementById("transferpage").style.display="none";
    document.getElementById("fundpage").style.display="grid";
    document.getElementById("accountnumber").value=""; 
}


//Function to got to withdraw page
function withdrawpage(){
    document.getElementById("fundpage").style.display="none";
    document.getElementById("Withdrawpage").style.display="grid"; 
}
//function withdraw
function withdrawamount(){
    if(document.getElementById("withdraw").value.length==0){
        alert("Please Enter the amount");
    }
    else if(document.getElementById("withdraw").value>balance+10){
        alert("Sorry you have insufficient Balance");
        document.getElementById("withdraw").value="";
    }
    else{
        balance = balance - document.getElementById("withdraw").value;  
        document.getElementById("cashwithdraw").style.display="block";      
        document.getElementById("cashwithdraw").classList.add("cashanim");
        setTimeout(function(){
            document.getElementById("withdraw").value="";
            document.getElementById("Withdrawpage").style.display="none";
            document.getElementById("fundpage").style.display="grid";
        },1000)
    }
}
//function to get the cash 
function takecash(){
    document.getElementById("cashwithdraw").style.display="none";    
}

//function to cancel withdraw
function cancelWithdraw(){
    document.getElementById("Withdrawpage").style.display="none";
    document.getElementById("fundpage").style.display="grid"; 
    document.getElementById("withdraw").value="";
}


///function to open the pin changing confirmation page
function pinchangepage(){
    document.getElementById("fundpage").style.display="none";
    document.getElementById("pinchangepage").style.display="grid";
}


//function to change pin page
function changepin(){
    document.getElementById("pinchangepage").style.display="none";
    document.getElementById("newpinpage").style.display="grid";
}

//function to cancel pin change
function nopinchange(){
    document.getElementById("pinchangepage").style.display="none";
    document.getElementById("fundpage").style.display="grid";  
}

//funciton to change the pin and go to the fund page

function newpin(){
    var newpin = document.getElementById("newpin").value;
    if(newpin.length==0){
        alert("Please enter a pin");
    }
    else{
    password = newpin;
    alert("Password changed successfully")
    document.getElementById("newpinpage").style.display="none";
    document.getElementById("fundpage").style.display="grid";
    }
}