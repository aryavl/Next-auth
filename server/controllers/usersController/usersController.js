import validator from "validator";
import { prisma } from "../../prisma/index.js";
import bcrypt from "bcryptjs";
export const postUser = async (req, res) => {
    try {
      console.log(req.body);
      const { loginData: { email, password } } = req.body;
      
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });
  
      if (!existingUser) {
        return res.status(400).json({ error: "Credentials do not match with any registered account" });
      }
//   console.log(existingUser.password);
     
      const passwordMatch = await bcrypt.compare(password, existingUser?.password);
  
      if (!passwordMatch) {
        return res.status(400).json({ error: "Invalid password" });

      }
  
      res.status(200).json({ success: "Successfully loggedin" });
    } catch (error) {
      console.error(error);
    //   if (error instanceof Error && error.message === "Password incorrect") {
    //     return res.status(400).json({ error: "Invalid password" });
    //   }
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
export const postNewUser = async (req, res) => {
    try {
        const { email, password, name } = req.body.registerData;

        console.log(email, password, name);
       if(validator.isEmpty(name) ){
        return res.status(400).json({ error: "Name cannot be empty" });
       } 

        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        console.log(hashPassword);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword,
            },
        });

        res.status(200).json({ success: "Successfully registered" });
    } catch (error) {
        console.error(error);

        // Check if the error is due to unique constraint violation
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return res.status(400).json({ error: "Email already in use" }); // Return error for duplicate email
        }

        res.status(500).json({ error: "Internal server error" });
    }
};

