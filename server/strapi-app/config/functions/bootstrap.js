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

      await strapi.plugins['users-permissions'].services.user.add({
        blocked: false,
        confirmed: true, 
        username: username,
        email: `${username}@gmail.com`,
        password: 'password', 
        provider: 'local', 
        created_by: 1, 
        updated_by: 1, 
        role: 1 
      });
    }
  }
};

const createChildren = async () => {
  let numUsers = 10;

  const currentData = await strapi.services["child"].find();

  if (currentData.length < numUsers) {
    for (let i = 0; i < numUsers; i++) {
      let num = Math.floor(
        faker.datatype.number({
          min: 5,
          max: 18,
        })
      );
      await strapi.services.child.create({
        name: faker.name.firstName(),
        age: 11,
      });
    }
  }
};

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

const createQuestionCategories = async () => {
  // Check if age question categories exist
  const currentData = await strapi.services["question-category"].find();
  let categories = ["Multiple choice", "Checkbox"];
  currentData.forEach((data) => {
    if (categories.includes(data.name)) {
      categories = categories.filter((item) => item !== data.name);
    }
  });

  categories.forEach(async (category) => {
    await strapi.services["question-category"].create({
      name: category,
    });
  });
};

module.exports = async () => {
  if (process.env.NODE_ENV === "development") {
    await createChildren();
    await createUsers();
    await createAdminUser();
  }
  await createAgeGroup();
  await createQuestionCategories();
};
