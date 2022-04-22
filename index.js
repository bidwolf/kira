const express = require('express');
const expressHandlebars = require('express-handlebars');
const middleware = require('/Programação/lexie/index');
const app = express();
const port = process.env.PORT || 3000;
const handlers = require('./lib/handlers');
//const weatherMiddleware = require('./lib/middleware/weather');
app.use(middleware);
app.use(express.static(__dirname + '/public')); //auxilia nas rotas dos arquivos dentro das páginas
//app.use(weatherMiddleware);
// Exemplo de helper para seções
let handlebarsEngine = expressHandlebars.engine({
    defaultLayout: 'main',
    helpers: {
        section: function(name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});
app.engine('handlebars', handlebarsEngine);
app.set('view engine', 'handlebars');
app.get('/home', handlers.home);
app.get('/produtos', handlers.produtos);
app.use(handlers.notFound);
app.use(handlers.serverError);

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Express started on http://localhost:${port}` +
            '; press Ctrl-C to terminate.');
    });
} else {
    module.exports = app;
}