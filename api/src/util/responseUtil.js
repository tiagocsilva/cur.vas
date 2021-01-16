exports.responseFn = (req, res, fn, codeOk, codeValidation) => {
    fn.then((data) => {
        let code = codeOk || 200;

        if (data.error)
            code = codeValidation || 422

        if (code == 204) res.sendStatus(code);
        else res.status(code).send(data);
    })
        // .catch((e) => {
        //     res.status(500).send();
        // });
}