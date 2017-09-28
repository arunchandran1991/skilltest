
class SkillsController{

    
    constructor(skillsService){
        this._skillsService = skillsService;
    }

    registerRoutes(server){
        server.get('/api/skills', this._getAllSkills.bind(this));
        server.post('/api/skills', this._addSkills.bind(this));
        server.put('/api/skills/:id/update', this._updateSkills.bind(this));
        server.put('/api/skills/:id/approve', this._updateStatus.bind(this));
    }


    _getAllSkills(request, response, next){

        let query = request.query.q;
        this._skillsService.getAllSkills(query)
        .then(result =>{
            response.send(200, result);
            next();
        })
        .catch(error => {
            console.log(error);
            next(error)
        });
    }

    _addSkills(request, response, next){
        
        let skill = request.body;
        this._skillsService.addSkills(skill)
        .then(result =>{
            response.send(200, result);
            next();
        })
        .catch(error => {
            console.log(error);
            next(error)
        });
    }

    _updateSkills(request, response, next){
        let id = request.params.id;
        let skillName = request.body
        this._skillsService.updateSkills(id, skillName)
        .then(result =>{
            response.send(200, result);
            next();
        })
        .catch(error => {
            console.log(error);
            next(error)
        });
    }

    _updateStatus(request, response, next){
        
        let id = request.params.id;
        let status = request.body
        this._skillsService.updateStatus(id, status)
        .then(result =>{
            response.send(200, result);
            next();
        })
        .catch(error => {
            console.log(error);
            next(error)
        });
    }

}

module.exports = SkillsController;