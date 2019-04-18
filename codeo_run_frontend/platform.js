//please dont remove the comments . We can finalise, decide and then remove them all during refractor
class Platform extends StaticObject {

    constructor(name, img, width, height){
        super(img)
        this.name = name
        this.canvas = document.querySelector('#platforms');
        this.context = this.canvas.getContext('2d');
        this.x = this.canvas.width //left
        this.y = 220 //top
        
        this.width = width
        this.height = height
        //this.right = parseInt(parseFloat(this.x) + parseFloat(this.width))
        this.bottom = this.y + this.height
        this.infiniteScroll()
        allPlatforms.push(this)
        //Not sure whether the following function will be effective if we call here.Pls dont remove the comment, until we confirm
        //collisionTestMethod(this);
    }

    static choosePlatform(){

        let names = ['log', 'grass', 'ladderbar', 'floating_rock', 'ladder']
        let srcs = [`./assets/Platforms/log.png`, `./assets/Platforms/grass.png`, `./assets/Platforms/ladderbar.png`, `./assets/Platforms/floating_rock.png`, `./assets/Platforms/ladder.png` ]
        let widths = [250, 100, 200, 120, 75]
        let heights = [45, 45, 80, 80, 80]
        let choice = (Math.floor(Math.random() * names.length))
        let newPlatform = new Platform(names[choice], srcs[choice], widths[choice], heights[choice]);
        return newPlatform;
    }

    //lets write a method here to update the game element based on the collision

    //lets write a method to discard or delete the platforms that goes offscreen

    }



function renderPosition(platform){

    let positions = []
    positions.push(platform.x) //left
    positions.push(platform.y) //
    positions.push(platform.width + platform.x) //right
    positions.push(platform.bottom) //top
    return positions;
}

//the following is just a method to test whether our colloisionDetection mechanism works properly

function collisionTestMethod(platform){
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

    if((collisionDetection(pcPositions, pcWidth, pcHeight , renderPosition(platform))===true)){
        console.log("collision occurred");
        //debugger
    }
}
function collisionDetection(pcPositions, pcWidth, pcHeight, pPositions){
    var pleft = pPositions[0];
    //pPositions -> platform->left, bottom ,right, top
    //pcPositions -> playableCharacter ->left, bottom

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
    // for(platform of allPlatforms){
    //     collisionTestMethod(platform);
    // }

//we used this to test one single platform
//    for(let i =0; i < allPlatforms.length; i++){
//        if(i===0){
//        collisionTestMethod(allPlatforms[0]);
//        //console.log("got here")
//     //    console.log(allPlatforms[0])
//     //    console.log(allPcs[0])
//        }
}

