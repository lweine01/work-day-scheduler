var container = $(".container");
// var currentTime = moment().format("H");
var currentTime = 11;
var saveButton = $(".saveBtn");
var timeBlock = $(".time-block");
var inputForm = $("textarea");

$("#currentDay").text(moment().format("dddd MMMM DD, YYYY"));

timeBlock.each(function(){
    var el=$(this);
    var newClass = getClass(el);
    el.addClass(newClass);
});

function getClass(element){
    var idSelector = element.attr("id");
    if (parseInt(idSelector) === parseInt(currentTime)){
        return "present";
    } else if (parseInt(idSelector) < parseInt(currentTime)) {
        return "past";
    } else {
        return "future";
    }
}

saveButton.on("click", function (event) {
    event.preventDefault();
     localStorage.setItem("savedPlan", inputForm.val);
});

console.log(typeof inputForm.val);
console.log(inputForm);

