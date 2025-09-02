const kidRiddles = [
    { riddle: "What has to be broken before you can use it?", answer: "An egg" },
    { riddle: "What is full of holes but still holds water?", answer: "A sponge" },
    { riddle: "What goes up but never comes down?", answer: "Your age" },
    { riddle: "What has hands but can't clap?", answer: "A clock" },
    { riddle: "What has teeth but cannot bite?", answer: "A comb" },
    { riddle: "What can you catch but not throw?", answer: "A cold" },
    { riddle: "What has a face but no eyes?", answer: "A clock" },
    { riddle: "What gets wetter as it dries?", answer: "A towel" },
    { riddle: "What has a neck but no head?", answer: "A bottle" },
    { riddle: "What can travel around the world while staying in a corner?", answer: "A stamp" },
    { riddle: "What has ears but cannot hear?", answer: "Corn" },
    { riddle: "What has a thumb and four fingers but is not alive?", answer: "A glove" },
    { riddle: "What goes around the world but stays in a corner?", answer: "A stamp" },
    { riddle: "What has legs but doesn't walk?", answer: "A table" },
    { riddle: "What can you keep after giving to someone?", answer: "Your word" },
    { riddle: "What has a bed but never sleeps?", answer: "A river" },
    { riddle: "What has cities but no houses?", answer: "A map" },
    { riddle: "What has wings but cannot fly?", answer: "A penguin" },
    { riddle: "What is black when you buy it, red when you use it, and gray when you throw it away?", answer: "Charcoal" },
    { riddle: "What has a bark but no bite?", answer: "A tree" },
    { riddle: "What can you break without touching it?", answer: "A promise" },
    { riddle: "What has a head and a tail but no body?", answer: "A coin" },
    { riddle: "What runs but never walks?", answer: "Water" },
    { riddle: "What has four wheels and flies?", answer: "A garbage truck" },
    { riddle: "What is always coming but never arrives?", answer: "Tomorrow" },
    { riddle: "What has a bottom at the top?", answer: "Your legs" },
    { riddle: "What can be cracked but never broken?", answer: "A joke" },
    { riddle: "What gets bigger the more you take away?", answer: "A hole" },
    { riddle: "What has a ring but no finger?", answer: "A telephone" },
    { riddle: "What can fill a room but takes up no space?", answer: "Light" },
    { riddle: "What has branches but no fruit, trunk or leaves?", answer: "A bank" },
    { riddle: "What is always hungry and will die if not fed?", answer: "Fire" },
    { riddle: "What can you serve but never eat?", answer: "A tennis ball" },
    { riddle: "What has a mouth but never eats?", answer: "A river" },
    { riddle: "What is tall when young and short when old?", answer: "A candle" },
    { riddle: "What has one eye but cannot see?", answer: "A needle" },
    { riddle: "What is white when dirty and black when clean?", answer: "A chalkboard" },
    { riddle: "What has keys but no locks?", answer: "A piano" },
    { riddle: "What belongs to you but others use it more?", answer: "Your name" },
    { riddle: "What can you hold without touching?", answer: "Your breath" },
    { riddle: "What has a golden head and a golden tail but no golden body?", answer: "A penny" },
    { riddle: "What is light as a feather but even the strongest man can't hold it for long?", answer: "Breath" },
    { riddle: "What starts with T, ends with T, and has T in it?", answer: "A teapot" },
    { riddle: "What has many teeth but cannot bite?", answer: "A zipper" },
    { riddle: "What can be opened but never closed?", answer: "An egg" },
    { riddle: "What has a heart that doesn't beat?", answer: "An artichoke" },
    { riddle: "What can you put in a bucket to make it lighter?", answer: "A hole" },
    { riddle: "What goes through cities and fields but never moves?", answer: "A road" },
    { riddle: "What has words but never speaks?", answer: "A book" },
    { riddle: "What is round on both sides but high in the middle?", answer: "Ohio" },
    { riddle: "What has a foot but no legs?", answer: "A snail" },
    { riddle: "What can you touch but not see?", answer: "Your heart" },
    { riddle: "What has stripes but isn't a zebra?", answer: "A tiger" },
    { riddle: "What is full of holes but can hold water?", answer: "A sponge" },
    { riddle: "What has fur but isn't an animal?", answer: "A coat" },
    { riddle: "What can run but has no legs?", answer: "A nose" },
    { riddle: "What has a crown but isn't a king?", answer: "A tooth" },
    { riddle: "What flies without wings?", answer: "Time" },
    { riddle: "What can be hot or cold, wet or dry?", answer: "Weather" },
    { riddle: "What has spots but isn't sick?", answer: "A leopard" },
    { riddle: "What can swim but has no fins?", answer: "A person" },
    { riddle: "What has seeds but isn't a plant?", answer: "Bread" },
    { riddle: "What can be folded but isn't paper?", answer: "Clothes" },
    { riddle: "What has a shell but isn't a turtle?", answer: "An egg" },
    { riddle: "What can melt but isn't ice?", answer: "Chocolate" },
    { riddle: "What has whiskers but isn't a cat?", answer: "A walrus" },
    { riddle: "What can bounce but isn't a ball?", answer: "A person" },
    { riddle: "What has feathers but can't fly?", answer: "A pillow" },
    { riddle: "What can be sharp but isn't a knife?", answer: "Your mind" },
    { riddle: "What has bubbles but isn't soap?", answer: "Soda" },
    { riddle: "What can be loud but isn't music?", answer: "Thunder" },
    { riddle: "What has pockets but isn't clothes?", answer: "A pool table" },
    { riddle: "What can be sweet but isn't candy?", answer: "A smile" },
    { riddle: "What has wheels but isn't a car?", answer: "A bicycle" },
    { riddle: "What can be cold but isn't ice?", answer: "A person" },
    { riddle: "What has strings but isn't a puppet?", answer: "A guitar" },
    { riddle: "What can be deep but isn't water?", answer: "Thoughts" },
    { riddle: "What has scales but isn't a fish?", answer: "A snake" },
    { riddle: "What can be bright but isn't the sun?", answer: "A light bulb" },
    { riddle: "What has claws but isn't a cat?", answer: "A crab" },
    { riddle: "What can be smooth but isn't silk?", answer: "Glass" },
    { riddle: "What has horns but isn't a bull?", answer: "A car" },
    { riddle: "What can be rough but isn't sandpaper?", answer: "The ocean" },
    { riddle: "What has patterns but isn't fabric?", answer: "A snake" },
    { riddle: "What can be twisted but isn't rope?", answer: "Hair" },
    { riddle: "What has grooves but isn't a record?", answer: "A tire" },
    { riddle: "What can be curved but isn't a circle?", answer: "A banana" },
    { riddle: "What has layers but isn't an onion?", answer: "A cake" },
    { riddle: "What can be narrow but isn't a hallway?", answer: "A path" },
    { riddle: "What has corners but isn't a box?", answer: "A room" },
    { riddle: "What can be wide but isn't a river?", answer: "A smile" },
    { riddle: "What has edges but isn't a knife?", answer: "A table" },
    { riddle: "What can be long but isn't a rope?", answer: "Time" },
    { riddle: "What has points but isn't a star?", answer: "A pencil" },
    { riddle: "What can be short but isn't a person?", answer: "A story" },
    { riddle: "What has holes but isn't cheese?", answer: "A net" },
    { riddle: "What can be empty but isn't a box?", answer: "A promise" },
    { riddle: "What has sides but isn't a shape?", answer: "A coin" },
    { riddle: "What can be full but isn't a cup?", answer: "The moon" },
    { riddle: "What has an end but isn't a story?", answer: "A rope" },
    { riddle: "What can be new but isn't clothes?", answer: "A day" },
    { riddle: "What has a beginning but isn't a book?", answer: "Time" },
    { riddle: "What can be old but isn't a person?", answer: "A building" },
    { riddle: "What has a middle but isn't a sandwich?", answer: "A word" }
];

