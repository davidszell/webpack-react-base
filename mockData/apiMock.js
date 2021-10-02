module.exports = {
    '/api/config': {
        bypass: (req, res) => res.send({
            version: '1.0'
        })
    }
};