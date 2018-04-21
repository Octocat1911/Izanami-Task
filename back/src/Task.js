class Task {

    constructor(title,dateBegin,dateEnd,status,tags){
        this.title = title;
        this.dateBegin = dateBegin;
        this.dateEnd = dateEnd;
        this.status = status;
        this.tags = tags;
    }

}

module.exports = Task;