const User = use('App/Models/User');
const Log = use('App/Models/Log');

class UserController {

  async index() {
    return {message: 'List of Users.'}
  }

  async store({request, response}) {
    try {
      const user = await User.create(request.all());
      await Log.create({
        module: 'user',
        mothod: 'store',
        route: 'POST:/user',
        user: user.id
      });
      return response.status(200).message({message: 'success'});
    } catch (error) {
      return response.status(400).send({message: error.message});
    }
  }

}

module.exports = UserController
