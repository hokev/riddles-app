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

const sexyRiddles = [
    { riddle: "What's long, hard, and has cum in it?", answer: "A cucumber" },
    { riddle: "I'm spread before I'm eaten. Your tongue gets me off. People sometimes lick my nuts. What am I?", answer: "Peanut butter" },
    { riddle: "What's white, sticky, and better to spit than to swallow?", answer: "Toothpaste" },
    { riddle: "I start with a 'v' and every woman has one. She can even use me to get what she wants. What am I?", answer: "A voice" },
    { riddle: "What's at least 6 inches long, goes in your mouth, and is more fun when it vibrates?", answer: "A toothbrush" },
    { riddle: "What do you wrap your mouth around every morning and night that leaves you feeling refreshed?", answer: "A toothbrush" },
    { riddle: "I'm great for protection. You use your fingers to get me off. What am I?", answer: "A glove" },
    { riddle: "What's messy and can be really annoying when it's not handled properly?", answer: "Hair" },
    { riddle: "What's round and bouncy and rhymes with 'hit'?", answer: "Pit" },
    { riddle: "What do men keep in their pants that their partners sometimes blow?", answer: "Money" },
    { riddle: "What's made of rubber, handed out at some schools, and exists to prevent mistakes?", answer: "An eraser" },
    { riddle: "What's most useful when it's long and hard?", answer: "An education" },
    { riddle: "What gets longer if pulled, fits snugly between breasts, slides neatly into a hole, chokes people when used incorrectly, and works well when jerked?", answer: "A seatbelt" },
    { riddle: "What's the difference between your job and your wife? After 5 years, your job still sucks.", answer: "Nothing - it's a joke setup" },
    { riddle: "I'm something that can be blown, but I'm not a bubble. I can be popped, but I'm not a balloon. What am I?", answer: "A tire" },
    { riddle: "What did the toaster say to the slice of bread?", answer: "I want you inside me" },
    { riddle: "What has a head, a shaft, is shaped like a stick, and is long and hard?", answer: "A golf club" },
    { riddle: "What's soft and wet on the inside while hard and hairy on the outside?", answer: "A coconut" },
    { riddle: "What do you call a cheap circumcision?", answer: "A rip-off" },
    { riddle: "I have a stiff shaft and my tip penetrates. I come with a quiver. What am I?", answer: "An arrow" },
    { riddle: "What's long, pink, and makes women scream?", answer: "A flamingo" },
    { riddle: "What starts with 'f' and ends with 'uck'?", answer: "Firetruck" },
    { riddle: "What's a four-letter word that ends in 'k' and means the same as intercourse?", answer: "Talk" },
    { riddle: "What's six inches long, two inches wide, and makes everyone go crazy?", answer: "A $100 bill" },
    { riddle: "I go in hard, come out soft, and you blow me hard. What am I?", answer: "Gum" },
    { riddle: "What's the difference between a G-spot and a golf ball?", answer: "A guy will actually search for a golf ball" },
    { riddle: "What do you call a sleeping bull?", answer: "A bulldozer" },
    { riddle: "What do you call a fish wearing a crown?", answer: "A king fish" },
    { riddle: "What goes in hard and pink then comes out soft and sticky?", answer: "Bubblegum" },
    { riddle: "What's hairy on the outside, wet on the inside, begins with 'c', ends with 't', and rhymes with 'punt'?", answer: "Coconut" },
    { riddle: "What did the banana say to the vibrator?", answer: "Why are YOU shaking? She's going to eat me!" },
    { riddle: "You stick your poles inside me. You tie me down to get me up. I get wet before you do. What am I?", answer: "A tent" },
    { riddle: "What's something you can shake, rattle, and roll, but you shouldn't drop?", answer: "A baby" },
    { riddle: "What do you call a man with no arms and no legs laying in front of your door?", answer: "Matt" },
    { riddle: "What three-letter word starts with an 's' and ends with 'x' and is a synonym for intercourse?", answer: "Six" },
    { riddle: "What's warm, wet, and pink?", answer: "A pig in a hot tub" },
    { riddle: "I'm always hard when dry but smooth and soft when wet. What am I?", answer: "Soap" },
    { riddle: "What do you call a man who cries while pleasuring himself?", answer: "A tearjerker" },
    { riddle: "What's long and hard and full of semen?", answer: "A submarine" },
    { riddle: "What starts with 'P' and ends in 'orn'?", answer: "Popcorn" },
    { riddle: "What do you get when you cross a dick with a potato?", answer: "A dictator" },
    { riddle: "What do you call a cheap circumcision?", answer: "A rip-off" },
    { riddle: "What's another name for a vagina?", answer: "The box a penis comes in" },
    { riddle: "What do you call a lesbian dinosaur?", answer: "Lickalotopus" },
    { riddle: "What's 6 inches long and 2 inches wide and makes men act like fools?", answer: "Money" },
    { riddle: "What do you call a herd of cows masturbating?", answer: "Beef strokin' off" },
    { riddle: "What's the difference between a pickpocket and a peeping tom?", answer: "One snatches your watch, the other watches your snatch" },
    { riddle: "What did one tampon say to the other?", answer: "Nothing, they were both stuck up" },
    { riddle: "What do you call a gay dinosaur?", answer: "Megasoreass" },
    { riddle: "What's the difference between a tire and 365 used condoms?", answer: "One's a Goodyear, the other's a great year" },
    { riddle: "What do you call a dog with no legs?", answer: "It doesn't matter what you call him, he still won't come" },
    { riddle: "What's the difference between your wife and your job?", answer: "After five years, your job will still suck" },
    { riddle: "What do you call a cheap circumcision?", answer: "A rip-off" },
    { riddle: "What's the difference between a G-spot and a golf ball?", answer: "A guy will actually search for a golf ball" },
    { riddle: "What did the penis say to the condom?", answer: "Cover me, I'm going in!" },
    { riddle: "What do you call a masturbating cow?", answer: "Beef stroganoff" },
    { riddle: "What's the difference between a Catholic priest and a zit?", answer: "A zit will wait until you're twelve before it comes on your face" },
    { riddle: "What do you call a virgin lying on a waterbed?", answer: "A cherry float" },
    { riddle: "What's the difference between a circus and a strip club?", answer: "A circus is a cunning array of stunts" },
    { riddle: "What do you call a man with a rubber toe?", answer: "Roberto" },
    { riddle: "What do you call a woman who can't make sandwiches?", answer: "Single" },
    { riddle: "What's the difference between a hockey player and a hippie chick?", answer: "The hockey player takes a shower after three periods" },
    { riddle: "What do you call a sleeping bull?", answer: "A bulldozer" },
    { riddle: "What's worse than waking up at a party and finding a penis drawn on your face?", answer: "Finding out it was traced" },
    { riddle: "What do you call a fake noodle?", answer: "An impasta" },
    { riddle: "What's the difference between a blonde and a washing machine?", answer: "The washing machine doesn't follow you around after you dump a load in it" },
    { riddle: "What do you call a guy with no arms and no legs in the water?", answer: "Bob" },
    { riddle: "What's green and smells like pork?", answer: "Kermit's finger" },
    { riddle: "What do you call a fish with no eyes?", answer: "Fsh" },
    { riddle: "What's the difference between a BMW and a porcupine?", answer: "A porcupine has the pricks on the outside" },
    { riddle: "What do you call a cow with no legs?", answer: "Ground beef" },
    { riddle: "What's the difference between a genealogist and a gynecologist?", answer: "A genealogist looks up the family tree, a gynecologist looks up the family bush" },
    { riddle: "What do you call a bear with no teeth?", answer: "A gummy bear" },
    { riddle: "What's the difference between a lawyer and a herd of buffalo?", answer: "The lawyer charges more" },
    { riddle: "What do you call a pile of cats?", answer: "A meowtain" },
    { riddle: "What's red and bad for your teeth?", answer: "A brick" },
    { riddle: "What do you call a dinosaur that crashes his car?", answer: "Tyrannosaurus Wrecks" },
    { riddle: "What's the difference between a dirty bus stop and a lobster with breast implants?", answer: "One is a crusty bus station and the other is a busty crustacean" },
    { riddle: "What do you call a cow during an earthquake?", answer: "A milkshake" },
    { riddle: "What's the difference between a snowman and a snowwoman?", answer: "Snowballs" },
    { riddle: "What do you call a pig that does karate?", answer: "A pork chop" },
    { riddle: "What's orange and sounds like a parrot?", answer: "A carrot" },
    { riddle: "What do you call a sheep with no legs?", answer: "A cloud" },
    { riddle: "What's the difference between a cat and a comma?", answer: "A cat has claws at the end of paws, and a comma is a pause at the end of a clause" },
    { riddle: "What do you call a belt made of watches?", answer: "A waist of time" },
    { riddle: "What's the difference between a fish and a piano?", answer: "You can't tuna fish" },
    { riddle: "What do you call a nosy pepper?", answer: "Jalapeño business" },
    { riddle: "What's the difference between a hippo and a zippo?", answer: "One is really heavy, and the other is a little lighter" },
    { riddle: "What do you call a factory that makes okay products?", answer: "A satisfactory" },
    { riddle: "What's the difference between a well-dressed man on a bicycle and a poorly dressed man on a tricycle?", answer: "Attire" },
    { riddle: "What do you call a deer with no eyes?", answer: "No idea" },
    { riddle: "What's the difference between a duck and George Washington?", answer: "One has a bill on his face, the other has his face on a bill" },
    { riddle: "What do you call a deer with no eyes and no legs?", answer: "Still no idea" },
    { riddle: "What's the difference between a poorly dressed man on a bicycle and a well-dressed man on a tricycle?", answer: "Attire" },
    { riddle: "What do you call a sleeping bull?", answer: "A bulldozer" },
    { riddle: "What's the difference between a fish and a guitar?", answer: "You can't tuna fish" },
    { riddle: "What do you call a cow with two legs?", answer: "Lean beef" },
    { riddle: "What's the difference between a poorly dressed man and a tired dog?", answer: "One wears a whole suit, the other just pants" },
    { riddle: "What do you call a cow with all of its legs?", answer: "High steaks" },
    { riddle: "What's the difference between a cat and a complex sentence?", answer: "A cat has claws at the end of its paws, a complex sentence has a pause at the end of its clause" },
    { riddle: "What do you call a cow lying down?", answer: "Ground beef" },
    { riddle: "What's the difference between a joke and two dicks?", answer: "You can't take a joke" },
    { riddle: "What do you call a masturbating cow?", answer: "Beef strokin' off" },
    { riddle: "What's the difference between your mom and a washing machine?", answer: "When I dump my load in the washing machine, it doesn't call me the next day" }
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
        case "sexy":
            return sexyRiddles;
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
