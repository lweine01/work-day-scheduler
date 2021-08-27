var container = $(".container");
var currentTime = moment().format("H");
var saveButton = $(".saveBtn");
var timeBlock = $(".time-block");


$("#currentDay").text(moment().format("dddd MMMM DD, YYYY"));

timeBlock.each(function(){
    var el=$(this);
    //console.log(typeof(el));
    var newClass = getClass(el);
    el.children().eq(1).addClass(newClass);
   // console.log('showing elfunction', a);
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

for (var i=9; i <8; i++){
$("#" + i + " .description").val(localStorage.getItem(i));
}
