class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    updateState(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();

        form.display();
      }
    }
  
    play(){
      if(gameState === 0){
        form.hide();

      }

      Player.getPlayerInfo();
     
      var rand = Math.round(random(1,4));

      for(var plr in allPlayers){

     if(allPlayers[plr].indexNo < 5){
  
        if(rand === 1 && solToken === 0){
            soldier = new Soldier();
            soldier.display();
            solToken+=1;
            solSpr.shapeColor = "blue";
        }
        else if(rand === 2 && helToken === 0){
            helicopter = new Helicopter();
            helicopter.display();
            helToken+=1;
            helSpr.shapeColor = "blue";
            
        }
        else if(rand === 3 && tankToken === 0){
            tank = new Tank();
            tank.display();
            tankToken+=1;
            tankSpr.shapeColor = "blue";
        
        }
        else if(rand === 4 && launchToken === 0){
            launcher = new Launcher();
            launcher.display();
            launchToken+=1;
             launchSpr.shapeColor = "blue";
          
        }
      }
      if(allPlayers[plr].indexNo > 4) {

        if(rand === 1 && solToken2 === 0){
            soldier = new Soldier();
            soldier.display();
            solToken+=1;
            solSpr.x = 1200;
            solSpr.shapeColor = "red";
            
        }
        else if(rand === 2 && helToken2 === 0){
            helicopter = new Helicopter();
            helicopter.display();
            helToken+=1;
            helSpr.x = 1200;
            helSpr.shapeColor = "red";
            
        }
        else if(rand === 3 && tankToken2 === 0){
            tank = new Tank();
            tank.display();
            tankToken+=1;
            tankSpr.x = 1200;
            tankSpr.shapeColor = "red";
          
        }
        else if(rand === 4 && launchToken2 === 0){
            launcher = new Launcher();
            launcher.display();
            launchToken+=1;
            launchSpr.x = 1200;
            launchSpr.shapeColor = "red";
          
        }
      }
      console.log(allPlayers[plr].index);
    }
    }
  }
