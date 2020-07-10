function myFunct() {
    let month = document.getElementById("month").value
    console.log("test")
    console.log(month)
    if (month == "Jan") {
        document.getElementById("result").innerHTML = "Your horsocop is Aquarius"
    } else if (month == "Feb") {
        document.getElementById("result").innerHTML = "Your horsocop is Pisces"
    } else if (month == "Mar") {
        document.getElementById("result").innerHTML = "Your horsocop is Aries"
    } else if (month == "Apr") {
        document.getElementById("result").innerHTML = "Your horsocop is Taurus"
    } else if (month == "May") {
        document.getElementById("result").innerHTML = "Your horsocop is Gemini"
    } else if (month == "Jun") {
        document.getElementById("result").innerHTML = "Your horsocop is Cancer"
    } else if (month == "Jul") {
        document.getElementById("result").innerHTML = "Your horsocop is Leo"
    } else if (month == "Aug") {
        document.getElementById("result").innerHTML = "Your horsocop is Virgo"
    } else if (month == "Sep") {
        document.getElementById("result").innerHTML = "Your horsocop is Libra"
    } else if (month == "Oct") {
        document.getElementById("result").innerHTML = "Your horsocop is Scorpio"
    } else if (month == "Nov") {
        document.getElementById("result").innerHTML = "Your horsocop is Sagittarius"
    } else if (month == "Dec") {
        document.getElementById("result").innerHTML = "Your horsocop is Capricorn"
    } else {
        document.getElementById("result").innerHTML = "Please give a month"
    }

}