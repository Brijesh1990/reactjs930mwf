function lg()
{
    var em=document.getElementById("email").value;
    var pwd=document.getElementById("pwd").value;
    if(em=='admin@gmail.com' && pwd=='admin@123')
    {
    
        alert('You are Logged In   successfully');
        window.location='dashboard.html';
    }
    else 
    {

        alert('Your emAIL AND PASSWORD ARE INCORECT');
        window.location='index.html';
    }

}

function logout()
{
    alert('You are Logout successfully');
    window.location='index.html';
} 
