//import jwt from "jsonwebtoken";
const getEmpId = () => {
  const empId = sessionStorage.getItem("empId");
  if (empId) return JSON.parse(empId);
  return null;
};

// jwt.sign(
//   {
//     empId,
//   },
//   "This is the secret",
//   { expiresIn: "1h" },
//   function (err, token) {
//     if (err) return null;
//     return token;
//   }
// );

//const getToken = () => sessionStorage.getItem("token") || null;
const removeUserSession = () => {
  //sessionStorage.removeItem("token");
  sessionStorage.removeItem("empId");
};
const setUserSession = (empId) => {
  // sessionStorage.setItem("token", token);
  sessionStorage.setItem("empId", JSON.stringify(empId));
};
export { getEmpId, removeUserSession, setUserSession };
