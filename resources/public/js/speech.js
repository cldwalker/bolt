var recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;

var final_span = '';

recognition.onstart = function() {
    console.log("Start!");
}
recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
	if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
	} else {
            interim_transcript += event.results[i][0].transcript;
	}
    }

    final_span.innerHTML = final_transcript;
    console.log("result!");

}
recognition.onerror = function(event) {
    console.log("error!", event);
 }
recognition.onend = function() {
    console.log("end!");
}


function startButton(event) {

    final_span = document.getElementById("final_span");
    final_transcript = '';
    recognition.start();

}

function stopButton(event) {
    recognition.stop();
}
