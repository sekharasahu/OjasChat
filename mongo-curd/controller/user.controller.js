const UserServices = require('../services/user.service');

class User {
    constructor(
        name,
        age,
        city,
        phone
    ) {
        this.name = name;
        this.age = age,
        this.city = city,
        this.phone = phone,
        this.isDeleted = false
    }
}


class UserController {
    //Create a new USER
    static async create(req, res) {
        const newUser = new User(
            req.body.name,
            req.body.age,
            req.body.city,
            req.body.phone,
        );
        const result = await UserServices.save(newUser);
        res.send(result);
    }

    //GET all the users
    static async getUsers(req, res) {
        const result = await UserServices.getAll();
        res.send(result);
    }

    //Update user
    static async updateUser(req,res){
        const result = await UserServices.updateUser(req.params.id,req.body);
        res.send(result);

    }

    //Soft delete user
    static async deleteUser(req,res){
        const result = await UserServices.deleteUser(req.params.id)
        res.send(result);
    }
}

module.exports = UserController;