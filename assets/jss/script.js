var schedule = {};

var loadSchedule = function() {
    schedule = JSON.parse(localStorage.getItem(schedule));
    if (!schedule) {
        schedule = {
            row1: '',
            row2: '',
            row3: '',
            row4: '',
            row5: '',
            row6: '',
            row7: '',
            row8: '',
            row9: '',
        }
    };
    $('#input1').val(schedule.row1);
    $('#input2').val(schedule.row2);
    $('#input3').val(schedule.row3);
    $('#input4').val(schedule.row4);
    $('#input5').val(schedule.row5);
    $('#input6').val(schedule.row6);
    $('#input7').val(schedule.row7);
    $('#input8').val(schedule.row8);
    $('#input9').val(schedule.row9);
    console.log(schedule);
};
loadSchedule();

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

$('#row1').on('click', '#task1', function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass('form-control').val(text);
    $(this).replaceWith(textInput);
    textInput.trigger('focus');
});

$('')

// setInterval(function() {
//     var time = moment().format('hh:mm:ss a');
//     if (moment().isBetween('00:00:00 am', '09:00:00 am')) {
//         $('#task1, #task2, #task3, #task4, #task5, #task6, #task7, #task8, #task9').addClass('bg-success');
//     } else if (moment().isBetween('09:00:00 am', '09:59:59 am')) {
//         $('#task2, #task3, #task4, #task5, #task6, #task7, #task8, #task9').addClass('bg-success');
//         $('#task1').addClass('bg-danger');
//     } else if (moment().isBetween('10:00:00 am', '10:59:59 am')) {
//         $('#task3, #task4, #task5, #task6, #task7, #task8, #task9').addClass('bg-success');
//         $('#task2').addClass('bg-danger');
//         $('#task1').addClass('bg-dark');
//     } else if (moment().isBetween('11:00:00 am', '11:59:59 am')) {
//         $('#task4, #task5, #task6, #task7, #task8, #task9').addClass('bg-success');
//         $('#task3').addClass('bg-danger');
//         $('#task1, #task2').addClass('bg-dark');
//     } else if (moment().isBetween('12:00:00 pm', '12:59:59 pm' )) {
//         $('#task5, #task6, #task7, #task8, #task9').addClass('bg-success');
//         $('#task4').addClass('bg-danger');
//         $('#task1, #task2, #task3').addClass('bg-dark');
//     } else if (moment().isBetween('01:00:00 pm', '01:59:59 pm')) {
//         $('#task6, #task7, #task8, #task9').addClass('bg-success');
//         $('#task5').addClass('bg-danger');
//         $('#task1, #task2, #task3, #task4').addClass('bg-dark');
//     } else if (moment().isBetween('02:00:00 pm', '02:59:59 pm')) {
//         $('#task7, #task8, #task9').addClass('bg-success');
//         $('#task6').addClass('bg-danger');
//         $('#task1, #task2, #task3, #task4, #task5').addClass('bg-dark');
//     } else if (moment().isBetween('03:00:00 pm', '03:59:59 pm')) {
//         $('#task8, #task9').addClass('bg-success');
//         $('#task5').addClass('bg-danger');
//         $('#task1, #task2, #task3, #task4').addClass('bg-dark');
//     }
//     console.log();
// }, 5000);
