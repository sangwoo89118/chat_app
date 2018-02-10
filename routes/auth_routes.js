const Authentication = require('../controller/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = app =>{
    app.post('/auth/signin', requireSignin, Authentication.signin);
    app.post('/auth/signup', Authentication.signup);
    app.post('/auth/get-user', requireAuth, (req, res)=>{
        const user = {
            username: req.user.username
        }

        res.send(user);
    });
}


