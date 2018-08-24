
// Event

$(document).ready(function(){
    //create start game
    alert("Let's play Shrek Trivia");
  
    //create a timer for Time remaining
    var number = 30;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement(){
        number--;
        $("#timer").html("<h2>" + number + "</h2>");
        $("#timer").css("color", "green");

        if (number === 0){
            stop();
            $(".container").hide();
            $("#result").show();

        }

    }

    run();

    //When finsihed button gets clicked run stop function
    $("#finished").on("click", stop);

    function stop(){
        clearInterval(intervalId);
    }

    //fucntion for choices
    var count=0;

    $(function(){
        $('input[value="Eyeball"], [value="Dragon"], [value="Swamp"], [value="Cameron"], [value="Thelonius"]')
        .click(function(){
            if($(this).is(':checked')){
                count++;
                $("#correctAns").text(count);
            }
        })

    })

    $("#finished").click(function(){
        $(".container").hide();
        $("#result").show();
})


 
})