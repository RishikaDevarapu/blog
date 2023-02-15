const from = document.querySelector("form.form");
const btn = form.querySelector("input[type='submit']");
const error = form.querySelector('.error');
form.onsubmit=(e)=>{
    e.preventDefault();
}
btn.onclick=()=>{
    let x = new XMLHttpRequest();
    x.open("POST","login.php",true);
    x.onload=()=>{
        if(x.readyState === XMLHttpRequest.DONE){
            if(x.status === 200){
                let data =x.response;
                if(data!='success'){
                    error.style.display="block";
                    error.innerHTML = data;
                }
                else{
                    location.href = "./home.html";
                }
            }
        }
    }
}