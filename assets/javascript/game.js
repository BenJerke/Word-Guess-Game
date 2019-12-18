
//if user presses a key, start the game.

//initialize global variables: 

//number of lives
var numlives = 5;

//guessed letters
var lettersGuessed = []

//word list array

var wordList = [
    "lake",
    "computer",
    "skill",
    "sector",
    "ad",
    "enthusiasm",
    "village",
    "health",
    "classroom",
    "promotion",
    "economics",
    "chest",
    "cancer",
    "wife",
    "control",
    "bedroom",
    "mom",
    "variation",
    "thing",
    "injury",
    "conclusion",
    "temperature",
    "diamond",
    "operation",
    "farmer",
    "meat",
    "tradition",
    "wedding",
    "potato",
    "passion",
    "history",
    "discussion",
    "wood",
    "guidance",
    "supermarket",
    "courage",
    "description",
    "ratio",
    "candidate",
    "storage",
    "recognition",
    "delivery",
    "language",
    "memory",
    "drama",
    "error",
    "awareness",
    "negotiation",
    "celebration",
    "dad",
    "hair",
    "mall",
    "revolution",
    "safety",
    "youth",
    "manufacturer",
    "criticism",
    "indication",
    "writing",
    "airport",
    "worker",
    "bath",
    "engine",
    "historian",
    "procedure",
    "poetry",
    "replacement",
    "examination",
    "percentage",
    "failure",
    "coffee",
    "situation",
    "emphasis",
    "meal",
    "understanding",
    "ear",
    "appearance",
    "cheek",
    "depth",
    "birthday",
    "loss",
    "communication",
    "lab",
    "refrigerator",
    "owner",
    "town",
    "drawer",
    "society",
    "chapter",
    "family",
    "county",
    "secretary",
    "orange",
    "system",
    "data",
    "phone",
    "assumption",
    "property",
    "improvement",
    "elevator",
    "version",
    "topic",
    "marriage",
    "buyer",
    "painting",
    "sample",
    "area",
    "personality",
    "strategy",
    "reaction",
    "city",
    "length",
    "volume",
    "maintenance",
    "responsibility",
    "relationship",
    "database",
    "director",
    "atmosphere",
    "problem",
    "instance",
    "cell",
    "pizza",
    "collection",
    "tennis",
    "advertising",
    "goal",
    "police",
    "television",
    "impression",
    "shirt",
    "steak",
    "statement",
    "mud",
    "concept",
    "night",
    "honey",
    "library",
    "opportunity",
    "combination",
    "intention",
    "thanks",
    "singer",
    "currency",
    "fishing",
    "permission",
    "passenger",
    "physics",
    "committee",
    "art",
    "song",
    "education",
    "recipe",
    "thought",
    "entry",
    "winner",
    "poet",
    "investment",
    "industry",
    "platform",
    "news",
    "presentation",
    "disk",
    "income",
    "customer",
    "leader",
    "independence",
    "breath",
    "analyst",
    "confusion",
    "queen",
    "person",
    "distribution",
    "cabinet",
    "fortune",
    "significance",
    "importance",
    "king",
    "cousin",
    "flight",
    "month",
    "scene",
    "context",
    "hat",
    "world",
    "profession",
    "soup",
    "video",
    "philosophy",
    "ability",
    "power",
    "energy",
    "finding",
    "piano",
    "vehicle",
    "nation",
    "poem",
    "application",
    "anxiety",
    "resource",
    "country",
    "member",
    "effort",
    "politics",
    "arrival",
    "apple",
    "midnight",
    "attention",
    "contract",
    "membership",
    "law",
    "bonus",
    "week",
    "reputation",
    "requirement",
    "decision",
    "beer",
    "aspect",
    "grocery",
    "tongue",
    "pie",
    "newspaper",
    "association",
    "agreement",
    "recording",
    "dealer",
    "variety",
    "introduction",
    "funeral",
    "weakness",
    "transportation",
    "literature",
    "math",
    "truth",
    "region",
    "love",
    "guest",
    "tea",
    "payment",
    "inspector",
    "complaint",
    "republic",
    "height",
    "department",
    "reality",
    "championship",
    "user",
    "meaning",
    "year",
    "policy",
    "assistance",
    "recommendation",
    "inflation",
    "baseball",
    "client",
    "reading",
    "security",
    "product",
    "media",
    "advice",
    "response",
    "magazine",
    "nature",
    "consequence",
    "warning",
    "science",
    "election",
    "tooth",
    "blood",
    "student",
    "foundation",
    "device",
    "son",
    "music",
    "excitement",
    "message",
    "patience",
    "marketing",
    "knowledge",
    "throat",
    "union",
    "friendship",
    "heart",
    "speech",
    "oven",
    "instruction",
    "penalty",
    "quality",
    "extent",
    "relation",
    "departure",
    "menu",
    "mode",
    "salad",
    "reflection",
    "article",
    "protection",
    "preference",
    "development",
    "estate",
    "software",
    "tale",
    "bread",
    "solution",
    "idea",
    "selection",
    "ambition",
    "photo",
    "dinner",
    "pollution",
    "possession",
    "exam",
    "disease",
    "player",
    "connection",
    "population",
    "writer",
    "camera",
    "two",
    "lady",
    "charity",
    "woman",
    "expression",
    "grandmother",
    "surgery",
    "insurance",
    "driver",
    "freedom",
    "outcome",
    "competition",
    "medicine",
    "childhood",
    "performance",
    "basis",
    "assignment",
    "definition",
    "way",
    "professor",
    "housing",
    "climate",
    "disaster",
    "perception",
    "mood",
    "organization",
    "ladder",
    "guitar",
    "initiative",
    "clothes",
    "agency",
    "perspective",
    "actor",
    "accident",
    "depression",
    "story",
    "teaching",
    "boyfriend",
    "presence",
    "church",
    "success",
    "girlfriend",
    "interaction",
    "construction",
    "tension",
    "unit",
    "activity",
    "conversation",
    "setting",
    "mixture",
    "sir",
    "shopping",
    "management",
    "psychology",
    "speaker",
    "signature",
    "comparison",
    "assistant",
    "imagination",
    "uncle",
    "map",
    "sister",
    "bird",
    "session",
    "explanation",
    "movie",
    "quantity",
    "apartment",
    "government",
    "growth",
    "category",
    "obligation",
    "preparation",
    "efficiency",
    "hospital",
    "president",
    "inspection",
    "equipment",
    "road",
    "football",
    "internet",
    "difference",
    "trainer",
    "employee",
    "highway",
    "hall",
    "direction",
    "revenue",
    "river",
    "drawing",
    "stranger",
    "series",
    "university",
    "teacher",
    "alcohol",
    "addition",
    "feedback",
    "appointment",
    "employment",
    "possibility",
    "moment",
    "debt",
    "studio",
    "wealth",
    "gene",
    "chocolate",
    "suggestion",
    "sympathy",
    "people",
    "employer",
    "priority",
    "child",
    "entertainment",
    "hotel",
    "attitude",
    "affair",
    "girl",
    "location",
    "satisfaction",
    "college",
    "opinion",
    "community",
    "desk",
    "dirt",
    "army",
    "cookie",
    "virus",
    "gate",
    "homework",
    "chemistry",
    "cigarette",
    "fact",
    "administration",
    "engineering",
    "bathroom",
    "environment",
    "information",
    "contribution",
    "measurement",
    "food",
    "editor",
    "insect",
    "establishment",
    "difficulty",
    "leadership",
    "death",
    "office",
    "event",
    "proposal",
    "argument",
    "garbage",
    "audience",
    "theory",
    "technology",
    "basket",
    "analysis",
    "reception",
    "hearing",
    "role",
    "judgment",
    "paper",
    "method",
    "manager",
    "restaurant",
    "resolution",
    "emotion",
];


