function myFunct() {
    let month = document.getElementById("month").value
    console.log("test")
    console.log(month)
    if (month == "Jan" || month == "January" || month == "jan" || month == "january") {
        let x = document.createElement("IMG");
        x.setAttribute("src", "https://www.horoscopedates.com/img/icon_aquarius.png");
        document.body.appendChild(x);
        document.getElementById("result").innerHTML = "Your horoscope is Aquarius"
        document.getElementById("result2").innerHTML = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
    } else if (month == "Feb") {
        let x = document.createElement("IMG");
        x.setAttribute("src", "https://www.horoscopedates.com/img/icon_pisces.png");
        document.body.appendChild(x);
        document.getElementById("result").innerHTML = "Your horoscope is Pisces"
        document.getElementById("result2").innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all…"
    } else if (month == "Mar") {
        let x = document.createElement("IMG");
        x.setAttribute("src", "https://www.horoscopedates.com/img/icon_aries.png");
        document.body.appendChild(x);
        document.getElementById("result").innerHTML = "Your horoscope is Aries"
        document.getElementById("result2").innerHTML = "Today your patience might be tested when one or more of your projects gets put on hold by someone… "
    } else if (month == "Apr") {
        let x = document.createElement("IMG");
        x.setAttribute("src", "https://www.horoscopedates.com/img/icon_taurus.png");
        document.body.appendChild(x);
        document.getElementById("result").innerHTML = "Your horoscope is Taurus"
        document.getElementById("result2").innerHTML = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…"
    } else if (month == "May") {
        let x = document.createElement("IMG");
        x.setAttribute("src", "https://www.horoscopedates.com/img/icon_gemini.png");
        document.body.appendChild(x);
        document.getElementById("result").innerHTML = "Your horsoscope is Gemini"
        document.getElementById("result2").innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…"
    } else if (month == "Jun") {
        let x = document.createElement("IMG");
        x.setAttribute("src", "https://www.horoscopedates.com/img/icon_cancer.png");
        document.body.appendChild(x);
        document.getElementById("result").innerHTML = "Your horoscope is Cancer"
        document.getElementById("result2").innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your…"
    } else if (month == "Jul") {
        let x = document.createElement("IMG");
        x.setAttribute("src", "https://www.horoscopedates.com/img/icon_leo.png");
        document.body.appendChild(x)
        document.getElementById("result").innerHTML = "Your horoscope is Leo"
        document.getElementById("result2").innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…"
    } else if (month == "Aug") {
        let x = document.createElement("IMG");
        x.setAttribute("src", "https://www.horoscopedates.com/img/icon_virgo.png");
        document.body.appendChild(x)
        document.getElementById("result").innerHTML = "Your horoscope is Virgo"
        document.getElementById("result2").innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…"
    } else if (month == "Sep") {
        let x = document.createElement("IMG");
        x.setAttribute("src", "https://www.horoscopedates.com/img/icon_libra.png");
        document.body.appendChild(x)
        document.getElementById("result").innerHTML = "Your horoscope is Libra"
        document.getElementById("result2").innerHTML = "Pick a cultural event that's coming up and get some tickets for it today."
    } else if (month == "Oct") {
        let x = document.createElement("IMG");
        x.setAttribute("src", "https://www.horoscopedates.com/img/icon_scorpio.png");
        document.body.appendChild(x)
        document.getElementById("result").innerHTML = "Your horoscope is Scorpio"
        document.getElementById("result2").innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…"
    } else if (month == "Nov") {
        let x = document.createElement("IMG");
        x.setAttribute("src", "https://www.horoscopedates.com/img/icon_sagittarius.png");
        document.body.appendChild(x)
        document.getElementById("result").innerHTML = "Your horoscope is Sagittarius"
        document.getElementById("result2").innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to...."
    } else if (month == "Dec") {
        let x = document.createElement("IMG");
        x.setAttribute("src", "https://www.horoscopedates.com/img/icon_capricorn.png");
        document.body.appendChild(x)
        document.getElementById("result").innerHTML = "Your horoscope is Capricorn"
        document.getElementById("result2").innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity. "
    } else {
        document.getElementById("result1").innerHTML = "Please give a month"
    }

}