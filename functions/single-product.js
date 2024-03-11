const dotenv = require("dotenv");
dotenv.config();

const axios = require("axios");

exports.handler = async (event, context, cb) => {
  try {
    const id = event.path.includes("#")
      ? event.path.split("/").pop().split("#")[0]
      : event.path.split("/").pop();

    if (!id) {
      return {
        statusCode: 400,
        body: "Bad request: Please provide a product ID",
      };
    }

    const resp = await axios.get(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/${process.env.AIRTABLE_TABLE}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        },
      }
    );

    let product = resp.data;

    if (!product) {
      return {
        statusCode: 404,
        body: "Product not found",
      };
    }

    const singleProduct = {
      id: product.id,
      ...product.fields,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(singleProduct),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
};