const teenRiddles = [
    { riddle: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?", answer: "Fire" },
    { riddle: "The more you take, the more you leave behind. What am I?", answer: "Footsteps" },
    { riddle: "What can travel around the world while staying in a corner?", answer: "A stamp" },
    { riddle: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", answer: "A map" },
    { riddle: "What is seen in the middle of March and April that can't be seen at the beginning or end of either month?", answer: "The letter R" },
    { riddle: "What goes up and down but doesn't move?", answer: "A staircase" },
    { riddle: "If you're running in a race and you pass the person in second place, what place are you in?", answer: "Second place" },
    { riddle: "I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?", answer: "Fire" },
    { riddle: "What has one eye but can't see?", answer: "A needle" },
    { riddle: "What is black when you buy it, red when you use it, and gray when you throw it away?", answer: "Charcoal" },
    { riddle: "I'm tall when I'm young, and I'm short when I'm old. What am I?", answer: "A candle" },
    { riddle: "What month of the year has 28 days?", answer: "All of them" },
    { riddle: "What is full of holes but still holds water?", answer: "A sponge" },
    { riddle: "What question can you never answer yes to?", answer: "Are you asleep yet?" },
    { riddle: "What is always in front of you but can't be seen?", answer: "The future" },
    { riddle: "There's a one-story house in which everything is yellow. What color are the stairs?", answer: "There aren't any—it's a one-story house" },
    { riddle: "What can you break, even if you never pick it up or touch it?", answer: "A promise" },
    { riddle: "What goes up but never comes down?", answer: "Your age" },
    { riddle: "A man who was outside in the rain without an umbrella or hat didn't get a single hair on his head wet. Why?", answer: "He was bald" },
    { riddle: "What gets wet while drying?", answer: "A towel" },
    { riddle: "You see a boat filled with people, yet there isn't a single person on board. How is that possible?", answer: "All the people were married" },
    { riddle: "You walk into a room that contains a match, a kerosene lamp, a candle and a fireplace. What would you light first?", answer: "The match" },
    { riddle: "A man dies of old age on his 25 birthday. How is this possible?", answer: "He was born on February 29" },
    { riddle: "I have branches, but no fruit, trunk or leaves. What am I?", answer: "A bank" },
    { riddle: "What can't talk but will reply when spoken to?", answer: "An echo" },
    { riddle: "The more of this there is, the less you see. What is it?", answer: "Darkness" },
    { riddle: "David's parents have three sons: Snap, Crackle, and what's the name of the third son?", answer: "David" },
    { riddle: "I follow you all the time and copy your every move, but you can't touch me or catch me. What am I?", answer: "Your shadow" },
    { riddle: "What has many keys but can't open a single lock?", answer: "A piano" },
    { riddle: "What can you hold in your left hand but not in your right?", answer: "Your right elbow" },
    { riddle: "What is black when it's clean and white when it's dirty?", answer: "A chalkboard" },
    { riddle: "What gets bigger when more is taken away from it?", answer: "A hole" },
    { riddle: "I'm light as a feather, yet the strongest person can't hold me for five minutes. What am I?", answer: "Your breath" },
    { riddle: "I'm found in socks, scarves and mittens; and often in the paws of playful kittens. What am I?", answer: "Yarn" },
    { riddle: "Where does today come before yesterday?", answer: "The dictionary" },
    { riddle: "What invention lets you look right through a wall?", answer: "A window" },
    { riddle: "If you've got me, you want to share me; if you share me, you haven't kept me. What am I?", answer: "A secret" },
    { riddle: "What can't be put in a saucepan?", answer: "Its lid" },
    { riddle: "What goes on four legs in the morning, on two legs at noon, and on three legs in the evening?", answer: "A human" },
    { riddle: "What has a head and a tail but no body?", answer: "A coin" },
    { riddle: "Where does one wall meet the other wall?", answer: "On the corner" },
    { riddle: "What building has the most stories?", answer: "The library" },
    { riddle: "What tastes better than it smells?", answer: "Your tongue" },
    { riddle: "What has 13 hearts, but no other organs?", answer: "A deck of cards" },
    { riddle: "It belongs to you, but other people use it more than you do. What is it?", answer: "Your name" },
    { riddle: "What has lots of eyes, but can't see?", answer: "A potato" },
    { riddle: "What has one head, one foot and four legs?", answer: "A bed" },
    { riddle: "What can you catch, but not throw?", answer: "A cold" },
    { riddle: "What kind of band never plays music?", answer: "A rubber band" },
    { riddle: "What has many teeth, but can't bite?", answer: "A saw" },
    { riddle: "What is cut on a table, but is never eaten?", answer: "A deck of cards" },
    { riddle: "What has words, but never speaks?", answer: "A book" },
    { riddle: "What runs all around a backyard, yet never moves?", answer: "A fence" },
    { riddle: "What can travel all around the world without leaving its corner?", answer: "A stamp" },
    { riddle: "What has a thumb and four fingers, but is not a hand?", answer: "A glove" },
    { riddle: "What has a head and a tail but no body?", answer: "A coin" },
    { riddle: "Where can you find cities, towns, shops, and streets but no people?", answer: "A map" },
    { riddle: "What breaks but never falls, and what falls but never breaks?", answer: "Day and night" },
    { riddle: "What goes through cities and fields, but never moves?", answer: "A road" },
    { riddle: "I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?", answer: "Fire" },
    { riddle: "What room do ghosts avoid?", answer: "The living room" },
    { riddle: "What is so fragile that saying its name breaks it?", answer: "Silence" },
    { riddle: "What can fill a room but takes up no space?", answer: "Light" },
    { riddle: "If you drop me I'm sure to crack, but give me a smile and I'll always smile back. What am I?", answer: "A mirror" },
    { riddle: "The more you take away from me, the bigger I become. What am I?", answer: "A hole" },
    { riddle: "What can be cracked, made, told, and played?", answer: "A joke" },
    { riddle: "What has a forest but no trees, cities but no people, and rivers but no water?", answer: "A map" },
    { riddle: "I have lakes with no water, mountains with no stone and cities with no buildings. What am I?", answer: "A map" },
    { riddle: "What is always coming but never arrives?", answer: "Tomorrow" },
    { riddle: "What can be long or short; grown or bought; painted or left bare; round or square?", answer: "Fingernails" },
    { riddle: "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?", answer: "Heroine" },
    { riddle: "What is 3/7 chicken, 2/3 cat and 2/4 goat?", answer: "Chicago" },
    { riddle: "I am a word of letters three; add two and fewer there will be. What word am I?", answer: "Few" },
    { riddle: "What time is it when an elephant sits on a fence?", answer: "Time to fix the fence" },
    { riddle: "What gets sharper the more you use it?", answer: "Your brain" },
    { riddle: "What has a forest but no trees, cities but no people, water but no fish?", answer: "A map" },
    { riddle: "What can be stolen, mistaken, or altered, yet never leaves you your entire life?", answer: "Your identity" },
    { riddle: "What is always late and never present now?", answer: "Later" },
    { riddle: "I can be long, or I can be short. I can be grown, and I can be bought. I can be painted, or left bare. I can be round, or square. What am I?", answer: "Fingernails" },
    { riddle: "What begins with an 'e' and only contains one letter?", answer: "An envelope" },
    { riddle: "A word I know, six letters it contains, remove one letter and 12 remains. What is it?", answer: "Dozens" },
    { riddle: "What would you find in the middle of Toronto?", answer: "The letter 'o'" },
    { riddle: "You see me once in June, twice in November and not at all in May. What am I?", answer: "The letter 'e'" },
    { riddle: "Two in a corner, one in a room, zero in a house, but one in a shelter. What is it?", answer: "The letter 'r'" },
    { riddle: "I am an odd number. Take away a letter and I become even. What number am I?", answer: "Seven" },
    { riddle: "If two's company, and three's a crowd, what are four and five?", answer: "Nine" },
    { riddle: "What five-letter word becomes shorter when you add two letters to it?", answer: "Short" },
    { riddle: "What begins with an 'e' and only contains one letter?", answer: "An envelope" },
    { riddle: "A man says, 'Brothers and sisters, I have none. But this man's father is my father's son.' Who is the man pointing at?", answer: "His son" },
    { riddle: "What disappears as soon as you say its name?", answer: "Silence" },
    { riddle: "How many letters are in the English alphabet?", answer: "There are 11 letters in the words 'the English alphabet'" },
    { riddle: "What occurs once in a minute, twice in a moment, and never in a thousand years?", answer: "The letter 'M'" },
    { riddle: "What word is pronounced the same if you take away four of its five letters?", answer: "Queue" },
    { riddle: "What is the end of everything?", answer: "The letter 'g'" },
    { riddle: "What word contains 26 letters but has only three syllables?", answer: "Alphabet" },
    { riddle: "Forward I am heavy, but backward I am not. What am I?", answer: "The word 'ton'" },
    { riddle: "What 4-letter word can be written forward, backward or upside down, and can still be read from left to right?", answer: "NOON" },
    { riddle: "First you eat me, then you get eaten. What am I?", answer: "A fishhook" },
    { riddle: "What has cities, but no houses; forests, but no trees; and water, but no fish?", answer: "A map" },
    { riddle: "I turn once, what is out will not get in. I turn again, what is in will not get out. What am I?", answer: "A key" },
    { riddle: "People make me, save me, change me, raise me. What am I?", answer: "Money" },
    { riddle: "What breaks but never falls, and what falls but never breaks?", answer: "Day and night" },
    { riddle: "What goes up and down but doesn't move?", answer: "A staircase" },
    { riddle: "I have keys but no locks. I have space but no room. You can enter, but you can't go outside. What am I?", answer: "A keyboard" }
];

const proRiddles = [
    { riddle: "I speak without a mouth and hear without ears. I have no body, but come alive with the wind. What am I?", answer: "An echo" },
    { riddle: "You measure my life in hours and I serve you by expiring. I'm quick when I'm thin and slow when I'm fat. The wind is my enemy.", answer: "A candle" },
    { riddle: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", answer: "A map" },
    { riddle: "What is seen in the middle of March and April that can't be seen at the beginning or end of either month?", answer: "The letter 'R'" },
    { riddle: "You see a boat filled with people. It has not sunk, but when you look again you don't see a single person on the boat. Why?", answer: "All the people were married" },
    { riddle: "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman?", answer: "Heroine" },
    { riddle: "What is so fragile that saying its name breaks it?", answer: "Silence" },
    { riddle: "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?", answer: "A river" },
    { riddle: "Speaking of rivers, a man calls his dog from the opposite side of the river. The dog crosses the river without getting wet, and without using a bridge or boat. How?", answer: "The river was frozen" },
    { riddle: "What can fill a room but takes up no space?", answer: "Light" },
    { riddle: "If you drop me I'm sure to crack, but give me a smile and I'll always smile back. What am I?", answer: "A mirror" },
    { riddle: "The more you take, the more you leave behind. What are they?", answer: "Footsteps" },
    { riddle: "I turn once, what is out will not get in. I turn again, what is in will not get out. What am I?", answer: "A key" },
    { riddle: "People make me, save me, change me, raise me. What am I?", answer: "Money" },
    { riddle: "What breaks but never falls, and what falls but never breaks?", answer: "Day and night" },
    { riddle: "A woman shoots her husband, then holds him underwater for five minutes. Next, she hangs him. Right after, they enjoy a lovely dinner. Explain.", answer: "She took a picture of him and developed it" },
    { riddle: "I can be cracked, I can be made. I can be told, I can be played. What am I?", answer: "A joke" },
    { riddle: "A man lives on the 20th floor of an apartment building. Every morning he takes the elevator down to the ground floor. When he comes home, he takes the elevator to the 10th floor and walks the rest of the way... except on rainy days, when he takes the elevator all the way to the 20th floor. Why?", answer: "He's too short to reach the button for the 20th floor unless he has an umbrella" },
    { riddle: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?", answer: "Fire" },
    { riddle: "The person who makes it, sells it. The person who buys it never uses it. The person who uses it doesn't know they're using it. What is it?", answer: "A coffin" },
    { riddle: "A man was driving his truck. His lights were not on. The moon was not out. Up ahead, a woman was crossing the street. How did he see her?", answer: "It was daytime" },
    { riddle: "What gets wet while drying?", answer: "A towel" },
    { riddle: "What can travel around the world while staying in a corner?", answer: "A stamp" },
    { riddle: "I have keys but no locks. I have space but no room. You can enter, but you can't go outside. What am I?", answer: "A keyboard" },
    { riddle: "What is black when you buy it, red when you use it, and gray when you throw it away?", answer: "Charcoal" },
    { riddle: "A woman shoots her husband. Then she holds him underwater for over 5 minutes. Finally, she hangs him. But 5 minutes later they both go out together and enjoy a wonderful dinner together. How can this be?", answer: "The woman was a photographer. She shot a picture of her husband, developed it, and hung it up to dry" },
    { riddle: "What disappears as soon as you say its name?", answer: "Silence" },
    { riddle: "I'm tall when I'm young, and I'm short when I'm old. What am I?", answer: "A candle" },
    { riddle: "David's father has three sons: Snap, Crackle, and _____?", answer: "David" },
    { riddle: "I follow you all the time and copy your every move, but you can't touch me or catch me. What am I?", answer: "Your shadow" },
    { riddle: "What has many keys but can't open a single lock?", answer: "A piano" },
    { riddle: "What can you hold in your left hand but not in your right?", answer: "Your right elbow" },
    { riddle: "What is black when it's clean and white when it's dirty?", answer: "A chalkboard" },
    { riddle: "What gets bigger when more is taken away from it?", answer: "A hole" },
    { riddle: "I'm light as a feather, yet the strongest person can't hold me for five minutes. What am I?", answer: "Your breath" },
    { riddle: "Where does today come before yesterday?", answer: "The dictionary" },
    { riddle: "What invention lets you look right through a wall?", answer: "A window" },
    { riddle: "If you've got me, you want to share me; if you share me, you haven't kept me. What am I?", answer: "A secret" },
    { riddle: "What can't be put in a saucepan?", answer: "Its lid" },
    { riddle: "What goes on four legs in the morning, on two legs at noon, and on three legs in the evening?", answer: "A human" },
    { riddle: "What has a head and a tail but no body?", answer: "A coin" },
    { riddle: "Where does one wall meet the other wall?", answer: "On the corner" },
    { riddle: "What building has the most stories?", answer: "The library" },
    { riddle: "What tastes better than it smells?", answer: "Your tongue" },
    { riddle: "What has 13 hearts, but no other organs?", answer: "A deck of cards" },
    { riddle: "It belongs to you, but other people use it more than you do. What is it?", answer: "Your name" },
    { riddle: "What has lots of eyes, but can't see?", answer: "A potato" },
    { riddle: "What has one head, one foot and four legs?", answer: "A bed" },
    { riddle: "What can you catch, but not throw?", answer: "A cold" },
    { riddle: "What kind of band never plays music?", answer: "A rubber band" },
    { riddle: "What has many teeth, but can't bite?", answer: "A saw" },
    { riddle: "What is cut on a table, but is never eaten?", answer: "A deck of cards" },
    { riddle: "What has words, but never speaks?", answer: "A book" },
    { riddle: "What runs all around a backyard, yet never moves?", answer: "A fence" },
    { riddle: "Two fathers and two sons went on a fishing trip. They caught only three fish. Every man had one fish to take home. How is this possible?", answer: "There were only three people fishing. There was one father, his son, and his son's son. This means there were two fathers and two sons, since one man is a father and a son" },
    { riddle: "A cowboy rode into town on Friday, stayed three days, and left on Friday. How?", answer: "His horse's name was Friday" },
    { riddle: "I have branches, yet I have no leaves, no trunk and no fruit. What am I?", answer: "A bank" },
    { riddle: "What can't talk but will reply when spoken to?", answer: "An echo" },
    { riddle: "The more of this there is, the less you see. What is it?", answer: "Darkness" },
    { riddle: "What word becomes shorter when you add two letters to it?", answer: "Short" },
    { riddle: "I'm found in socks, scarves and mittens; and often in the paws of playful kittens. What am I?", answer: "Yarn" },
    { riddle: "How many letters are in the English alphabet?", answer: "There are 11 letters in 'the English alphabet'" },
    { riddle: "What occurs once in a minute, twice in a moment, and never in a thousand years?", answer: "The letter 'M'" },
    { riddle: "What word is pronounced the same if you take away four of its five letters?", answer: "Queue" },
    { riddle: "What is the end of everything?", answer: "The letter 'G'" },
    { riddle: "What word contains 26 letters but has only three syllables?", answer: "Alphabet" },
    { riddle: "Forward I am heavy, but backward I am not. What am I?", answer: "The word 'ton'" },
    { riddle: "What 4-letter word can be written forward, backward or upside down, and can still be read from left to right?", answer: "NOON" },
    { riddle: "First you eat me, then you get eaten. What am I?", answer: "A fishhook" },
    { riddle: "What has cities, but no houses; forests, but no trees; and water, but no fish?", answer: "A map" },
    { riddle: "I am a word of letters three; add two and fewer there will be. What word am I?", answer: "Few" },
    { riddle: "What time is it when an elephant sits on a fence?", answer: "Time to fix the fence" },
    { riddle: "What gets sharper the more you use it?", answer: "Your brain" },
    { riddle: "What can be stolen, mistaken, or altered, yet never leaves you your entire life?", answer: "Your identity" },
    { riddle: "What is always late and never present now?", answer: "Later" },
    { riddle: "I can be long, or I can be short. I can be grown, and I can be bought. I can be painted, or left bare. I can be round, or square. What am I?", answer: "Fingernails" },
    { riddle: "What begins with an 'e' and only contains one letter?", answer: "An envelope" },
    { riddle: "A word I know, six letters it contains, remove one letter and 12 remains. What is it?", answer: "Dozens" },
    { riddle: "What would you find in the middle of Toronto?", answer: "The letter 'O'" },
    { riddle: "You see me once in June, twice in November and not at all in May. What am I?", answer: "The letter 'E'" },
    { riddle: "Two in a corner, one in a room, zero in a house, but one in a shelter. What is it?", answer: "The letter 'R'" },
    { riddle: "I am an odd number. Take away a letter and I become even. What number am I?", answer: "Seven" },
    { riddle: "If two's company, and three's a crowd, what are four and five?", answer: "Nine" },
    { riddle: "What five-letter word becomes shorter when you add two letters to it?", answer: "Short" },
    { riddle: "A man says, 'Brothers and sisters, I have none. But this man's father is my father's son.' Who is the man pointing at?", answer: "His son" },
    { riddle: "What has a forest with no trees, cities with no people, and water with no fish?", answer: "A map" },
    { riddle: "What English word has three consecutive double letters?", answer: "Bookkeeper" },
    { riddle: "What comes next in this sequence? OTTFFSS", answer: "E (Eight - One, Two, Three, Four, Five, Six, Seven, Eight)" },
    { riddle: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost everybody. What am I?", answer: "Pencil lead" },
    { riddle: "What has one eye, but can't see?", answer: "A needle" },
    { riddle: "What starts with a P, ends with an E, and has thousands of letters?", answer: "A post office" },
    { riddle: "What has hands, but can not clap?", answer: "A clock" },
    { riddle: "What can you keep after giving to someone?", answer: "Your word" },
    { riddle: "I have lakes with no water, mountains with no stone and cities with no buildings. What am I?", answer: "A map" },
    { riddle: "Poor people have it. Rich people need it. If you eat it you die. What is it?", answer: "Nothing" },
    { riddle: "What goes through cities and fields, but never moves?", answer: "A road" },
    { riddle: "What is always coming but never arrives?", answer: "Tomorrow" },
    { riddle: "I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?", answer: "Fire" },
    { riddle: "What room do ghosts avoid?", answer: "The living room" },
    { riddle: "What has four wheels and flies?", answer: "A garbage truck" },
    { riddle: "I am always in risk, yet never in danger. I am present in the past, yet absent from the present. What am I?", answer: "The letter 'R'" },
    { riddle: "What belongs to you, but other people use it more than you?", answer: "Your name" },
    { riddle: "What gets wetter the more it dries?", answer: "A towel" },
    { riddle: "What has a thumb and four fingers, but is not a hand?", answer: "A glove" },
    { riddle: "Where can you find cities, towns, shops, and streets but no people?", answer: "A map" },
    { riddle: "What is 3/7 chicken, 2/3 cat and 2/4 goat?", answer: "Chicago" },
    { riddle: "What has a neck but no head?", answer: "A bottle" },
    { riddle: "The eight of us go forth not back to protect our king from a foe's attack. What are we?", answer: "Chess pawns" },
    { riddle: "What has many needles, but doesn't sew?", answer: "A Christmas tree" }
];

let currentRiddleIndex = 0;
let currentDifficulty = "kid";
let usedRiddles = [];
let riddleCounter = 1;

const riddleText = document.querySelector(".riddle-text");
const answerText = document.querySelector(".answer");
const revealBtn = document.getElementById("reveal-btn");
const nextBtn = document.getElementById("next-btn");
const riddleNumber = document.querySelector(".riddle-number");
const difficultySelect = document.getElementById("difficulty-select");

difficultySelect.addEventListener("change", (event) => {
    currentDifficulty = event.target.value;
    usedRiddles = [];
    riddleCounter = 1;
    loadRandomRiddle();
});

revealBtn.addEventListener("click", () => {
    answerText.style.display = "block";
});

nextBtn.addEventListener("click", () => {
    riddleCounter++;
    loadRandomRiddle();
});

function getRiddlesByDifficulty() {
    switch (currentDifficulty) {
        case "kid":
            return kidRiddles;
        case "teen":
            return teenRiddles;
        case "pro":
            return proRiddles;
        default:
            return kidRiddles;
    }
}

function getRandomRiddleIndex() {
    const riddles = getRiddlesByDifficulty();
    
    // If all riddles have been used, reset the used riddles array
    if (usedRiddles.length >= riddles.length) {
        usedRiddles = [];
    }
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * riddles.length);
    } while (usedRiddles.includes(randomIndex));
    
    usedRiddles.push(randomIndex);
    return randomIndex;
}

function loadRandomRiddle() {
    const riddles = getRiddlesByDifficulty();
    currentRiddleIndex = getRandomRiddleIndex();
    const riddle = riddles[currentRiddleIndex];
    
    riddleText.textContent = riddle.riddle;
    answerText.textContent = riddle.answer;
    answerText.style.display = "none";
    riddleNumber.textContent = `Riddie #${riddleCounter}`;
}

loadRandomRiddle();
