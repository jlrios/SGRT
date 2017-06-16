module.exports = function(app, passport) {

  app.get('/', function(req, res) {
    res.render('index', {
      title: 'PROTESA | SGRT'
    });
  });

  app.get('/login', function(req, res){
    res.render('login', {
      title: 'SGRT | Iniciar sesión'
    });
  });

  app.get('/main', isLoggedIn, function(req, res){
    res.render('main', {
      title: 'SGRT | Tablero de información',
      titleView: 'Tablero de información',
      user: req.user,
      view: 'dashboard'
    });
  });

  app.get('/publicar/reportes', isLoggedIn, function(req, res){
    res.render('main', {
      title: 'SGRT | Publicar Reportes',
      titleView: 'Publicar Reportes',
      user: req.user,
      view: 'reports'
    });
  });

  app.get('/operaciones/reportes', isLoggedIn, function(req, res) {
    res.render('main', {
      title: 'SGRT | Eliminar y/o editar Reportes',
      titleView: 'Eliminar y/o editar Reportes',
      user: req.user,
      view: 'delete-edit-reports'
    });
  });

  app.get('/calendar', isLoggedIn, function(req, res) {
    res.render('main', {
      title: 'SGRT | Calendario',
      titleView: 'Calendario',
      user: req.user,
      view: 'calendar',
    });
  });

  app.get('/catalogos/clientes', isLoggedIn, function(req, res) {
    res.render('main', {
      title: 'SGRT | Catálogo de Clientes',
      titleView: 'Catálogo de Clientes',
      user: req.user,
      view: 'customers-list'
    });
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect("/");
  });

  // Login post.
  app.post('/login', passport.authenticate("local-login", {
    successRedirect: "/main",
    failureRedirect: "/",
    failureFlash: true
  }));
} // Fin module.

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/");
}
