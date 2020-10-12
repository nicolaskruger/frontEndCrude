 
class toDo {
    nome:string;
    desc:string;
    data:Date;
    getDaysTo():number{
        var diff = Math.abs(this.data.getTime() -  new Date().getTime());
        return Math.ceil(diff / (1000 * 3600 * 24)); 
    }
    getInfo():Array<string>{
        return [this.nome,this.desc,this.data.toDateString(),this.getDaysTo().toFixed(2)];
    }
    constructor(nome:string =" atividae",desc:string ="o  q fazer",date:Date = new Date()){
        this.nome =nome;
        this.desc = desc;
        this.data = date;
    }   
}