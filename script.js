
const reasons=[
["Your Smile","It can fix my worst day."],
["Your Heart","You're kind in ways words can't explain."],
["Your Support","You make me believe in myself."],
["Our Future","Every dream is better because you're in it."],
["Your Laugh","My favorite sound."],
["Forever","I'd choose you in every lifetime."]
];
const cards=document.querySelector(".cards");
reasons.forEach(r=>{
 let d=document.createElement("div");
 d.className="card";
 d.innerHTML="<h3>"+r[0]+"</h3><p style='display:none'>"+r[1]+"</p>";
 d.onclick=()=>{let p=d.querySelector("p");p.style.display=p.style.display==="block"?"block":"block";}
 cards.appendChild(d);
});
function toggleLetter(){document.getElementById("letter").classList.toggle("hidden");}
gift.onclick=()=>{
 gift.innerHTML="💖";
 giftmsg.innerHTML="Surprise! My biggest gift is getting to spend forever with you. Happy Birthday, Lovely! ❤️";
 for(let i=0;i<120;i++)spawn();
}
function spawn(){
 let h=document.createElement("div");
 h.className="heart";
 h.innerHTML=Math.random()>0.5?"❤️":"💕";
 h.style.left=Math.random()*100+"vw";
 h.style.animationDuration=(3+Math.random()*4)+"s";
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),7000);
}
setInterval(()=>{if(document.querySelectorAll('.heart').length<25)spawn()},500);
