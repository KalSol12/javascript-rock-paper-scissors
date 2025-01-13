
 


 let randomNumber;
         /* The first function */
    function computerPick(yourMove) {
      let computermove=" ";
      randomNumber=Math.random();
       if (randomNumber>=0 && randomNumber<1/3) {
        computermove="rock"
        
       }
       else if (randomNumber>=1/3 && randomNumber<2/3) {
        computermove="paper";;
        
       }
       else if (randomNumber>=2/3&& randomNumber<1) 
       {
             computermove="scissors";
       }
       result(computermove,yourMove)
    } 
     
/* another function  */

          let toObject=localStorage.getItem("score");
         let score=JSON.parse(toObject)||{
          win:0,
          loss:0,
          tie:0
        };
       updateScoreMove();
    
    
      function result(computermove,yourMove) {

        let results="";
        
        if (computermove===yourMove) {
                results="tie"
          } 
          // for rock
        else if(computermove==='paper' && yourMove==="rock"){
        
      results="loss"}
        else if(computermove==="scissors" && yourMove==="rock"){
          
          results="won"
        }
        
        // for paper
        else if(computermove==='rock' && yourMove==="paper"){
        
        results="won"
      
      }
        else if(computermove==="scissors" && yourMove==='paper'){
          
          results="loss"
        }
        //for scissor
        else if (computermove==="rock"&&yourMove==="scissors"){
          results="loss"
        }
        else if (yourMove==="scissors"&&computermove==="paper"){
           results="won" }

           if (results==="won") {
            /* score.win+=1; */
             win=score.win+=1;
            
           }
           else if (results==="loss") {
            score.loss+=1;
            
           }
           else if (results==="tie") 
            {
            score.tie+=1;
           }
         localStorage.setItem("score",JSON.stringify(score));
     document.querySelector('.result').innerHTML=results;
  document.querySelector('.js-move').innerHTML=
    `
    you
    <img class="move-icon" src="images/${yourMove}-emoji.png" alt="">
     <img class="move-icon" src="images/${computermove}-emoji.png" alt=""> 
     computer`

          updateScoreMove();
        }
        function updateScoreMove(params) {
          document.querySelector('.js-score').innerHTML=`Win${score.win } Loss ${score.loss} Tie ${score.tie}`;

     
        }
