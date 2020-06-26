$(document).ready(function () {
    $('#action_menu_btn').click(function () {
        $('.action_menu').toggle();
    });
});

var socket = io();
var submit = document.getElementById('submit_icon');
submit.addEventListener('click', function(e) {
    e.preventDefault();
    socket.emit('chat message', $('#submit_icon').val());
    $('#submit_icon').val('');
    return false;
});