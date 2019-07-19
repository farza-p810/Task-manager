exports.set = (res, name, value, options) => {
  if (!(res && name && value)) throw "Set cookie request is not completed.";
  res.cookie(name, value, options);
};

exports.has = (req, name) => {
  if (!(req && name)) throw "Has cookie request is not completed.";
  return name in req.cookies;
};

exports.get = (req, name) => {
  if (!(req && name)) throw "Get cookie request is not completed.";
  if (!this.has(req, name)) return false;
  return req.cookies[name];
};

exports.getAndRemove = (res, req, name) => {
  if (!(req && res && name))
    throw "Get and remove cookie request is not completed.";
  const cookieValue = this.get(req, name);
  this.remove(res, name);
  return cookieValue;
};

exports.remove = (res, name) => {
  if (!(res && name))
    throw "Remove and remove cookie request is not completed.";
  res.clearCookie(name);
};
