function getSession(req, res) {
    res.json({
        sessionId:  'PlaceholderSessionID',
        challenge:  'PlaceholderChallenge'
    });
};

function postProof(req, res) {
    res.json({
        status:     'recieved',
        sessionId:  req.params.id,
        body:       req.body
    });
};


export {postProof, getSession};