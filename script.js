function display(num) {
    document.getElementById('final_result').value += num;
}

function clearscreen() {
    final_result.value = "";
    document.getElementById('displayResult').value = ""
}

function evaluateExpression() {
    var current = document.getElementById('final_result').value;
    if (current != '') {
        document.getElementById('displayResult').value = eval(document.getElementById('final_result').value)
    }
    final_result.value = result
}

function backspace() {
    clear = final_result.value.slice(0, -1)
    final_result.value = clear;
}