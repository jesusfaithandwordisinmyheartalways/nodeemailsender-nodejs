

const mailer = require('nodemailer'); // load the nodemailer module


const transportEmail = mailer.createTransport({     // transport method sets up the email service to send the emails
        host: 'smtp.gmail.com',
        port:465,
        secure:true,
        auth: {
            user:  'andrewjohnson9393@gmail.com',
            pass: 'qlwk qlzw vcmx hdid '
        }
})


const emailOptions = {
    from: ' "Andrew Johnson " <andrewjohnson9393@gmail.com>',
    to: 'milton.johnson1@mga.edu',
    subject: 'Test Email in nodejs',
    text: 'This is an test email from the nodejs email sender app',
    html: '<b> the Nodemailer module in nodejs </b>'
}


transportEmail.sendMail(emailOptions, (error, info) => {        // the sendMail method sends the email to the recipient through the email service you connected
     if(error) {
        return console.log(`Error has occurred: ${error}`)
     }
     console.log(`Message has been to the recipent email: ${info.response}`)
})