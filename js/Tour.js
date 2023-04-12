AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.crbo(position,item.id)
      // Thumbnail Element
      const thumbnail = this.crtn(item)
      borderEl.appendChild(thumbnail)
      // Title Text Element
      const title = this.crte(position,item)
      borderEl.appendChild(title)
      this.placesContainer.appendChild(borderEl);
    }
  },
  
crbo: function(position, id){
  const e1 = document.createElement("a-entity")
  e1.setAttribute("id", id)
  e1.setAttribute("visible", true)
  e1.setAttribute("geometry", {
    primitive:"ring", 
    radiusInner:9,
    radiusOuter:10
  })
  e1.setAttribute("position", position)
  e1.setAttribute("material", {
    color:"#0077cc",
    opacity:1,
  })
  return e1
},

crtn: function(item){
  const n1 = document.createElement("a-entity")
  n1.setAttribute("visible", true)
  n1.setAttribute("geometry", {
    primitive:"circle", 
    radius:9
  })
  n1.setAttribute("material", {
    src:item.url
  })
  return n1
},

crte: function(position, item){
  const t1 = document.createElement("a-entity")
  t1.setAttribute("text", {
    font:"exo2bold",
    align:"center",
    width:70,
    color:"orange",
    value:item.title
  })
  const elpos = position
  elpos.y = -20
  t1.setAttribute("position", elpos)
  t1.setAttribute("visible", true)
  return t1
}

});
