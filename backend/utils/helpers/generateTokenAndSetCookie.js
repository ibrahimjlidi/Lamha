import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {

const token = jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn :'3d',
})
res.cookie('jwt',token,{
    httpOnly:true, //more secure
    maxAge : 15 * 60 * 60 * 24 * 1000 ,
    sameSite:"strict", // CSRF
})

return token;

} 
export default generateTokenAndSetCookie ;