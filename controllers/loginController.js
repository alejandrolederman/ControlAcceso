const db = require("../database/models")


let loginController = {

    login: (req, res) => {
        res.render('login');
    },

////////////////////////////////////////////////////////////////////////////////// 
    // valida el login y guarda en session y cookie al usuario registrado
    loginProcess: (req, res) => {
        //revicion de que email no esta vacio
        if (req.body.firstName == 0) {
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Ingrese un email registrado'
                    }
                }
            });
        }
        //busca el mail en la base de datos
        db.Usuarios.findOne({where: { firstName: req.body.firstName }})
        .then(function(userToLogin){ 
            //si esta confirma que la contraseña sea correcta
            console.log(userToLogin);
            if(userToLogin){
                     
                
                    req.session.userLogged = userToLogin;
                    //lo guarda en cookys
                    if(req.body.remember) {
                        res.cookie('firstName', req.body.firstName, { maxAge: ((1000 * 60) * 60) * 60 })
                    };
                    
                    res.redirect('listadoAlumnos');
                

                res.render('login', {
                    errors: {
                        pass: {
                            msg: "las credenciales son invalidas"
                        }
                    }   
                });
            }

            res.render('./users/login', {
                errors: {
                    email: {
                        msg: "no se encontro el email en nuestra base de datos"
                    }
                }   
            });
        })

        .catch(function(err){
            console.log(err)
        })
    },


}

module.exports = loginController;

