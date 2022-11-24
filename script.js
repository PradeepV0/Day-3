////For
var obj = {
    "name": "pradeep V",
    "age": 23,
    "gender": "male",
    "attendance" : ["day1","day2","day3","day3"]
}
for(var i =0;i<obj.attendance.length;i++){
    console.log(obj.attendance[i]);
}
///For in
var obj = {
    "name": "pradeep V",
    "age": 23,
    "gender": "male",
    "attendance" : ["day1","day2","day3","day3"]
}
for(var i in obj.attendance){
    console.log(obj.attendance[i]);
}
///For of

var obj = {
    "name": "pradeep V",
    "age": 23,
    "gender": "male",
    "attendance" : ["day","week","month","years"]
}
for(let i of obj.attendance){
    console.log(i);
}

////ForEach
var obj = {
    "name": "pradeep V",
    "age": 23,
    "gender": "male",
    "attendance" : ["day","week","month","years"]
}
obj.attendance.forEach(function(i){
    console.log(i);
});
/////resume

var Resume={
    "basics": {
      "name": "PRADEEP V",
      "email": "pradeepV@gamil.com",
      "phone": 8508752732,
      "degree": "D.ECE",
      "location": {
        "address": "4/286B Selathampatty Iyyanarappan Kovil St, Suramangalam Post",
        "postalCode": 636005,
        "city": "Salem",
        "state": "Tamilnadu",
        "country": "India"
      },
   
    },
    "work": [
      {
        "company": "Knowledge Splice Services Pvt Ltd",
        "position": "Senior Associate",
        "startDate": "11-6-2019",
        "endDate": "29-08-2022",
        "summary": "i am the Senior Associate handling various task and gaining lots of experience in US Mortgage",
      },
    ],
    "education": [
      {
        "institution": "Thiagarajar Polytechnic College",
        "department": "Electronics and Communication Engineering",
        "studyType": "fulltime",
        "batch start year": 2015,
        "batch end year": 2018,
        "Percentage": 78.55,
      }
    ],
    "skills": [
      {
        "name": "Full Stack Developer",
        "level": "Expert "
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "web development,Learning New,",
      }
    ]
  }
  console.log(Resume);

