$(document).ready(function(){
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz",function(pndata){
    
        for(let i=0;i<pndata.length;i++){
           var pnopt1=pndata[i].options
           let pndiv=
            `<div class="pnid1" id="np${pndata[i].id}">
                <p class="pnpara1">Q${i+1}.${pndata[i].question}</p>
                <div class="pnid2">
                    <form>
                        <input type="radio" id="npopt1${i}" name="fav_language" ><label for="npopt1${i}">${pnopt1[0]}</label><br>
                        <input type="radio" id="npopt2${i}" name="fav_language"><label for="npopt2${i}">${pnopt1[1]}</label><br>
                        <input type="radio" id="npopt3${i}" name="fav_language" ><label for="npopt3${i}">${pnopt1[2]}</label></br>
                        <input type="radio" id="npopt4${i}" name="fav_language" ><label for="npopt4${i}">${pnopt1[3]}</label></br>
                    </form>
                <div>  
                <hr>
               
            </div>
            `
            $("#pnpart1").append(pndiv)
        }
        $("#pnpart1").append(`<form id="pnbtn"><button type="submit">Submit</button></form>`)
        score=0
        $(".pnstick").append(`${score}`)

        $("#np1 #npopt30").click(function(){
                     score+=1
        })
        $("#np2 #npopt11").click(function(){
                    score+=1
        })
        $("#np3 #npopt32").click(function(){
                    score+=1
        })
        $("#np4 #npopt33").click(function(){
                    score+=1
        })
        $("#np5 #npopt24").click(function(){
                    score+=1         
        })
        $("#pnbtn").submit(function(pn){
            pn.preventDefault()
            $(".pnstick").text(`${score}`)
        })
    })
})