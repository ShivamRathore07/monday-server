import jwt from "jsonwebtoken";

const permission = (...allowedRoles) => {
  return (req, res, next) => {
    const token = req.cookies["_user_"];
    console.log("06",token)

    if (!token) return res.sendStatus(401);

    if (token) {
      let decodedData;

      decodedData = jwt.verify(token, process.env.SECRET_KEY);
      console.log("14",decodedData)

      const rolesArray = [decodedData.user.role];
      console.log("17",rolesArray)

      const result = rolesArray
        .map((role) => allowedRoles.includes(role))
        .find((val) => val === true);
        console.log("22",result)

      if (!result) return res.sendStatus(401);

      next();
    }
  };
};

export default permission;