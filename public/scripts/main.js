$( document ).ready(function() {
    console.log( "ready!" );

    $.ajax({
  		url: "/api/users",
  		type: "GET",
  		success: function(user) {
  			var template = _.template($("#users-template").html()); // this commands to render the script as html

  			_.each(user, function(user) {
  				$("#users-template-appended-here").append(template(user)); // this should be the id of where the template is appended
  			});

        var $editButton = $(".edit-button");

        // don't need a loop to do this, and it'll be simpler -cameron
        // think about what happens if we append new items later; they're not yet in the DOM

        $editButton.each(function() {
          $(this).on("click", function(){
            alert("You clicked on the edit button!");
          });
        });

  		}
  	});

    // loop through each edit button - they are all different instances!

});
