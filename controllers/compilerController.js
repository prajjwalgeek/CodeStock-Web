const HackerEarth = require("hackerearth-node");
const keys = require("../config/keys");

const hackerEarth = new HackerEarth(keys.hackerearthApiKey);
exports.compileCode = async (req, res) => {
    if (!req.body.code) {
        return res.status(400).json({
            status: 'error',
            msg: 'Code is required'
        })
    }
    try {
        const config = {
            time_limit: 1,
            memory_limit: 323244,
            source: req.body.code,
            input: req.body.input ? req.body.input : '',
            language: req.body.language,
        }
        let result = await hackerEarth.run(config);
        result = JSON.parse(result);
        if (result.run_status.status === 'AC') {
            return res.status(200).json({
                status: 'success',
                output: result.run_status.output
            })
        }
        else if (result.run_status.status === 'CE') {
            return res.status(200).json({
                status: "error",
                output: result.compile_status,
            });
        } else {
            return res.json({
                status: "error",
                output: result.compile_status,
            })
        }
    } catch (err) {
        res.status(400).json({
            status: "error",
            msg: err.message
        });
    }
}