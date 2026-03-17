module.exports = (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    return res.status(200).send("manbag.com backend is running");
  }

  if (req.method === "POST" && req.url === "/webhook") {
    // handle stripe webhook ที่นี่
    return res.status(200).send("ok");
  }

  return res.status(404).send("Not found");
};
