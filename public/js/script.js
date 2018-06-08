var socket = io();

//listen for event
var d = new Date();
var year = d.getFullYear();
document.querySelector(".footer").innerHTML = '<p>Created by philmon - Copyright &copy; '+year+'</p>'

socket.on("dukan", function (data) {

    var aratFun = function (arawti) {
        var element = document.querySelector(".nayarat");
        var image = 0;
        for(var i = 0; i < arawti.length; i++){
            image++
            var text = '<div class="col-sm-12 col-md-4 theBody"><div class="cardh-100"><a href="http://localhost:3000/data/arat/arat'+image+'.jpg"><img class="card-img-top" src="http://localhost:3000/data/arat/arat'+image+'.jpg" alt=""></a><div class="card-body"><h3>'+arawti[i].sm+'</h3><h5>መሸፈኒ : '+arawti[i].meshefeni+'</h5><h5>ኣንሶላ : '+arawti[i].ansola+'</h5><h5>መተርኣስ : '+arawti[i].meteras+'</h5><h4><bold>'+arawti[i].waga+'</bold></h4></div><div><small class="kokob">&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div> '        
            element.insertAdjacentHTML("beforeend", text);
        };
    };
    aratFun(data)
   
})

{/* <div class="col-sm-12 col-md-4 theBody">
<div class="card h-100">
  <a href=""><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
  <div class="card-body">
    <h3 class="card-title">
      ኣንሶላ
    </h3>
    <p>መሸፈኒ: </p>
    <p>ኣንሶላ: </p>
    <p>መተርኣስ: </p>
    <h5>$24.99</h5>
  </div>
  <div class="card-footer">
    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
  </div>
</div>
</div>  */}


