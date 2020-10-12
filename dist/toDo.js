class toDo {
    getDaysTo() {
        var diff = Math.abs(this.data.getTime() - new Date().getTime());
        return Math.ceil(diff / (1000 * 3600 * 24));
    }
    getInfo() {
        return [this.nome, this.desc, this.data.toDateString(), this.getDaysTo().toFixed(2)];
    }
    constructor(nome = " atividae", desc = "o  q fazer", date = new Date()) {
        this.nome = nome;
        this.desc = desc;
        this.data = date;
    }
}
//# sourceMappingURL=toDo.js.map