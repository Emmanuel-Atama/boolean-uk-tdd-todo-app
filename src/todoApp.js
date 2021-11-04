const todoApp = {
    id: 0,
    items: [],
    create: function (text) {
        this.id++
        const item = {
            id: this.id,
            text: text,
            status: "incomplete"
        }
        console.log("Inside create: ", this)
        this.items.push(item)
        return item
    },
    showAll: function() {
        return this.items
    },
    setComplete: function(id) {
        console.log("Inside the setComplete function: ", id)
        const item = this.items.find((item) => item.id === id)
        item.status = "complete"
        return item
    },
    setInComplete: function(id) {
        const item = this.items.find((item) => item.id === id)
        item.status = "incomplete"
        return item
    }
   
}
module.exports = todoApp
