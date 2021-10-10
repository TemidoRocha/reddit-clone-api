const basciController = {};

basciController.get = (req, res) => {
  res.json({
    message: 'welcome',
  });
};

export default basciController;
