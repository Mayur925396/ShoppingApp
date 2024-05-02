var arr=[
{
    id:1,
    fname:'Mayur',
    lname:'Ghadage'
},
{
    id:2,
    fname:'Kishor',
    lname:'Nanaware'
},
{
    id:3,
    fname:'Shubham',
    lname:'Yadav'
}
]

var arr2=[
    {
        id:2,
        fname:'Shradhha',
        lname:'Kharade'
    },
    {
        id:3,
        fname:'Nilam',
        lname:'Mane'
    }
];

arr.forEach((x)=>{
    arr2.forEach((y)=>{
        if(x.id==y.id){
          Object.assign(x,y);
        }
    
    })
   
})
console.log(arr)
