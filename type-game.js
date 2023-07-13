<!doctype html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>type</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" integrity="sha384-PJsj/BTMqILvmcej7ulplguok8ag4xFTPryRq8xevL7eBYSmpXKcbNVuy+P0RMgq" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
        <div class="container d-flex justify-content-center p-4">
            <span id="s10">00</span>:
            <span id="s">00</span>:
            <span id="m">00</span>
        </div>
        <div class="container d-flex justify-content-center">
            <p id="text">letfan copy paste nakonid</p>

        </div>
        <div class="container d-flex justify-content-center">
            <input type="textarea"  class="form-control" style="width:50vw;" id="input">
        </div>
        <div class="container d-flex justify-content-center div-1">
            <button id="btn"  class= " btn btn-primary mt-3" style="width: 50vw;direction: ltr;">پایان</button>
            <button id="btnn" onclick="res()"  class= " btn btn-warning mt-3" style="width: 50vw;">دوباره</button>
        </div>
</body>
<script>
    document.getElementById("input").addEventListener("paste",e=>e.preventDefault());
    var m=0;
    var s=0;
    var s10=0;
    var Interval;
    document.getElementById("input").addEventListener("keydown",start);
    document.getElementById("btn").addEventListener("click",end);
    function start(){
        clearInterval(Interval);
        Interval=setInterval(run ,10);
    }
    function end(){
        clearInterval(Interval);
         document.getElementById("input").value;
        if(document.getElementById("input").value==document.getElementById("text").innerHTML){
            alert("رکورد شما با موفقیت ثبت شد ");
        }
        else
        {
            alert("لطفا متن را درست وارد کنید !");
            document.getElementById("s10").innerHTML="00";
           document.getElementById("s").innerHTML="00";
           document.getElementById("m").innerHtml="00";
            
        } 
        document.getElementById("input").value="";
    }

        function res(){
           clearInterval(Interval);
           document.getElementById("s10").innerHTML="00";
           document.getElementById("s").innerHTML="00";
           document.getElementById("m").innerHtml="00";
           document.getElementById("input").value="";
           s=0;
           s10=0;
           m=0;

        }
        function run (){
        s10++;
        if(s10<10){
            document.getElementById("s10").innerHTML="0"+s10;
        }
        else{
            document.getElementById("s10").innerHTML=s10;
        }
        if(s10>=60){
            s+=1;
            s10=0;
            document.getElementById("s10").innerHTML="00";
        }
        if(s<10){
            document.getElementById("s").innerHTML="0"+s;
        }
        else{
            document.getElementById("s").innerHTML=s;
        }
        if(s>=60){
            m+=1;
            s=0;
            document.getElementById("s").innerHTML="00";
        }
        if(m<10){
            document.getElementById("m").innerHTML="0"+m;
        }
        else{
            document.getElementById("m").innerHTML=m;
        }
        
    }
</script>
</html>
