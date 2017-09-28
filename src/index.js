var restify = require('restify');
var server = restify.createServer();
const port = 8083;
const bodyParser = require('body-parser');

var SkillsController = require('./controller/skillsController');
var SkillsService = require('./service/skillsService');
var SkillsRepository = require('./repository/skillsRepository');

var skillsRepository = new SkillsRepository();
var skillsService = new SkillsService(skillsRepository);
var skillsController = new SkillsController(skillsService);


server.use(bodyParser.json());
server.use(restify.plugins.queryParser());

skillsController.registerRoutes(server);

server.get('/.*/', restify.plugins.serveStatic({
    'directory': 'public',
    'default': 'index.html'
}));

server.listen(port, function(){
    console.log('%s listening at %s', server.name, server.url);
});
