function ticketCinema(input){
let index=0;
let comand=input[index];
let ticketComand="";
let totalTickets=0;
let studentTickets=0;
let standartTickets=0;
let kidsTickets=0;
while(comand!=="Finish"){
   let nameFilm=comand;
   index++;
   let aviableTickets=Number(input[index]);
   let numTicket=0;
     index++;
   ticketComand=input[index];
   while(ticketComand!=="End"){
     let ticket=ticketComand;
     numTicket++;
     switch (ticket) {
        case "student":
            studentTickets++;
            totalTickets++;
            break;
       case  "standard":
            standartTickets++;
            totalTickets++;
            break;
              case "kid":
            kidsTickets++;
            totalTickets++;
            break;
        default:
            break;
     }
     if(numTicket===aviableTickets){
        break;
     }
     index++;
     ticketComand=input[index];
   }
   console.log(`${nameFilm} - ${((numTicket/aviableTickets)*100).toFixed(2)}% ful.`);
   numTicket=0;
index++;
comand=input[index];
}
console.log(`Total tickets: ${totalTickets}`);
console.log(`${((studentTickets/totalTickets)*100).toFixed(2)}% student tickets.`);
console.log(`${((standartTickets/totalTickets)*100).toFixed(2)}% standard tickets.`);
console.log(`${((kidsTickets/totalTickets)*100).toFixed(2)}% kids tickets.`);
}
ticketCinema(["The Matrix","20","student","standard","kid","kid","student","student","standard","student","End","The Green Mile","17","student","standard","standard","student","standard","student","End","Amadeus","3","standard","standard","standard","Finish"]);