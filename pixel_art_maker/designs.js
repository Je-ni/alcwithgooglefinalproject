// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// Your code goes here!

$(function (){ //initiation function to start after DOM load

    let tableRow, tableColumn; //creating global variable to be used  
    // function to create the grid 
    function makeGrid() {
        tableRow = $("#input_height").val(); //gets the number of rows as requested by the user
        tableColumn = $("#input_width").val(); //gets the number of columns

        for ( var i = 0; i < tableRow; i++){
            $("#pixel_canvas").append("<tr class='table_r'></tr>"); //creates the rows for the table
        }
        for ( var k = 0; k < tableColumn; k++){
            $(".table_r").append("<td class='table_data'></td>"); //creates the column for each row
        }
    }

        
    let alert;
    function alertthis(){ //this function writes an alert statement to create grid
        if (!alert){ //if alert has not been assigned
            msg = "<p class='alert'>Create Grid first!!</p>" //create message, else, dont, so as to avoid multimessages
            alert = $(msg).insertAfter("#submit");
            return alert;
        }       
    }
    //creating an onclick event to add extra row
    $(".form").on("click","#add_row", function(){ /*the second parameter, #add_row is there for cases of event delegation ie 
        when extra rows are created, let the event-handler still be bound to them */
        let increment = parseInt(++tableRow, 10); //converts the string to integer
         
        if ( isNaN(increment) || increment == ""){ //checks if table has been created             
            alertthis(); //alert for create table
        } else {
            $("#input_height").val(increment); //increase the input field wrt number of rows
            $("#pixel_canvas").append("<tr class='table_r'></tr>"); //add row to the table
            for ( var k = 0; k < tableColumn; k++){
                $(".table_r:last-child").append("<td class='table_data'></td>"); //add corresponding data ie column to the row created
                    }
        }
        
    })
    //creating an onclick event to add extra column
    $("#add_column").click(function(){
        let increment = parseInt(++tableColumn, 10);
        
        if ( isNaN(increment)){            
            alertthis();
        } else {
            $("#input_width").val(increment);
            $(".table_r").append("<td class='table_data'></td>"); //add extra column to each of the rows
            // ++tableColumn; //increment the column by 1 so as to update the number of columns in the tableColumn variable
        }
    })

    //click function to change color of table_data with event delegation
    $("table").on("click", ".table_data", function(){
        let colorPicker, backgroundColor; //declaring the variables to be used
        colorPicker = $("#colorPicker").val(); //gets the color of the colorPicker
        backgroundColor = $(this).css("background-color"); //getting the background-color of the clicked item

        if (backgroundColor === "rgba(0, 0, 0, 0)"){ //checks if backgroundColor is white
            $(this).css("background-color", colorPicker);  //changes the backgroundColor to the corresponding colorPicker color        
        } else {
            $(this).css("background-color","rgba(0, 0, 0, 0)"); //changes the backgroundColor to white if its not white
        }
        });            
    
    //function to call the makeGrid function
    $("#submit").click(function(){
        $(".table_r").remove(); //removes the previous table
        $(".alert").remove();
        makeGrid(); //makes the grid  
    }); 
})
