var recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;

var search_term = '';

recognition.onstart = function() {
    console.log("Start!");
}
recognition.onresult = function(event) {
    var interim_transcript = '';
    console.log(event.resultIndex, event.results.length);
    for (var i = event.resultIndex; i < event.results.length; ++i) {
	if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
	} else {
            interim_transcript += event.results[i][0].transcript;
	}
    }

    search_term.value = final_transcript;
    console.log("result!");

}
recognition.onerror = function(event) {
    console.log("error!", event);
 }
recognition.onend = function() {
    console.log("end!");
}


function startButton(event) {

    search_term = document.getElementById("search_term");
    final_transcript = '';
    recognition.start();

}

function stopButton(event) {
    recognition.stop();
}
