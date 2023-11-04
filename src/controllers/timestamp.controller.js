const path = require('path');

/**
 * Returns the home page by sending the index.html file.
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @return {void}
 */
const homePage = (req, res) => {
    const indexPath = path.join(__dirname, '../../views/index.html');
    res.sendFile(indexPath);
};

/**
 * Generates the current date and time in both Unix and UTC formats.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Object} - An object containing the current date and time in Unix and UTC formats.
 */
const dateNow = (req, res) => {
    res.json({
        unix: Date.now(),
        utc: Date(),
    });
};

/**
 * A function that sends a JSON response with a greeting message.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @return {object} The JSON response.
 */
const hello = (req, res) => {
    res.json({ greeting: 'hello API' });
};

/**
 * Generates a timestamp based on the given date string or Unix timestamp.
 *
 * @param {string} req.params.date_string - The date string or Unix timestamp to generate a timestamp from.
 * @param {object} res - The response object to send the generated timestamp.
 * @return {object} The generated timestamp containing the Unix timestamp and the corresponding UTC string.
 */
const timestamp = (req, res) => {
    const dateString = req.params.date_string;
    const isNumeric = /^\d+$/.test(dateString);

    if (isNumeric) {
        const dateInt = parseInt(dateString);
        const dateUtcString = new Date(dateInt).toUTCString();
        res.json({
            unix: dateInt,
            utc: dateUtcString,
        });
    } else {
        const dateObject = new Date(dateString);

        if (dateObject.toString() === 'Invalid Date') {
            res.json({ error: 'Invalid Date' });
        } else {
            const dateUnix = dateObject.valueOf();
            const dateUtcString = dateObject.toUTCString();
            res.json({
                unix: dateUnix,
                utc: dateUtcString,
            });
        }
    }
};

module.exports = {
    homePage,
    hello,
    dateNow,
    timestamp,
};
