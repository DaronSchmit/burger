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
    let id = $(this).data("id");
    let newServeState = {
      served: true
    };
    //send the put request
    $.ajax(`api/burgers/serve/${id}`, {
      type: 'PUT',
      data: newServeState
    }).then(function(response) {
      console.log(`changed serve to ${newServeState.serve}`);
      location.reload();
    });
  });

  $(".devour").on("click", function(event){
    event.preventDefault();
    let id = $(this).data("id");
    let newDevourState = {
      devoured: true
    };
    //send the put request
    $.ajax(`api/burgers/devour/${id}`, {
      type: 'PUT',
      data: newDevourState
    }).then(function(response) {
      console.log(`changed devour to ${newDevourState.devour}`);
      location.reload();
    });
  });

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