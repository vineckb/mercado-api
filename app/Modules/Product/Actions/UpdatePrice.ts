import Product from 'App/Models/Product'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class UpdatePrice {
  public async handle({ request, params }: HttpContextContract) {
    const { id } = params

    const validationSchema = schema.create({
      price: schema.number(),
    })

    const data = await request.validate({ schema: validationSchema })

    await Product.query().where('id', id).update(data)

    return await Product.findOrFail(id)
  }
}
