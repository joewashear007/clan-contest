// Configuration file, change the contents to your needs. The contents of this
// file are in the public domain.

// The number of rounds can be changed:
//  * add/remove questions in questions_rounds
//  * add/remove rows in answers_rounds
//  * add/remove entries in multiplicator

// The number of answers per question can be changed:
//  * add/remove entries in the correct row of answers_rounds

// The number of questions in the finals can be changed:
//  * add/remove rows in questions_finals
//  * add/remove rows in answers_finals

// The number of valid answers in the finals can be changed:
//  * add/remove entries in the correct row of answers_finals

// questions for rounds
var questions_rounds = [
	'Name something that one can have for breakfast',
	'Name an animal species that is kept as a pet',
	'Name something that sticks to a wall',
	"Name a Bad Job for Someone Who\'s Accident Prone",
	"Name a Garment You\'d Probably Find in the Dressing Room for a Pro Wrestling Event",
	"Name an Article of Clothing You Can\'t Wash in the Wash Machine",
	"Name a Place You Visit Where You Aren't Allowed to Touch Anything",
	"Name a Recreational Activity Traditionally Done in Hot Weather",
	"Name a Public Place Where You're Likely to Catch a Cold or Flu Bug",
	"Name Something People are Often Chased by in Movies",
	"If You Met the Real Life Prince Charming, How Would You Know it was Him?",
	"Name Something that a Man Had Better Not Take Along on His Honeymoon",
	"Name Something a Customer Might do to Annoy a Waitress",
	"When She's Run Out of Money, What Might a Gambler Put on the Table?",
	"Name a Job that Many Celebrities had Before they were Famous",
	"Name a Language that You Often see Restaurant Menus Written in",
	"Other than a Bull, Name a Big Animal You Wouldn't Want in Your China Shop",
	"Name Something People Buy to Show they are Successful",
	"Name a Reason, Other Than Hard Work, That Your Boss Would Give You a Raise",
	"Name Something You Would Hate to Find Under Your Bed",
	"Name Something People do While Riding a Rollercoaster",
	"Name Something People Like Doing when Listening to Music",
	"Name Something a Man Wouldn't Want to Have Happen to Him While He's Giving a Speech",
];

// answers to the questions for rounds
// format: dimension 1 = round, dimension 2 = question, dimension 3 = [answer, points]
var answers_rounds = [
	[
		['Cereals', 49],
		['Coffee', 22],
		['Bread', 15],
		['Tea', 7],
		['Hot chocolate', 4],
		['Fresh fruits', 3]
	],[
		['Dog', 50],
		['Cat', 36],
		['Gold Fish', 7],
		['Parrot', 4],
		['Guinea pig', 3]
	],[
		['Poster', 34],
		['Sticker', 29],
		['Bubble gum', 19],
		['Hot glue', 10]
	],[
		["Driver",33],
		["Construction",20],
		["Police Officer",11],
		["Food Service",10],
		["Glass Maker",9],
		["Window Washer",7],
		["Surgeon",6]
	],[
		["Tights",32],
		["Shorts",17],
		["Mask",15],
		["Robe",9],
		["Belt",8],
		["Cape",8],
		["Leotard",7]
	],[
		["Shoe",29],
		["Bra",21],
		["Hat",16],
		["Coat",13],
		["Sweater",9],
		["Suit",7],
		["Gown",3]
	],[
		["Museum/Gallery",68],
		["Zoo",20],
		["Gentleman\'s Club",5],
		["China Shop",5],
	],[
		["Swimming",44],
		["Baseball",18],
		["Volleyball",17],
		["Surfing",11],
		["Boating",7],
	],[
		["School",41],
		["Hospital",21],
		["Airplane", 10],
		["Doctor\'s Surgery",9],
		["Public Transport",6],
		["Shopping Centre",6],
		["Work",5]
	],[
		["Monsters",37],
		["Cars",22],
		["Cops",19],
		["Bad Guys",10],
		["Dogs",10],
	],[
		["Wears a Crown",38],
		["Rides White Horse",25],
		["Good Looking",14],
		["Magical Kiss",12],
	],[
		["Another Woman",33],
		["Cellphone",17],
		["His Parents",14],
		["Work/Laptop",12],
		["His Best Friend",6],
		["Golf Clubs",5],
		["His Pet",4]
	],[
		["Send Food Back",40],
		["Not Tip",35],
		["Flirt",6],
		["Snap Fingers",5],
		["Spill Drinks",4],
	],[
		["Jewelry", 40],
		["Car Keys", 20],
		["Credit Card", 15],
		["Clothing",10],
		["Deeds to House",5],
	],[
		["Waiter/Waitress",40],
		["Model",20],
		["Cook",15],
		["Washing Cars",15],
	],[
		["English",36],
		["French",22],
		["Spanish",11],
		["Italian",14],
		["Chinese",5],
	],[
		["Elephant",47],
		["Cow",20],
		["Horse", 10],
		["Bear",8],
		["Hippo",4],
		["Rhino",4],
		["Moose",3]
	],[
		["Car",45],
		["House",41],
		["Jewelry",6],
		["Suit",4],
		["Boat",3],
	],[
		["Dating the Boss",54],
		["On Time/Attendance",16],
		["Blackmail",12],
		["Flattery",5],
	],[
		["Monster",43],
		["Snake",16],
		["Food",12],
		["Spider",10],
		["Rodent",8],
		["Dust",4],
		["Person",3]
	],[
		["Scream",43],
		["Hold their arms up",32],
		["Get Sick",13],
		["Laugh",4],
		["Close their Eyes",4],
	],[
		["Cleaning",21],
		["Exercising",18],
		["Studying",18],
		["Gardening",12],
		["Eating",10],
		["Dancing",8],
		["Driving",8]
	],[
		["Fly is Open",40],
		["Burp",20],
		["Get Laughed At",10],
		["Break Wind",10],
		["Get Heckled",10],
		["Stutter",8],
		["Coughing",2]
	]
];


// multiplicator for the points gained in a round
// format: indexed by round, value is multiplicator
var multiplicator = [1, 1, 2, 3,1, 1, 2, 3,1, 1, 2, 3,1, 1, 2, 3,1, 1, 2, 3,1, 1, 2];


// questions for finals
var questions_finals = [
	'Name a place where it\'s hot',
	'Name a well known sight in New York',
	'Name something that can be found in a pond',
	'Name something that can be shattered'
];


// answers to the questions for the finals
// format: dimension 1 = question, dimension 2 = answer, dimension 3 = [answer, points]
// must have five questions
var answers_finals = [
	[
		['Sahara', 35],
		['Hawaii', 26],
		['Bahamas', 10],
		['Oven', 10],
		['Sauna', 9]
	],[
		['Statue of Liberty', 30],
		['Empire State Building', 31],
		['Central Park', 26],
		['Brooklyn Bridge', 9],
		['Chinatown', 3]
	],[
		['Water Lily', 37],
		['Carp', 24],
		['Water pump', 19],
		['Fountain', 12],
		['Stones', 8],
	],[
		['Vase', 29],
		['Glass', 28],
		['Economy', 16],
		['Building', 15],
		['Myth', 12],
	]
];


// timer duration for first and second player in finals, given in seconds
var timers = [20, 25];
