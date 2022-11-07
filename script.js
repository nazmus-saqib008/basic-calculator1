let string="";
let ans="";
let buttons=document.querySelectorAll(".buttons");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.innerHTML=="="){
            string= eval(string);
            document.querySelector('input').value=string;
            ans=string;
        }
        else if(e.target.innerHTML=="C"){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="M"){
            string=string+ans;
            console.log(ans);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="|x|"){
            if(string.includes("--")){
                string="syntax error";
            }
            else{
                string=(string.includes("-"))?string.substring(1):string;
                document.querySelector('input').value=string;
            }
        }
        else{
            string= string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})