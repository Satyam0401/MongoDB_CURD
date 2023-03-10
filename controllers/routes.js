const express =require('express')
const Employee = require("../model/employee.model")
const router = express.Router()


router.get("/",(req,res)=>{
    res.render("home")
})

router.get('/add-emp',(req,res)=>{
    res.render("addEmp")
})

router.post("/save-emp",(req,res)=>{
    let Emp = new Employee()
    Emp.fullName=req.body.fullName
    Emp.email=req.body.email
    Emp.mobile=req.body.phone
    Emp.city=req.body.city
    
    Emp.save((err,result)=>{
     if(!err){
         res.redirect("/emp")}
         else{
             console.log("Save Error")
         }
    })
})

router.get('/show-all-emp',(req,res)=>{
    Employee.find((err,result)=>{
        if(!err){
res.render('showEmp',{list:result})
        }else{
            console.log("Show Error",err)
        }
    })
})

router.get('/delete-all-emp',(req,res)=>{
    Employee.find((err,result)=>{
        if(!err){
            res.render('deleteEmp',{list:result})
        }
    else{
        console.log("No bro!!")
    }
    })
})

router.get('/deleteSpecific/:uid',(req,res)=>{
    Employee.findByIdAndDelete(req.params.uid,(err,result)=>{
        if(!err){
            res.redirect('/emp/show-all-emp')
        }
    })
})


router.get('/preUpdate/',(req,res)=>{
    Employee.find((err,result)=>{
        if(!err){
             res.render('preUpdate',{list:result})
        }
    })
})


router.get('/preUpdate/:id',(req,res)=>{
    Employee.findById(req.params.id, (err,result)=>{
if(!err){
    res.render('preEmp',{emp:result})
}
    })
})

router.post("/finalUpdate",(req,res)=>{
Employee.findByIdAndUpdate(req.body.id,req.body,{new:true},(err,result)=>{
if(!err){
    res.redirect("/emp/show-all-emp")
}
})
})
module.exports = router  