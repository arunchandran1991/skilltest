class SkillsService{

    constructor(skillsRepository){
        this._skillsRepository = skillsRepository;
    }

    getAllSkills(query){

        return new Promise((resolve, reject)=>{
            this._skillsRepository.getAllSkills(query)
            .then((res)=>resolve(res))
            .catch((err)=>reject(err))
        });

    }

    addSkills(skill){
        
        return new Promise((resolve, reject)=>{
            this._skillsRepository.addSkills(skill)
            .then((res)=>resolve(res))
            .catch((err)=>reject(err))
        });

    }

    updateSkills(id, skillName){
        
        return new Promise((resolve, reject)=>{
            this._skillsRepository.updateSkills(id, skillName)
            .then((res)=>resolve(res))
            .catch((err)=>reject(err))
        });

    }

    updateStatus(id, status){
        
        return new Promise((resolve, reject)=>{
            this._skillsRepository.updateStatus(id, status)
            .then((res)=>resolve(res))
            .catch((err)=>reject(err))
        });

    }

}

module.exports = SkillsService;
