'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  createPerSlide: async (ctx) => {
    try {
      // const { authorization } = ctx.request.header;

      // console.log(authorization);

      // if (!authorization) {
      //   return { authenticated: false };
      // }

      let body = {...ctx.request.body};

      console.log(body);

      let responses = {};
      let newKey = 1;
      for (const key in body) {
        const {answers, question_id, child_id} = body[key];
        
        for (let i = 0; i < answers.length; i++) {
          const response = await strapi.services["question-answer"].create({ 
            answer: answers[i],
            question: question_id,
            child: child_id,
          });
          responses[newKey] = response;
          newKey++;
        }
      }

      return responses;
    } catch (err) {
      return err;
    }
  }
};
