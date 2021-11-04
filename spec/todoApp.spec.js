const { id } = require('../src/todoApp')
const todoApp = require('../src/todoApp')

describe('Create todoApp', () => {
    afterEach(() => {
        todoApp.items = [] //Resets the todoApp everytime it is run
        todoApp.id = 0
    })
    it("Returns a created Todo item with an id, text and a status", () => {
        //1. Set up
        const expected = {
            id: 1,
            text: "Testing",
            status: "incomplete"
        }
        //2. Execute
        expect(todoApp.create("Testing")).toEqual(expected)
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
    it("Show only todo items that are complete", () => {
         //1. Set up
         todoApp.create("Brush your teeth")
         todoApp.create("Take your bath")
         
        todoApp.setComplete(1)

         const expected = [
            {
                id: 1,
                text: "Brush your teeth",
                status: "complete"
            },
            {
                id: 2,
                text: "Take your bath",
                status: "incomplete"
            }
        ]

         //2. Execute
    expect(todoApp.items).toEqual(expected)
    })
    it("Show only todo items that are incomplete", () => {
        //1. Set up
        todoApp.create("Brush your teeth")
        todoApp.create("Take your bath")
        
        todoApp.setComplete(1)
        todoApp.setComplete(2)
        todoApp.setInComplete(2)

        const expected = [
           {
               id: 1,
               text: "Brush your teeth",
               status: "complete"
           },
           {
               id: 2,
               text: "Take your bath",
               status: "incomplete"
           }
       ]

        //2. Execute
      expect(todoApp.items).toEqual(expected)
     
   })
})
