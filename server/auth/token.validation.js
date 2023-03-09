import verify from 'jsonwebtoken'

export const checkToken = (req, res, next) => {
    let token = req.get('authorization')
    if(token){
        token = token.slice(7)
        verify(token, "qwe1234", (erro,decoded)=>{
            if(erro){
                res.json({
                    success: 0,
                    message: "Invalid token"
                })
            }else{
                next()
            }
            
        })
    }else{
        res.json({
            success:0,
            message:"Access denied! unauthorized user."
        })
    }
}