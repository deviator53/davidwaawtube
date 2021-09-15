module.exports = {
    register: async(req, res)=>{

        res.render('auth/register', {pageTitle: 'Register'});
    },

    login: async (req, res) =>{

    },

    postRegister: async (req, res) =>{

        let {username, email, password} = req.body;

        if(password.length < 6){
            res.redirect('back')
        }

    },

    postLogin: async (req, res) => {

    },

    forgotPassword: async(req, res) =>{

    }

}