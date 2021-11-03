const todoApp = require('../src/todoApp')

describe('Create todoApp', () => {
    beforeEach(() => {
        todoApp.id = 0
    })
    it("Returns a created Todo item with an id, text and a status", () => {
        //1. Set up
        const expected = {
            id: 1,
            text: "Brush your teeth",
            status: "incomplete"
        }
        //2. Execute
        expect(todoApp.create("Brush your teeth")).toEqual(expected)
        //3. Verify
    })
    it("Creates multiple todo items", () => {
        //1. Set up
        const item1 = todoApp.create("Brush your teeth")
        const item2 = todoApp.create("Take your bath")
     
        //2. Execute
        expect(item1.id).toEqual(1)
        expect(item2.id).toEqual(2)
     
    })
    it("Show all todo items", () => {
        //1. Set up
        todoApp.create("Brush your teeth")
        todoApp.create("Take your bath")
     

        const items = todoApp.showAll()

        const expected = [
            {
                id: 1,
                text: "Brush your teeth",
                status: "incomplete"
            },
            {
                id: 2,
                text: "Take your bath",
                status: "incomplete"
            }
        ]
        //2. Execute
        expect(items).toEqual(expected)
    })
    
})
