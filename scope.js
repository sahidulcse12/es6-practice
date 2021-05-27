// function scope
//var function scope a kaj kore

function money() {
    var name = "My name is muhit";
    console.log(name)
}

money();


// let block scope...if() ekta block scope...er baire kaj korbena
function currency() {
    let name = "muhit";
    if (name) {
        let amount = 50;
        console.log(name);
        console.log(amount)
    }

}

currency();