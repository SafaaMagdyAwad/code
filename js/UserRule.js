export default class UserRule{
    
    constructor(rid,rname,rtime){
        this.id=rid;
        this.nameOfRule=rname;
        this.time=rtime;
    }
    
    addRule(){
        let rule={
            "id":this.id,
            "name":this.nameOfRule,
            "time":this.time,
        }
        return rule;
    }

}