//function to avoid overlapping of an item and a platform among themselves
function avoidItemPlatformOL(){
    for(platform of allPlatforms){
        for(item in allItems){
            let pPositions = renderPosition(platform);
            let iPositions = renderPosition(item);
            let pleft = pPositions[0]
            let pbottom = pPositions[1]
            let pright = pPositions[2]
            let ptop = pPositions[3]
            let ileft = iPositions[0]
            let ibottom = iPositions[1]
            let iright = iPositions[2]
            let itop = iPositions[3]
            //if(((iright>=pleft)&&(ileft<=pright)) || ((ibottom>=ptop)&&(itop<=pbottom))){
            if(((pleft < iright) && (pright > ileft) && (pbottom > itop) && (ptop < ibottom))){
            
                console.log("got here! If item and platform are overlapping, lets delete the item")
            }
        }  
    } 
}

function renderPosition(object){

    let positions = []
    positions.push(object.x) //left
    positions.push(object.y) //
    positions.push(object.width - 50 + object.x) //right
    positions.push(object.bottom - 50) //top
    return positions;
}

//the following is just a method to test whether our colloisionDetection mechanism works properly

function collisionTestMethod(object){
    const playableCharacter = allPcs[0]

    const characterPositions = playableCharacter.pcPositions

    const characterWidth = 70
    const characterHeight = 128


    if(collisionDetection(characterPositions, characterWidth, characterHeight , renderPosition(object))){
        if(object==item){
          //console.log("collision occurred with an item");   
          //console.log(playableCharacter.health, playableCharacter.points)
          var audio = new Audio(`./assets/Audio/Jump-SoundBible.com-1007297584.mp3`,);
          audio.play();
          item.pickup(playableCharacter)
          item.context.clearRect(item.x, item.y, item.width, item.height)
          item.x = 0
          item.y = 0
          // playableCharacter.health = 90
          console.log(playableCharacter.health)

        }

        if(object==platform){
            //console.log("collision occurred with a platform")
            

            if(playableCharacter.y + playableCharacter.height < object.y + 30){
              var audio = new Audio(`./assets/Audio/Strong_Punch-Mike_Koenig-574430706.mp3`);
              audio.play();
              playableCharacter.falls  = false
              playableCharacter.vertical_speed = 0
            } else{
            var audio = new Audio(`./assets/Audio/Strong_Punch-Mike_Koenig-574430706.mp3`);
            audio.play();
            playableCharacter.direction = 'stop'
            playableCharacter.vertical_speed = -5
          }
        }
    }
    if(minotaurCollisionDetection(characterPositions, characterWidth, characterHeight)){
            var audio = new Audio(`./assets/Audio/Strong_Punch-Mike_Koenig-574430706.mp3`);
            audio.play();
            playableCharacter.knockbackLeft()
            playableCharacter.health -= 20
   }
}
function collisionDetection(characterPositions, characterWidth, characterHeight, objectPositions){
    const playableCharacter = allPcs[0]
    var pleft = objectPositions[0];
    //objectPositions -> object's positions->left, bottom ,right, top
    //characterPositions -> playableCharacter's positions ->left, bottom

    var pright =  (objectPositions[2]);//platform's left + platform's width
    var ptop = objectPositions[1]; //platform's top (y)
    var pbottom =  objectPositions[3]; //platform's bottom + (platform.height)
    var pcleft = characterPositions[0];
    var pcright = (characterPositions[0]) + (characterWidth);
    var pctop = characterPositions[1]; // character to top of canvas
    var pcbottom= pctop + characterHeight;
    var collision = false;

    //checking - lets not delete this one. Will be easy for future development
    // if(window.testing){
    //
    //     console.log('Platform: ')
    //     console.log('left: ', pleft, 'right: ', pright, 'top: ', ptop, 'bottom: ', pbottom, )
    //     console.log('Character: ')
    //     console.log('left: ', pcleft, 'right: ', pcright, 'topc: ', pctop, 'bottom: ', pcbottom, )
    // }


    if(((pleft < pcright) && (pright > pcleft) && (pbottom > pctop) && (ptop < pcbottom))){
      collision = true;
    }
    // if(!collision){
    //   playableCharacter.falls  = true
    // }

    return collision;

}

function minotaurCollisionDetection(characterPositions, characterWidth, characterHeight){
    const playableCharacter = allPcs[0]
    const mrMinotaur = Minotaur.all[0]

    var minLeft = mrMinotaur.x;
    var minRight =  mrMinotaur.x + mrMinotaur.width;//platform's left + platform's width
    var minTop = mrMinotaur.y; //platform's top (y)
    var minBottom =  mrMinotaur.y + mrMinotaur.height; //platform's bottom + (platform.height)
    var pcleft = characterPositions[0];
    var pcright = (characterPositions[0]) + (characterWidth);
    var pctop = characterPositions[1]; // character to top of canvas
    var pcbottom= pctop + characterHeight;
    var collision = false;

    //checking - lets not delete this one. Will be easy for future development
    if(window.testing){

        // console.log('Platform: ')
        // console.log('left: ', minLeft, 'right: ', minRight, 'top: ', minTop, 'bottom: ', minBottom, )
        // console.log('Character: ')
        // console.log('left: ', pcleft, 'right: ', pcright, 'topc: ', pctop, 'bottom: ', pcbottom, )
    }


    if(((minLeft < pcright) && (minRight > pcleft) && (minBottom > pctop) && (minTop < pcbottom))){
      // console.log(minLeft, Minotaur.all[0].x)
      collision = true;
    }

    return collision;

}


//collision check for all of the platforms
function collisionCheckAllPlatforms(){
  const playableCharacter = allPcs[0]
  playableCharacter.falls = true
    for(platform of allPlatforms){
        collisionTestMethod(platform);
    }
}

//collision detection for all the items
function collisionCheckAllItems(){
    for(item of allItems){
        collisionTestMethod(item);
    }
}
