var socket = io();

//listen for event
var d = new Date();
var year = d.getFullYear();
document.querySelector(".footer").innerHTML = '<p>Created by philmon - Copyright &copy; '+year+'</p>'

var akuhuDukan = function (data, imgLocation, querStr) {
  var element = document.querySelector(querStr);
  var photo = 0;
  for(var i = 0; i < data.length; i++){
    photo++
    if(data[i].sm === "ኣንሶላ ዳብል" || data[i].sm === "ኣንሶላ ሲንግል") {
    var text = '<div class="col-sm-4 theBody"><div class="cardh-100"><a href="'+imgLocation+''+photo+'.jpg"><img class="card-img-top" src="'+imgLocation+''+photo+'.jpg" alt=""></a><div class="card-body"><h3>'+data[i].sm+'</h3><h5>ዓቐን : '+data[i].meshefeni+'</h5><h5>ኣንሶላ : '+data[i].ansola+'</h5><h5>መተርኣስ : '+data[i].meteras+'</h5><h4><bold>'+data[i].waga+'</bold></h4></div><div><small class="kokob">&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div> '        
    element.insertAdjacentHTML("beforeend", text);
    }else if (data[i].sm === "ሳሎን") {
    var text = '<div class="col-sm-4 theBody"><div class="cardh-100"><a href="'+imgLocation+''+photo+'.jpg"><img class="card-img-top" src="'+imgLocation+''+photo+'.jpg" alt=""></a><div class="card-body"><h3>'+data[i].sm+'</h3><h5>ዓቐን : '+data[i].meshefeni+'</h5><h4><bold>'+data[i].waga+'</bold></h4></div><div><small class="kokob">&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div> '        
    element.insertAdjacentHTML("beforeend", text);
    }else if (data[i].sm === "መጋረጃ") {
    var text = '<div class="col-sm-4 theBody"><div class="cardh-100"><a href="'+imgLocation+''+photo+'.jpg"><img class="card-img-top" src="'+imgLocation+''+photo+'.jpg" alt=""></a><div class="card-body"><h3>'+data[i].sm+'</h3><h5>ዓቐን : '+data[i].meshefeni+'</h5><h4><bold>'+data[i].waga+'</bold></h4></div><div><small class="kokob">&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div> '        
    element.insertAdjacentHTML("beforeend", text);
    };
    
  };
  
};


socket.on("arat", function (data) {
  akuhuDukan(data, "/images/arat/arat", ".nayarat");
  
})

socket.on("salon", function (data) {
  akuhuDukan(data, "/images/salon/salon", ".naysalon")
});

socket.on("megareja", function (data) {
  
  akuhuDukan(data, "/images/megareja/megareja", ".megarejatat");
  
});



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


