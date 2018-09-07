$(function() {

  $(".create-burger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var burger = {
      name: $("#burger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: burger
    }).then(
      function() {
        console.log("created new burger");
        alert("lol");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#devour").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var id = $(this).data("id");
    var newBurgerState = {
      devoured: 1
    };

    // Send the POST request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("revised burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});