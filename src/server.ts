import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World'
})

app.listen({}).then(() => {
  console.log('HTTP Server Running!')
})
