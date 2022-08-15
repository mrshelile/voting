'use strict';

/**
 * A set of functions called "actions" for `sendsms`
 */

module.exports = {
  sendsms: async (ctx, next) => {
    try {
    const params = ctx.request.body;
      const accountSid = "ACeb23665c9deb3b94a6127b24ed8e1661";
      const authToken = "5b79bfb0a97c15976f13f0da5fcc9a2a";
      const fromNumber= '+19787055249';
      const client = require('twilio')(accountSid, authToken);
      // console.log(params.password,params.user,params.number)
      let message =await client.messages
      .create({body: 'Hi there, '+params.user +" your password is " +params.password.toString()+ " please dont share this with anyone", from:fromNumber, to: params.number.toString()})
     
      console.log(message.sid)
      ctx.body = message.sid;
    } catch (err) {
      ctx.body = err;
    }
  }
};
