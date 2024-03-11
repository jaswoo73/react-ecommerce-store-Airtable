const dotenv = require("dotenv");
dotenv.config();

const axios = require("axios");

exports.handler = async (event, context, cb) => {
  try {
    const resp = await axios.get(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/${process.env.AIRTABLE_TABLE}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        },
      }
    );

    const products = resp.data.records.map((product) => {
      const { id, fields } = product;
      const {
        name,
        featured,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        images,
      } = fields;
      const { url } = images[0];
      return {
        id,
        name,
        featured,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        image: url,
      };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
};
