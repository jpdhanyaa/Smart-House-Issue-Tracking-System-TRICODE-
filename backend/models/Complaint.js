class Complaint{
    constructor(title,description,studentName){
        this.title=title
        this.description=description
        this.studentName=studentName
        this.status="Pending"
        this.createdAt=new Date()
    }
}
module.exports=Complaint