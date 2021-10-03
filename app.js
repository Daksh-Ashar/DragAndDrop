var OuterBoxes = document.getElementsByClassName('outerBox');
var InnerBox = document.querySelector('.innerBox');

InnerBox.addEventListener('dragstart',() =>{

    console.log("darg start")
});

InnerBox.addEventListener('dragend',(e) =>{
    console.log("darg end");
});


for(outerBox of OuterBoxes)
{
    outerBox.addEventListener('dragover',(e) =>{
        e.preventDefault();
        console.log("Drag over");
    });

     outerBox.addEventListener('dragenter',(e) =>{
         console.log("Drag enter");
     });    
     
     outerBox.addEventListener('dragleave',(e) =>{
         console.log('Drag leave');
     });

     outerBox.addEventListener('drop',(e) =>{
        console.log('Drop ');
        e.target.append(InnerBox)
    });
}