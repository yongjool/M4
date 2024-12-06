const { GoogleGenerativeAI } = require("@google/generative-ai");
const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);



exports.chat = async (req, res, next) => {
    try {
        res.status(200).json({
            message: 'hello from the backend!'
        });
    } catch (error) {
        next(error);
    }
};