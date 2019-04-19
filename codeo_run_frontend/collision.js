

function renderPosition(object){

    let positions = []
    positions.push(object.x) //left
    positions.push(object.y) //
    positions.push(object.width + object.x) //right
    positions.push(object.bottom) //top
    return positions;
}

//the following is just a method to test whether our colloisionDetection mechanism works properly

function collisionTestMethod(object){
    const playableCharacter = allPcs[0]
    const pc = playableCharacter.element

    const pcPositions = playableCharacter.pcPositions

    const pcWidth = 128
    const pcHeight = 128

    //first technique of collision detection can be implemented by the following if statement.
    //check which of collisionDetection and collisionCheck methods work and implement accordingly
    // if((collisionCheck(pcPositions, pcWidth, pcHeight , renderPosition(platform))===true)){
    //     console.log("collision occurred");
    //     //debugger
    // }

    if((collisionDetection(pcPositions, pcWidth, pcHeight , renderPosition(object))===true)){
        if(object===item){
            console.log("collision occurred with an item");
        }
      
        if(object===platform){
            console.log("collision occurred with a platform")
        }
    }
}
function collisionDetection(pcPositions, pcWidth, pcHeight, pPositions){
    var pleft = pPositions[0];
    //pPositions -> object's positions->left, bottom ,right, top
    //pcPositions -> playableCharacter's positions ->left, bottom

    var pright =  (pPositions[2]);//platform's left + platform's width
    var ptop = pPositions[1]; //platform's top (y)
    var pbottom =  pPositions[3]; //platform's bottom + (platform.height)
    var pcleft = pcPositions[0];
    var pcright = (pcPositions[0]) + (pcWidth);
    var pctop = pcPositions[1]; // character to top of canvas
    var pcbottom= pctop + pcHeight;
    var collision = false;
    
        // console.log('Platform: ')
        // console.log('left: ', pleft, 'right: ', pright, 'top: ', ptop, 'bottom: ', pbottom, )
        // console.log('Character: ')
        // console.log('left: ', pcleft, 'right: ', pcright, 'topc: ', pctop, 'bottom: ', pcbottom, )


    //if the following collision detection doesnt work , lets check the other way round . The second if statement from now
    // if(((pright <= pcleft) || (pleft > pcright) || (pbottom <= pctop) || (ptop > pcbottom))){
    //     collision = true;
    // }
    if(window.testing){

        console.log('Platform: ')
        console.log('left: ', pleft, 'right: ', pright, 'top: ', ptop, 'bottom: ', pbottom, )
        console.log('Character: ')
        console.log('left: ', pcleft, 'right: ', pcright, 'topc: ', pctop, 'bottom: ', pcbottom, )
    }
    if(((pleft < pcright) && (pright > pcleft) && (pbottom > pctop) && (ptop < pcbottom))){
        	collision = true;
    }

    return collision;
    //debugger
}

    //The second technique followed to detect collision . Lets see which technique works the best and implement
    function collisionCheck(pcPositions, pcWidth, pcHeight, pPositions){
        //pcPositions, pcWidth, pcHeight, pPositions--> just following the same order so as not to get a mislead
        let characterX = pcPositions[0] //character's left
        let characterY = pcPositions[1] //character's bottom
        let characterWidth = pcWidth
        let characterHeight = pcHeight
        let platformX = pPositions[0] //platform's left
        let platformY = pPositions[1] //platform's bottom
        let platformWidth = pPositions[2] - pPositions[0]
        let platformHeight = pPositions[3] - pPositions[1]


        var vectorX = (characterX + (characterWidth/2)) - (platformX + (platformWidth/2));
        var vectorY = (characterY + (characterHeight/2)) - (platformY + (platformHeight/2));

        var halfWidths = (characterWidth/2) + (platformWidth/2);
        var halfHeights = (characterHeight/2) + (platformHeight/2);

        var collisionDirection = null;

        if(Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights){

            var offsetX = halfWidths - Math.abs(vectorX);
            var offsetY = halfHeights - Math.abs(vectorY);
            if(offsetX < offsetY){

                if (vectorX > 0){
                    collisionDirection = "collision occurred left";
                    characterX += offsetX;
                } else {
                    collisionDirection = "collision occurred right";
                    characterX -= offsetX;
                }

            } else {

                if (vectorY > 0){
                    collisionDirection = "collision occurred top";
                    characterY += offsetY;
                } else {
                    collisionDirection = "collision occurred bottom";
                    characterY -= offsetY;
                }

            }

        }

        return collisionDirection;

    }

const allPlatforms = [];

//collision check for all of the platforms
function collisionCheckAllPlatforms(){
    for(platform of allPlatforms){
        collisionTestMethod(platform);
    }

//we used this to test one single platform
//    for(let i =0; i < allPlatforms.length; i++){
//        if(i===0){
//        collisionTestMethod(allPlatforms[0]);
//        //console.log("got here")
//     //    console.log(allPlatforms[0])
//     //    console.log(allPcs[0])
//        }
//     }
}

function collisionCheckAllItems(){
    for(item of allItems){
        collisionTestMethod(item);
    }
}
