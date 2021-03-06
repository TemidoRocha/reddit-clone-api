import db from './../models';

const userController = {};

userController.post = (req, res) => {
  const { username, password } = req.body;

  // validation

  const user = new db.User({
    username,
    password,
  });

  user
    .save()
    .then((newUser) => {
      console.log(newUser);
      res.status(200).json({
        sucess: true,
        data: newUser,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

export default userController;
