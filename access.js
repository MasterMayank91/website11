/* Security Lock Webpage for protection for website */
try
{
    let center = document.getElementById("center");

    let button = document.getElementsByClassName("button");

    let field = document.getElementsByClassName("field");

    let check = document.getElementById("check");

    var empty = "";

    field[0].value = "";
    field[1].value = "";
    field[2].value = "";    

    check.onclick = function()
    {
        this.style.backgroundColor = "#000";

        check.innerHTML = " &cross; Hide Code";

        field[1].attributes[0].value = "text";
        field[2].attributes[0].value = "text"; 
        
        setTimeout(() => {
            check.innerHTML = " &check; Show Code";

            field[1].attributes[0].value = "password";
            field[2].attributes[0].value = "password";
        } ,5000);
    }

    button[0].onclick = function()
    {
        const code1 = "hell"; 
        const code2 = "0000";
        const code3 = "void";

        if(field[0].value == empty)
        {
            center.innerHTML = "<h2>EMPTY ALERT</h2><p> Your Username is Empty Please Fill that field it is important for security lock </p><button class='button'> BACK </button>";
        }
        else
        {
            if(field[1].value == empty)
            {
                center.innerHTML = "<h2>EMPTY ALERT</h2><p> Your Password is Empty Please Fill that field it is important for security lock </p><button class='button'> BACK </button>";
            }
            else
            {
                if(field[2].value == empty)
                {
                    center.innerHTML = "<h2>EMPTY ALERT</h2><p> Your Confirm is Empty Please Fill that field it is important for security lock </p><button class='button'> BACK </button>";
                }
                else
                {
                    if(field[1].value == field[2].value)
                    {
                        if(field[1].value == code1 || field[1].value == code2 || field[1].value == code3)
                        {
                            center.innerHTML = "<h2>SUCCESSFUL</h2><p> Welcome "+field[0].value+"<br> Your Security Lock is Successfully Unlock </p>";
                            
                            setTimeout(() => { /* Delete and write open code */ window.location.reload(); }, 3000);
                        } 
                        else
                        {
                            center.innerHTML = "<h2>PASSWORD WARNING</h2><p> Your Password is Wrong Please recheck your password otherwise your forget so click to forget password or forget id if you had never login so please login </p><button class='button'> BACK </button>";
                        }
                    }
                    else
                    {
                        center.innerHTML = "<h2>CONFIRM WARNING</h2><p> Your Confirm is Not match to Your Password Please recheck your confirm field value </p><button class='button'> BACK </button>";
                    }
                }
            }
        }
        button[0].onclick = function()
        {
            window.location.reload();
        }   
    }
}
catch(error)
{
    window.alert(error.message);
}