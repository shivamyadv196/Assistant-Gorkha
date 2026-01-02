let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
function speak(text){
  let text_speak=new SpeechSynthesisUtterance(text)
   text_speak.rate=1
   text_speak.pitch=1
   text_speak.volume=1
   //text_speak.lang="hi-GB"
   window.speechSynthesis.speak(text_speak)  
}
// for wishing like good morning
function wishMe(){
    let day=new Date()
    let hours= day.getHours()
    console.log(hours)
    if(hours>=0 && hours<12){
        speak("Good Morning, Sir")
    }
    else if(hours>=12 && hours<15){
        speak("Good afternoon sir")
    }
    else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    // that is locat which we talk to this where it can convert into the english 
    // and locate the index which store in the variable and pass as a text
    let currentIndex =event.resultIndex
    let transcript= event.results[currentIndex][0].transcript
    // which we tell that show on the content or on click button 
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())

}
btu.addEventListener("click",()=>{
    recognition.start()
   // btn.style.display="none"
   // voice.style.display="block"

})

// for making intelligent 
function takeCommand(message){
 // btn.style.display="flex"
   // voice.style.display="none"

    if(message.includes("hello") || message.includes("hi")){
        speak("hello Shivam, what can i help you")
    }
    else if(message.includes("who are you") || message.includes("hu r u")){
        speak("I am virtual assistant Gorkha, created by Shivam Yadav")
    }
    else if(message.includes("open youtube")){
      speak("opening youtube ")
      window.open("https://www.youtube.com/")

    }else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    
    }
     else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
     else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
      let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("gorkha","")}`,"_blank")
    }
}
