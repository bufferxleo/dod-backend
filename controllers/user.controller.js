import User from "../models/user.model.js";

const signup = async (req, res) => {
  try {
    const { userName, password, domainName, url } = req.body;
    console.log(userName, password, domainName, url);
    const exist = await User.findOne({ where: { userName: userName } });
    if (exist) {
      return res.status(400).json({ message: "Username already taken" });
    }
    const domainExist = await User.findOne({
      where: { domainName: domainName },
    });
    if (domainExist) {
      return res.status(400).json({ message: "domain name already taken" });
    }

    const user = await User.create({ userName, password, domainName, url });
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Error while signing up" });
    console.error("Error while signing up", err);
  }
};

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const exist = await User.findOne({ where: { userName: userName } });
    if (exist) {
      if (password === exist.password) {
        return res
          .status(200)
          .json({ message: "User logged in successfully", data: exist });
      } else {
        return res.status(400).json({ message: "Wrong password" });
      }
    } else {
      return res.status(400).json({ message: "Username does not exist" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal error while logging in" });
  }
};

const editPassword = async (req, res) => {
  try {
    const { userName, enteredPassword, newPassword } = req.body;
    const exist = await User.findOne({ where: { userName: userName } });
    if (exist) {
      if (enteredPassword === exist.password) {
        await User.update(
          { password: newPassword },
          { where: { userName: userName } }
        );
        res.status(200).json({ message: "password changed sucessfully" });
      } else {
        res.status(400).json({ message: "Old password is wrong" });
      }
    } else {
      res.status(400).json({ message: "Account with username does not exist" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal error while editing password" });
  }
};

const editUrl = async (req, res) => {
  try {
    const { userName, enteredPassword, newUrl } = req.body;
    const exist = await User.findOne({ where: { userName: userName } });
    if (exist) {
      if (enteredPassword === exist.password) {
        await User.update({ url: newUrl }, { where: { userName: userName } });
        res.status(200).json({ message: "url changed sucessfully" });
      } else {
        res.status(400).json({ message: "Old password is wrong" });
      }
    } else {
      res.status(400).json({ message: "Account with username does not exist" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal error while editing url" });
  }
};

const editDomain = async (req, res) => {
  try {
    const { userName, enteredPassword, newDomainName } = req.body;
    console.log(userName, enteredPassword, newDomainName);
    const exist = await User.findOne({ where: { userName: userName } });
    if (exist) {
      if (enteredPassword === exist.password) {
        await User.update(
          { domainName: newDomainName },
          { where: { userName: userName } }
        );
        res.status(200).json({ message: "domain changed sucessfully" });
      } else {
        res.status(400).json({ message: "Old password is wrong" });
      }
    } else {
      res.status(400).json({ message: "Account with username does not exist" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal error while editing domain" });
  }
};

const searchDomain = async (req, res) => {
  try {
    const { domainName } = req.body;
    const exist = await User.findOne({ where: { domainName: domainName } });
    if (exist) {
      res.status(200).json({ message: "domain exist", data: exist.url });
    } else {
      res.status(400).json({ message: "domain does not exist" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal error while searching domain" });
  }
};

export { signup, login, editPassword, editUrl, editDomain, searchDomain };
