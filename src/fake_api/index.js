import { createServer, Model } from 'miragejs';

export const setupServer = () => {
  createServer({
    models: {
      tasks: Model
    },
    routes() {
      this.get('/api/taskList', (schema) => {
        return schema.tasks.all();
      });

      this.post('/api/taskList', (schema, request) => {
        const payload = JSON.parse(request.requestBody);

        return schema.tasks.create(payload);
      });

      // this.post('/api/updateTodo', (schema, request) => {
      //   const id = JSON.parse(request.requestBody);

      //   const currentTodo = schema.todos.find(id);

      //   currentTodo.update({ completed: !currentTodo.completed});

      //   return currentTodo;
      // })
    }
  });
};