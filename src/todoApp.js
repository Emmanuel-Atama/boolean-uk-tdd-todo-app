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
    }
}
module.exports = todoApp
