
var knex = require('knex')(require('../../knexfile')['development']);
var errors = require('restify-errors');

class SkillsRepository{

   getAllSkills(query){
        return knex('skills')
            .select()
            .where((qb)=>{
                if(query != undefined)
                    qb.where('name', 'like',query+'%')
            })
            .then((result) => {return Promise.resolve(result)})
            .catch(reason => {return Promise.reject(new errors.InternalServerError(reason))});
   } 

   addSkills(skill) {
        return knex('skills')
        .insert(skill)
        .then(() => {return 'success'})
        .catch(reason => {return Promise.reject(new errors.InternalServerError(reason))});
    }

    updateSkills(id, skillName) {
        return knex('skills')
        .where('id', id)
        .update(skillName)
        .then(() => {return 'success'})
        .catch(reason => {return Promise.reject(new errors.InternalServerError(reason))});
    }

    updateStatus(id, status) {
        return knex('skills')
        .where('id', id)
        .update(status)
        .then(() => {return 'success'})
        .catch(reason => {return Promise.reject(new errors.InternalServerError(reason))});
    }

}

module.exports = SkillsRepository;