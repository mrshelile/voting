module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/sendsms',
     handler: 'sendsms.sendsms',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
