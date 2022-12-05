var socket = io.connect("http://localhost:7777");
var elem = document.getElementById("thread");

socket.on("connect", function (data) {
    socket.emit("join", "Hello server from client");
});

socket.on("thread", function (data) {
    $("#thread").append("<div><p>" + data + "</p></div>");
    elem.scrollTop = elem.scrollHeight;
});

$("form").submit(function () {
    var message = $("#message").val();
    if (message !== ''){
        socket.emit("messages", message);
    }
    this.reset();
    return false;
});
