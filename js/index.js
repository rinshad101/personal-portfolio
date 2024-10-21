function sendMail(){
    var params = {
        name : document.getElementById("fname").value ,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }


    const serviceID = "service_ost7vnk";
    const templateID = "template_di7t5er";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("fname").value ="";
            document.getElementById("email").value ="";
            document.getElementById("message").value ="";
            console.log('SUCCESS!', res);
            alert("your message sent successfully");
        })
        .catch((err) => console.log(err));
    }        