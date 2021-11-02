const createTodo = require('../src/createTodo')

describe('Create Todo Items', function () {
    it("Returns a created Todo item with an id, text and a status", function () {
        //1. Set up
        const todoItems = {id: 1, text: "Brush your teeth", status: "incomplete"}

        //2. Execute
        const result = createTodo(todoItems)

        //3. Verify
        expect(result).toEqual({id: 1, text: "Brush your teeth", status: "incomplete"})
    })
})
  // {id: 2, text: "Have a bath", status: "incomplete"},
            // {id: 3, text: "Put on your clothes", status: "incomplete"},
            // {id: 4, text: "Pack your lunch", status: "incomplete"}