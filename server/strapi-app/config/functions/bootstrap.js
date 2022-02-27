"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

const { faker } = require("@faker-js/faker");

const createAdminUser = async () => {
  const params = {
    username: process.env.DEV_USER || "admin",
    password: process.env.DEV_PASS || "admin",
    firstname: process.env.DEV_USER || "Admin",
    lastname: process.env.DEV_USER || "Admin",
    email: process.env.DEV_EMAIL || "admin@test.test",
    blocked: false,
    isActive: true,
  };
  //Check if any account exists.
  const admins = await strapi.query("user", "admin").find();

  if (admins.length === 0) {
    try {
      let tempPass = params.password;
      let verifyRole = await strapi
        .query("role", "admin")
        .findOne({ code: "strapi-super-admin" });
      if (!verifyRole) {
        verifyRole = await strapi.query("role", "admin").create({
          name: "Super Admin",
          code: "strapi-super-admin",
          description:
            "Super Admins can access and manage all features and settings.",
        });
      }
      params.roles = [verifyRole.id];
      params.password = await strapi.admin.services.auth.hashPassword(
        params.password
      );
      await strapi.query("user", "admin").create({
        ...params,
      });
      strapi.log.info("Admin account was successfully created.");
      strapi.log.info(`Email: ${params.email}`);
      strapi.log.info(`Password: ${tempPass}`);
    } catch (error) {
      strapi.log.error(
        `Couldn't create Admin account during bootstrap: `,
        error
      );
    }
  }
};

const createUsers = async () => {
  const users = await strapi.query("user", "users-permissions").find();

  if (users.length === 0) {
    const numUsers = 20;
    for (let i = 0; i < numUsers; i++) {
      let username = faker.internet.userName();
      
      let numChildren = Math.floor(
        faker.datatype.number({
          min: 1,
          max: 3,
        })
      );
      createChildren(numChildren).then((children) => {
        strapi.plugins['users-permissions'].services.user.add({
          blocked: false,
          confirmed: true, 
          username: username,
          email: `${username}@gmail.com`,
          password: 'password', 
          provider: 'local', 
          created_by: 1, 
          updated_by: 1, 
          role: 1,
          children: children
        });   
      })  
    }
  }
};

const createChildren = async (numChildren) => {
  let children = [];
  for (let i = 0; i < numChildren; i++) {
    let num = Math.floor(
      faker.datatype.number({
        min: 5,
        max: 18,
      })
    );
    let child = await strapi.services.child.create({
      name: faker.name.firstName(),
      age: 11,
    }).then((result) => {
      children.push(result);
      return result;
    }).catch((error) => {strapi.log.info(`Error: ${error}`)});
  }

  return children;
}

const createAgeGroup = async () => {
  // Check if age groups exist
  const currentData = await strapi.services["age-group"].find();
  let groups = ["5-8", "9-11", "12-14", "15-18"];
  currentData.forEach((data) => {
    if (groups.includes(data.group)) {
      groups = groups.filter((item) => item !== data.group);
    }
  });

  groups.forEach(async (group) => {
    if (!currentData.includes(group)) {
      await strapi.services["age-group"].create({
        group: group,
      });
    }
  });
};

const createQuestions = async () => {

  const questions = await strapi.query("question").find();

  if (questions.length === 0) {
    const jsonData = require("./unique_questions.json");
    const answerData = require("./answers_questions.json");

    for (const key in jsonData) {
      
      let answers = []
      if (answerData[key]) {
          answers = answerData[key];
      }

      await strapi.services.question.create({
        text: jsonData[key],
        answers: answers
      }).then((result) => {
        return result;
      }).catch((error) => {strapi.log.info(`Error: ${error}`)});
    }
    
  }
}

const createAnswers = async () => {

  const answers = await strapi.query("answer").find();
  
  if (answers.length === 0) {
    const jsonData = require("./answers.json");
    
    for (const key in jsonData) {
      const {text, question} = jsonData[key];
      // const questionJSON = await strapi.services.question.findOne(question)
      //   .then((result) => { 
      //     // strapi.log.info(result);
      //     return result 
      //   })
      //   .catch((error) => {strapi.log.info(`Error: ${error}`)})
      // strapi.log.info(questionJSON);
      
      await strapi.services.answer.create({
        text: text,
      }).then((result) => {
        return result;
      }).catch((error) => {strapi.log.info(`Error: ${error}`)});
    }
    
  }
}

const createSlides = async () => {
  const slides = await strapi.query("slide").find();

  if (slides.length === 0) {
    const jsonData = require("./slides.json");

    let i = 0;
    for (const key in jsonData) {
      const questions = jsonData[key].questions;

      if (questions) {
        await strapi.services.slide.create({
          slide_number: i+1,
          header: jsonData[key].header,
          age_group: 1,
          questions: jsonData[key].questions
        }).then((result) => {
          return result;
        }).catch((error) => {strapi.log.info(`Error: ${error}`)});

        i++;
      }
    }
  }
}


module.exports = async () => {
  if (process.env.NODE_ENV === "development") {
    await createUsers();
    await createAdminUser();
  }
  await createAgeGroup();
  await createQuestions();
  await createAnswers();
  await createSlides();
};
