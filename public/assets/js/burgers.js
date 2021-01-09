$(function() {


  $(".create-form").on("submit", function(event){
    event.preventDefault();

    let newBurger = {
      burger_name: $("#brgr").val().trim()
    };

    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(){
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".serve").on("click", function(event){
    event.preventDefault();
    console.log("serve clicked")
  })

  $(".devour-burger").on("click", function(event) {
    let id = $(this).data("id");

    //sending the delete request
    $.ajax(`api/burgers/${id}`, {
      type: "DELETE"
    }).then(function() {
      console.log(`devoured hamburger ${id}`)
      location.reload();
    })
  })

  
})