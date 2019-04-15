# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

texaspete = PlayableCharacter.new(name:"Texas Pete", health:100, points:0, life_time_points:0, x:100, y:100)
utahlarry = PlayableCharacter.new(name:"Utah Larry", health:100, points:0, life_time_points:0, x:100, y:100)

crazybob = NonPlayableCharacter.new(name:"Crazy Bob", x:500, y: 200, landscape_id:1)
wildbill = NonPlayableCharacter.new(name:"Wild Bill", x:800, y: 250, landscape_id:1)
angrysteven = NonPlayableCharacter.new(name:"Unhappy Patty", x:850, y: 220, landscape_id:1)
calamityjane = NonPlayableCharacter.new(name:"Calamity Jane", x:700, y: 15, landscape_id:10)

speedup = BonusItem.new(name:"speedup", x:800 , y:200, points:100, special:"", landscape_id:1)
health = BonusItem.new(name:"health", x:800 , y:200, points:50, health:50, special:"", landscape_id:1)
invulnarable = BonusItem.new(name:"invulnarable", x:800 , y:200, points:250, health: 0, special:"", landscape_id:1)
damage = BonusItem.new(name:"damage", x:800 , y:200, points:-100, health:-30, special:"", landscape_id:1)

fence = Landscape.new(name:"fence", x:800, y:200, landscape_id:1)
horse = Landscape.new(name:"horse", x:800, y:200, landscape_id:1)
cactus = Landscape.new(name:"cactus", x:800, y:200, landscape_id:1)