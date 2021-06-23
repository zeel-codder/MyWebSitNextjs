
// require('dotenv').config();
import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs';
// import { Token } from 'prismjs';
const jwt = require('jsonwebtoken');
// import { EnhancedEncryption } from '@material-ui/icons';

import { SMTPClient } from 'emailjs';


export default async function handler(req, res) {

  const { email, username } = req.body;

  const mymail = process.env.mail;
  const password = process.env.password
  const Link = process.env.WebLink
  const dic = {

    time: new Date(new Date().getTime() + 3600000).getTime(),
    email,
    username
  }

  const End = jwt.sign(dic, process.env.key, { expiresIn: "1h" })





  // send the message and get a callback with an error or details of the message that was sent


  // console.log(End)

  //  const transporter = await nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 465,
  //   secure:true,

  //       auth: {
  //         user: mymail,
  //         pass: password
  //       }
  //     });

  // const UserOptions = {
  //   from: mymail,
  //   to: email,

  //   subject: `From Email Verification for ${Link}`,

  //     html:`You Email LogIn/Sing Up Link is

  //     <a href="${Link}/auth/verify?d=${End}" target="_blank">Here</a>. 
  //     <br>
  //     will Expired in 1h.
  //     <br>Contact me:<ul ><li><a href="https://www.facebook.com/zeel.prajapati.397/" title="Facebook">Facebook</a></li><li><a href="https://github.com/zeel-codder" title="Github">Github</a></li><li><a href="https://www.linkedin.com/in/zeel-prajapati-4832971a3/" title="Linkedin">LinkedIn</a></li><li><a href="https://twitter.com/ZeelCodder" title="Twitter">Twitter</a></li></ul>`
  // };

  try {
    // await  transporter.sendMail(UserOptions);

    const client = await new SMTPClient({
      user: mymail,
      password: password,
      host: 'smtp.gmail.com',
      ssl: true,
      // port: 587,
      // tls: true,
    });

    await client.sendAsync(
      {
        text: `You Email LogIn/Sing Up Link is : ${Link}/auth/verify?d=${End}

        \nwill Expired in 1h.
        \n
        ,`,
        from: mymail,
        to: email,
        subject: `From Email Verification for ${Link}`,
        // html: 
      }
    );
  } catch (e) {
    console.log(e)

    res.status(404).end(JSON.stringify({
      message: "Error in sending mail",

    }))
  }


  res.end(JSON.stringify({
    message: "Send the mail",

  }))

  // return new SMTPClient({
  
  //   host: 'smtp-relay.sendinblue.com',
  //   user: process.env.SENDINBLUE_USER,
  //   password: process.env.SENDINBLUE_PASS
  // }).sendAsync({
  //   from: sender,
  //   subject: 'New reply to your comment',
  //   to: receiverName + ' <' + receiverEmail + '>',
  //   text: 'email body',
  // }).then(() => {
  
    // // Return the data of the comment for client-side processing
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify(commentData),
    //   headers: {
    //     'cache-control': 'public, max-age=0, must-revalidate'
    //   }
    // }
    
  // })
}
