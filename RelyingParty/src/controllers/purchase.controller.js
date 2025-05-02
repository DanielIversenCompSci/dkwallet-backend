function requestPurchase(req, res){
    const {personId} = req.body;
    if (!personId) {
        return res.status(400).json({error: 'personId is required'});
    }

    const taskId ="placeholderTaskId";

    res.json({
        status: 'ok',
        task: {
            id: taskId,
            type: 'verifyCredentials',
            personId,
            next: 'please POST your to purchase/<' + taskId + '>/credentials'
        }
    })
}

export {requestPurchase};