//at the start of the game, pick a word from the list

var wordToGuess = wordList[Math.floor(Math.random() * wordList.length)];
console.log(wordToGuess);

//break the word into an array of its own letters

var lettersToGuess = Array.from(wordToGuess);

//make a div to hold the letters, then make a div for each letter, enter an underscore in the div. then, add event listeners to each div. let the event listen for a key press that is equal to a letter in the array. then, check the letter's index value and change text within the div with that ID to show the letter. 

var letterContainer = document.getElementById("letterbox");

console.log(letterContainer);

var letterDiv;
for (var i=0; i < lettersToGuess.length; i++){
    
    letterDiv = document.createElement("div");
    letterDiv.innerText = "_";
    letterDiv.setAttribute("id", lettersToGuess[i]);
    console.log (letterContainer);
    letterContainer.appendChild(letterDiv);
    letterDiv.addEventListener("keyup", function checkLetter() {
        var userInput = onkeyup.key
        for (var a=0; a < lettersToGuess.length; a++){

            if (userInput === lettersGuessed[o]){
                alert("You already guessed that!")
               
            }

            else if (userInput === lettersToGuess[i]) {
                letterDiv.getElementById(i);
                letterDiv.innerText = userInput;
            }
            
            else {
                lettersGuessed.push(userInput)
                numlives--;
                console.log(lettersGuessed)
            }
            

        }

    });
    };






    

//check user input against current letter



//if user input === letter, advance to next letter, and wait for new input



//else, if user input !== letter, log a miss, lose a life, don't advance, and wait for new input



//if user gets full word complete, show win screen



//if user loses all lives, show loss screen




//win or lose, show a "new game" button