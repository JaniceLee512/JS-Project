const lotto=[];
   while(lotto.length<6){
      var num=Math.floor(Math.random()*42+1);
        if(!lotto.includes(num)){//若陣列不含num
            lotto.push(num);//push陣列加入num
            console.log(lotto.toString());
           }
           }

const lottonumber=[];

function show(){
   var number=document.getElementById("number");
   var show=document.getElementById("show");
   var err=document.getElementById("err");
   var n= parseInt(number.value);
if(lottonumber.length<6){
      
      
      if(isNaN(n)){
         err.innerHTML= "輸入錯誤!不可為空白或非整數!請重新輸入!";
      }   
      else if(n<1||n>42){
             err.innerHTML="數字需介於1~42之間!請重新輸入!";
             }
      else{
         if(!lottonumber.includes(n)){
               $('#err').empty();
               lottonumber.push(n);
               show.innerHTML+=n+" ";
                                        }
            else{
                err.innerHTML="號碼不可重複!";
                }
             }
   }
   else {
      $('#show').empty();
      err.innerHTML="號碼已滿!已輸入6個號碼!,如需調整, 請清除並重新輸入!"
      +"<br>"
      +"您的號碼:"+lottonumber.toString();

   }
   }
function match(){
  if(lottonumber.length<6){
   result.innerHTML="請將您的樂透號碼輸入完成再兌獎!"
  }
  else{
   $('#result').empty();
   result.innerHTML=
   "您的號碼:"+lottonumber.toString()
   +"<br>"+"樂透號碼:"+lotto.toString()
   const match=[];
   for(var i=0; i<lottonumber.length;i++){
      for(var j=0; j<lotto.length;j++){
         if(lottonumber[i]==lotto[j]){
            match.push(lottonumber[i]);
         }
         }
 
      }
      if(match.length==0){
         result.innerHTML+="<br>"+"您沒有中獎,再接再厲!"
      }
      else{
         result.innerHTML+="<br>"+"恭喜中獎,您的中獎號碼:"+match.toString();
      }
   }
}

function reset(){
   $('#number').val(" ");  
};
function empty(){
   $('#show').empty();
   $('#result').empty();
   $('#err').empty();
   $('#number').val(" ");
   lottonumber.length=0;
};


