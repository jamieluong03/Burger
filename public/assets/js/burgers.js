// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      // var newDevoured = $(this).data("true");
  
      var newDevouredState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          // console.log("devoured status: ", newDevoured );
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: false,
      };
      alert(newBurger.burger_name)
      // Send the POST request.
      $.ajax("/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log(newBurger);
          // console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  