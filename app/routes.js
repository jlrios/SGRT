// ./app/routes.js.

module.exports = function(app, passport) {

  var UserCtrl = require('./controllers/Users.js');
  var User = require('./models/User');

  app.get("/", function(req, res) {
    res.render('index', {
      title: "PROTESA | SGRT"
    });
  });

  app.get('/login', function(req, res){
    res.render('login', {
      title:"SGRT | Iniciar sesión"
    });
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  app.get('/main', function(req, res){
    res.render('main', {
      title:"Hércules | Dashboard",
      user:req.user,
      view:"dashboard",
      titleView:"Dashboard"
    });
  });

  // Login post.
  app.post('/login', passport.authenticate('local-login', {
    successRedirect:'/main',
    failureRedirect:'/',
    failureFlash:true
  }));
} // Fin module.
