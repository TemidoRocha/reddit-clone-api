const basciController = {};

basciController.get = (req, res) => {
  res.json({
    message: 'working',
  });
};

export default basciController;
