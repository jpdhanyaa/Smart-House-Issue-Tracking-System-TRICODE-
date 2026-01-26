exports.createComplaint=(req,res)=>{
    const studentName=req.body.studentName
    const issueTitle=req.body.issueTitle
    const description=req.body.description

    const newComplaint={
        studentName,
        issueTitle,
        description
    }
    res.send("Complaint recived successfully")
}