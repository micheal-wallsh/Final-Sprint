const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks");
  const data = await res.json();
  
  return data;
};

const Switchgames = () => {
  
  games = fetchTasks();
  console.log(games);
    var output =`<div class = "websitecontainer"><button>back</button> <br> <br>
    <div class = bannerBox>
    <img src = "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/systems_11/nintendo_switch_1/nintendo_switch_oled_2/H2x1_NintendoSwitch_Family_enGB.jpg" 
    height = 200px width = 600px/> 
    
    `;
    games.forEach((game)=>{

        if(game.console ==="Nintendo Switch")
        {
            output += `
            <div class ="container">
            <img src = ${game.picture} width ="136" height ="243"/>
            <p>${game.name}</p>
            <p>${game.price}</p>
            <button> Add to cart</button>
            </div>`
        }
        console.log(output)
    })
    output+= `</div></div>`
    
  return (
    <div>
   
   {document.body.innerHTML = output}
    
    
    </div>
  )
}

export default Switchgames