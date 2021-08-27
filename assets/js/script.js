var container = $(".container");
var currentTime = moment().format("H");
var saveButton = $(".saveBtn");
var timeBlock = $(".time-block");


$("#currentDay").text(moment().format("dddd MMMM DD, YYYY"));

timeBlock.each(function(){
    var el=$(this);
    var newClass = getClass(el);
    el.children().eq(1).addClass(newClass);
});

function getClass(element){
    var idSelector = element.attr("id");
    console.log(idSelector);
    if (parseInt(idSelector) === parseInt(currentTime)){
        return "present";
    } else if (parseInt(idSelector) < parseInt(currentTime)) {
        return "past";
    } else {
        return "future";
    }
}

saveButton.on("click", function () {
    var textValue = $(this).siblings(".description").val();
    var idSelector = $(this).parent().attr("id");
    localStorage.setItem(idSelector, textValue);
    console.log(textValue);
});

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


