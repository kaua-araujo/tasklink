import jwt from 'jsonwebtoken';
import User from "../models/User";
import authConfig from '../../config/authConfig';

class SessionController
{
  async store(req,res){
    const {email, password} = req.body;

    //Verificando se esse email ixiste
    const user = await User.findOne({ where: {email}});

    if (!user) {
      return res.status(401).json({ error: 'Usuario não existe.'});
    }

    //Verificar hash
    if(!(await user.checkPassword(password))){
      return res.status(401).json({error: 'Senha Incorreta.'});
    }

    const {id, name} = user;

    return res.json({
      user:{
        id,
        name,
        email,
      },
      token: jwt.sign({id}, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
