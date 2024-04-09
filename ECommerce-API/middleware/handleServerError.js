
module.exports = (err, req, res, next) => {
  let statusCode = 500;
  let errors = null;
  let msg = "Server Error";

  if (err.name == "ValidationError") {
    msg = "Bad Request / Validation Error";
    statusCode = 400;

    console.log(Object.entries(err.errors));
    // return
    let errsArray = Object.entries(err.errors);
    errors = [];

    errsArray.forEach((el) => {
      errors.push({
        field: el[0],
        msg: el[1].message,
      });
    });
  }
    res.status(statusCode).json({
      msg,
      errors,
      stack: err.stack
    });
  };