const correctans=['A','A','B','B','A','B'];

const form=document.querySelector('.form');

const result = document.querySelector('.resultB');



form.addEventListener('submit',e=>{

e.preventDefault();

let score = 0;

const ans = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value];

ans.forEach((answer,index) =>{

if(answer === correctans[index])
{
score+=20;
}

});

score = Math.round((score/120)*100);




result.firstElementChild.textContent = `You  are ${score} % Football Fan`;

result.setAttribute("class","result")

scrollTo(100,900);


setTimeout(()=>{

    thank = form.subname.value;

    alert(`Thanks ${thank} for your time :)`);

},1000)




});


