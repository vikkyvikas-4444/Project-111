Webcam.set({
    width:350 , 
    height:300 ,
    image_format:'png' ,
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{

    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    })

}

console.log("ml5 version" , ml5.version);
classifier=ml5.imageClassifier('', modelLoaded);

function modelLoaded()
{
    console.log('modelLoaded');

}

function speak()
{
    var synth:indow.speechSynthesis;
     speak_data_="the prediction is-" + prediction_;
     

     var utterThis=new SpeechSynthesisUtterance(speak_data_1);
     synth.speak(utterThis);
}	