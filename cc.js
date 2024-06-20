let select=document.querySelectorAll('.c')
let btn=document.querySelector('.btn')
let input=document.querySelector('.leftn')
fetch('https://www.frankfurter.app/currencies')

.then(res=>(res.json()))
.then(res=>display(res))

function display(res)
{
    let cur=Object.entries(res)
    for(let i=0;i<cur.length;i++)
        {
            let opt=`<option value="${cur[i][0]}">${cur[i][0]}</option>`
            select[0].innerHTML+=opt
            select[1].innerHTML+=opt
        
        }
}

btn.addEventListener('click',()=>
{
    let curr1=select[0].value
    let curr2=select[1].value
    let inputval=input.value

    if(curr1===curr2)
        {
            alert("CHOOSE DIFFERENT COUNTRIES")
        }
        else{
            convert(curr1,curr2,inputval)
        }
})

function convert(curr1,curr2,inputval)
{
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputval}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    
    document.querySelector('.rightn').value=Object.values(data.rates)
  });
}

