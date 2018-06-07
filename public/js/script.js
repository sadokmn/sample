var socket = io();

//listen for event
var d = new Date();
var year = d.getFullYear();
document.querySelector(".footer").innerHTML = '<p>Created by philmon - Copyright &copy; '+year+'</p>'

socket.on("dukan", function (data) {
    for(var i = 0; i < data.length; i++){
        var element = document.querySelector(".nayarat")
        var text = '<div class="col-sm-12 col-md-4 theBody"><div class="cardh-100"><a href=""><img class="card-img-top" src="'+data[i].img+'" alt=""></a><div class="card-body"><h3>'+data[i].sm+'</h3><p>መሸፈኒ: '+data[i].meshefeni+'</p><p>ኣንሶላ: '+data[i].ansola+'</p><p>መተርኣስ: '+data[i].meteras+'</p><h5>'+data[i].waga+'</h5></div><div><small class="kokob">&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div> '        
        element.insertAdjacentHTML("beforeend", text);
    };
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


