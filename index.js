var os=document.getElementById('os')


function display(txt)
{
    os.value+=txt;


}

function ac()
{
  
 os.value=" ";

}


function clr()
{
    os.value= os.value.slice(0,-1);

    
}




function squre()
{

    os.value= os.value*os.value;
}


function cube()
{

    os.value= os.value*os.value*os.value;
}







function calculate()
{
    os.value=eval(os.value);

    
}