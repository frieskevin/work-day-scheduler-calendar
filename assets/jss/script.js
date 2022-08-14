var schedule = {};

//loads schedule from localstorage onto the page
var loadSchedule = function() {
    schedule = JSON.parse(localStorage.getItem('schedule'));
    document.querySelector('#input1').value = schedule.row1;
    document.querySelector('#input2').value = schedule.row2;
    document.querySelector('#input3').value = schedule.row3;
    document.querySelector('#input4').value = schedule.row4;
    document.querySelector('#input5').value = schedule.row5;
    document.querySelector('#input6').value = schedule.row6;
    document.querySelector('#input7').value = schedule.row7;
    document.querySelector('#input8').value = schedule.row8;
    document.querySelector('#input9').value = schedule.row9;
};

//executes loading the schedule onto the page
loadSchedule();

//on any click of button, saves all text inputted into localstorage
$('.btn').on('click', function() {
    schedule.row1 = document.querySelector('#input1').value;
    schedule.row2 = document.querySelector('#input2').value;
    schedule.row3 = document.querySelector('#input3').value;
    schedule.row4 = document.querySelector('#input4').value;
    schedule.row5 = document.querySelector('#input5').value;
    schedule.row6 = document.querySelector('#input6').value;
    schedule.row7 = document.querySelector('#input7').value;
    schedule.row8 = document.querySelector('#input8').value;
    schedule.row9 = document.querySelector('#input9').value;
    localStorage.setItem('schedule', JSON.stringify(schedule));
    console.log(schedule);
});

//displays current day
$('#currentDay').text(moment().format('MMMM Do YYYY'));


//makes past time events gray, current red, and future green
var colorChanger = function() {
    time = moment().hour();
    if (time < 9) {
        $('#input1, #input2, #input3, #input4, #input5, #input6, #input7, #input8, #input9').addClass('bg-success');
    } else if (time === 9) {
        $('#input2, #input3, #input4, #input5, #input6, #input7, #input8, #input9').addClass('bg-success');
        $('#input1').addClass('bg-danger');
    } else if (time === 10) {
        $('#input3, #input4, #input5, #input6, #input7, #input8, #input9').addClass('bg-success');
        $('#input2').addClass('bg-danger');
        $('#input1').addClass('bg-dark');
    } else if (time === 11) {
        $('#input4, #input5, #input6, #input7, #input8, #input9').addClass('bg-success');
        $('#input3').addClass('bg-danger');
        $('#input1, #input2').addClass('bg-dark');
    } else if (time === 12) {
        $('#input5, #input6, #input7, #input8, #input9').addClass('bg-success');
        $('#input4').addClass('bg-danger');
        $('#input1, #input2, #input3').addClass('bg-dark');
    } else if (time === 13) {
        $('#input6, #input7, #input8, #input9').addClass('bg-success');
        $('#input5').addClass('bg-danger');
        $('#input1, #input2, #input3, #input4').addClass('bg-dark');
    } else if (time === 14) {
        $('#input7, #input8, #input9').addClass('bg-success');
        $('#input6').addClass('bg-danger');
        $('#input1, #input2, #input3, #input4, #input5').addClass('bg-dark');
    } else if (time === 15) {
        $('#input8, #input9').addClass('bg-success');
        $('#input7').addClass('bg-danger');
        $('#input1, #input2, #input3, #input4, #input5, #input6').addClass('bg-dark');
    } else if (time === 16) {
        $('#input9').addClass('bg-success');
        $('#input8').addClass('bg-danger');
        $('#input1, #input2, #input3, #input4, #input5, #input6, #input7').addClass('bg-dark');
    } else if (time === 17) {
        $('#input9').addClass('bg-danger');
        $('#input1, #input2, #input3, #input4, #input5, #input6, #input7, #input8').addClass('bg-dark');
    } else if (time > 17) {
        $('#input1, #input2, #input3, #input4, #input5, #input6, #input7, #input8, #input9').addClass('bg-dark');
    }
    console.log(time)
}

//executes the color changing function
colorChanger();