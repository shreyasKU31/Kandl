const wrapAsync = (fn) => {
  return function (req, res, next) {
    fn(req, req, next).catch((err) => next(err));
  };
};
