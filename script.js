async function getData(place){
    url=`https://timezone.abstractapi.com/v1/current_time/?api_key=525f3a7d043c4c029c8981114d0e8021&location=${place}`
    
    const res=await fetch(url)
    data=await res.json()
    time=data.datetime
    document.getElementById("time").innerText=`${place}'s time= ${time} ${data.timezone_abbreviation}`

}

document.querySelectorAll(".allPaths").forEach(e=>{

    e.addEventListener("mouseover",function(){
        window.onmousemove=function(j){
        x=j.clientX             //give position of cursor on x-axis
        y=j.clientY             //give position of cursor on y-axis

        document.getElementById("name").style.top=y-20+"px"
        document.getElementById("name").style.left=x+10+"px"
        }

        e.style.fill="gray";
        document.getElementById("namep").innerText=e.id;
        document.getElementById("name").style.opacity=1
    })

    e.addEventListener("mouseleave",function(){
            e.style.fill="#ececec"
            document.getElementById("name").style.opacity=0
    })

e.addEventListener("click",function(){
    getData(e.id)
})

})