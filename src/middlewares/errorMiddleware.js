function errorMiddleware(error, req, res, next) {
    if(error instanceof Error) {
        res.status(400).json({ error: error.message })
    }else {
        res.status(500).json({
            status: 'error',
            message: 'internal server error'
        });
    }
}

module.exports = errorMiddleware;