
var homeContent = `        <div class="hero"></div>
<div class="content">
  <h1>HOME</h1>
  <div class="products">
    <div class="product">
      <div class="prod-image"></div>
      <div class="prod-desc">
        <h4>Big City</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis adipisci beatae esse sit earum ducimus commodi,
          corporis debitis. A ducimus quos sunt asperiores omnis
          mollitia harum nam? Mollitia, architecto officiis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Facere exercitationem minima architecto sunt reiciendis, minus
          neque alias fugiat, quos ipsum libero in omnis qui sit id?
          Incidunt modi laudantium nulla.
        </p>
      </div>
    </div>
    <div class="product">
      <div class="prod-image"></div>
      <div class="prod-desc">
        <h4>Big City</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis adipisci beatae esse sit earum ducimus commodi,
          corporis debitis. A ducimus quos sunt asperiores omnis
          mollitia harum nam? Mollitia, architecto officiis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Facere exercitationem minima architecto sunt reiciendis, minus
          neque alias fugiat, quos ipsum libero in omnis qui sit id?
          Incidunt modi laudantium nulla.
        </p>
      </div>
    </div>
    <div class="product">
      <div class="prod-image"></div>
      <div class="prod-desc">
        <h4>Big City</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis adipisci beatae esse sit earum ducimus commodi,
          corporis debitis. A ducimus quos sunt asperiores omnis
          mollitia harum nam? Mollitia, architecto officiis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Facere exercitationem minima architecto sunt reiciendis, minus
          neque alias fugiat, quos ipsum libero in omnis qui sit id?
          Incidunt modi laudantium nulla.
        </p>
      </div>
    </div>
  </div>
</div>`;

var aboutContent = `   <div class="hero"></div>
<div class="content">
  <h1>HOME</h1>
  <div class="products">
    <div class="product">
      <div class="prod-image"></div>
      <div class="prod-desc">
        <h4>Big City</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis adipisci beatae esse sit earum ducimus commodi,
          corporis debitis. A ducimus quos sunt asperiores omnis
          mollitia harum nam? Mollitia, architecto officiis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Facere exercitationem minima architecto sunt reiciendis, minus
          neque alias fugiat, quos ipsum libero in omnis qui sit id?
          Incidunt modi laudantium nulla.
        </p>
      </div>
    </div>
  </div>
</div>`



function initListeners(){
$("nav a").click(function (e){
    let btnID = e.currentTarget.id;
    loadPageContent(btnID);
    // let contentID = btnID + "Content";
    // $("#app").html(eval(contentID));
    // console.log("click" + contentID);
  });
}

function loadPageContent(pageName){
    let contentID = pageName + "Content";
    $("#app").html(eval(contentID));
}


function initApp(){
  initListeners();
}

$(document).ready(function (){
    // loadPageContent("home")
    initApp();
});
