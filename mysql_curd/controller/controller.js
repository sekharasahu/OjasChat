const EmpService = require('../service/services');

class Emp {
    static async create(req, res) {
        try {
            let newUser = {
                id: req.body.id,
                name: req.body.name,
                address: req.body.address,
                age: req.body.age,
                phone: req.body.phone
            };

            let result = await EmpService.save(newUser);
            res.status(201).send({
                message : "User created"
            });
        } catch (err) {
            console.log(err);
        }
    }

    static async getUser (req, res) {
        try {
            let result = await EmpService.getUser();
            console.log(result);
            res.status(200).send(result[0]);
        } catch (err) {
            console.log(err);
        }
    }

    static async updateUser (req,res) {
        try {
            let result = await EmpService.updateuser(req.body.id,req.body.name,req.body.address,req.body.phone,req.body.age,);
            console.log(result);
            res.status(200).send({
                message:"user is updated"
            });
        } catch (err) {
            console.log(err);
        }

    }
    static async deletUser (req,res) {
        try {
            let result = await EmpService.deleteUser(req.body.id);
            console.log(result);
            res.status(200).send({
                message:"user is delted"
            });
        } catch (err) {
            console.log(err);
        }

    }
    
    
}

module.exports = Emp;