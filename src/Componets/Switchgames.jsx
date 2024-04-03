

const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks");
  const data = await res.json();
  
  return data;
};
const games = [{
  id: "1",
  console:"Nintendo Switch",
  name:"Super Smash Bros Ultimate",
  picture:"https://external-preview.redd.it/_wq5TFnymlf33K6o_hy4NnD1cDzIMB7Vg2SiXVo-dHw.jpg?auto=webp&s=447955d77286e4d4a421121b7fa813abf8bb3b13",
  price:"$79.99"
},
{
  id: "2",
  console:"Nintendo Switch",
  name:"The legend of zelda tears of the kingdom",
  picture:"https://imageio.forbes.com/specials-images/imageserve/63220c5a654e79ab76c1fa09/Zelda-Tears-of-the-Kingdom-boxart/960x0.png?format=png&width=1440",
  price:"$79.99"
},
{
  "id": "3",
  "console":"Nintendo Switch",
  "name":"The legend of Zelda Breath of the wild",
  "picture":"/Users/keyinstudent/Documents/Final-Sprint/src/Pictures/Zelda Botw.jpeg",
  "price":"$79.99"
},
{
  "id": "4",
  "console":"Nintendo Switch",
  "name":"Xenoblade Chronicles 3",
  "picture":"/Users/keyinstudent/Documents/Final-Sprint/src/Pictures/Xenoblade 3.jpeg",
  "price":"$79.99"
},
{
  "id": "5",
  "console":"Nintendo Switch",
  "name":"Fire Emblem Three Houses",
  "picture":"/Users/keyinstudent/Documents/Final-Sprint/src/Pictures/FE Three houses.jpeg",
  "price":"$79.99"
},
{
  "id": "6",
  "console":"Nintendo Switch",
  "name":"Metriod Dread",
  "picture":"/Users/keyinstudent/Documents/Final-Sprint/src/Pictures/Metriod.jpeg",
  "price":"$79.99"
},
{
  "id": "7",
  "console":"Nintendo Switch",
  "name":"Mario Cart 8 Deluxe",
  "picture":"/Users/keyinstudent/Documents/Final-Sprint/src/Pictures/Mario Kart.jpeg",
  "price":"$79.99"
},
{
  "id": "8",
  "console":"Nintendo Switch",
  "name":"Super Mario Oddyssey",
  "picture":"/Users/keyinstudent/Documents/Final-Sprint/src/Pictures/Mario odyssey.jpeg",
  "price":"$79.99"
},
{
  "id": "9",
  "console":"Playstation",
  "name":"Spider-man 2",
  "picture":"https://static-ca.gamestop.ca/images/products/779940/3max.jpg",
  "price":"$79.99"
}]
const Switchgames = () => {
   
  //games = fetchTasks();
  
  console.log(games);
    var output = "";
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
        
        
     
    })
    console.log(output)
    
    
  return (
    
    <div>
      <button>back</button>
      <div class = "websitecontainer">
         
   
    <div class = "bannerBox">
    <img src = "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/systems_11/nintendo_switch_1/nintendo_switch_oled_2/H2x1_NintendoSwitch_Family_enGB.jpg" 
    height = "200px" width = "650px"/> 
 <div class = "gameBox">
 <div dangerouslySetInnerHTML= {{__html:`${output}`}}></div>
 </div>
   </div>
   </div>
   </div>
  )
};


export default Switchgames