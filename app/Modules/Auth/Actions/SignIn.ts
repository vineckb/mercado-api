import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class SignIn {
  public async handle({ request, auth, response }: HttpContextContract) {
    const username = request.input('username')
    const password = request.input('password')

    const user = await User.query().where('username', username).first()

    if (!user || !(await Hash.verify(user.password, password))) {
      return response.unauthorized('Invalid credentials')
    }

    const token = await auth.use('api').generate(user)

    return { token }
  }
}
