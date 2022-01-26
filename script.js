let currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do, YYYY"));
let currentTime = moment().hour();
let saveBtn = $('button');

saveBtn.on('click', function() {
    let textContainer = $(this).parent().siblings();
    let inputId = $(this).attr('id')
    let textArea = textContainer.find(".textarea").val();
    localStorage.setItem(inputId, textArea);
    console.log(localStorage);
});

for (let i = 9; i < 18; i++) {
    $("#" + i).text(localStorage.getItem(i));
};
