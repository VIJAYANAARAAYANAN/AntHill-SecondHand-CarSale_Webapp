import bcrypt from "bcryptjs";

const createHashedPassword = async () => {
  const password = "Vijay#21"; 
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log("Hashed Password:", hashedPassword);
};

createHashedPassword();
