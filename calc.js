function dis(val)
         {
             document.getElementById("result").value+=val
         }
         function solve()
         {
             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }
         function fact()
         {  
             var i, num, f;  
             f = 1;  
             num = document.getElementById("result").value;  
             for(i = 1; i <= num; i++)    
             {  
                  f = f * i;  
             }  
             i = i - 1;    
             document.getElementById("result").value = f   
         }
         function clr()
         {
             document.getElementById("result").value = ""
         }