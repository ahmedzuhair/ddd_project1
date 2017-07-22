import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const presidents = [
	  { id: 38, name: 'Gerald Ford', 
		desc: 'Gerald Rudolph Ford Jr. (born Leslie Lynch King Jr.; July 14, 1913 – December 26, 2006) was an American politician who served as the 38th President of the United States from 1974 to 1977, following the resignation of Richard Nixon. Prior to this he served eight months as the 40th Vice President of the United States,',
		picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Gerald_Ford_-_NARA_-_530680.tif/lossy-page1-446px-Gerald_Ford_-_NARA_-_530680.tif.jpg"
	},

	  { id: 39, name: 'Jimmy Carter',
		desc: 'James Earl Carter Jr. (born October 1, 1924) is an American politician who served as the 39th President of the United States from 1977 to 1981. A member of the Democratic Party, he served as the Governor of Georgia prior to his election as president. Carter has remained active in public life during his post-presidency, and in 2002 he was awarded the Nobel Peace Prize for his work with the Carter Center.',
		picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/James_Earl_%22Jimmy%22_Carter_-_NARA_-_558522.tif/lossy-page1-220px-James_Earl_%22Jimmy%22_Carter_-_NARA_-_558522.tif.jpg" 
	},

	  { id: 40, name: 'Ronald Reagan',
	desc:'Ronald Wilson Reagan (/ˈrɒnəld ˈwɪlsən ˈreɪɡən/; February 6, 1911 – June 5, 2004) was an American politician and actor who served as the 40th President of the United States from 1981 to 1989. Before his presidency, he was the 33rd Governor of California, from 1967 to 1975, after a career as a Hollywood actor and union leader.',
	picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Portrait_of_President_Reagan_1981.jpg/800px-Official_Portrait_of_President_Reagan_1981.jpg"
},

	  { id: 41, name: 'George H. W. Bush', 
	desc: 'George Herbert Walker Bush (born June 12, 1924) is an American politician who was the 41st President of the United States from 1989 to 1993 and the 43rd Vice President of the United States from 1981 to 1989. A member of the Republican Party, he was previously a congressman, ambassador, and Director of Central Intelligence.',
	picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/George_H._W._Bush%2C_President_of_the_United_States%2C_1989_official_portrait.jpg/220px-George_H._W._Bush%2C_President_of_the_United_States%2C_1989_official_portrait.jpg"
},

	  { id: 42, name: 'Bill Clinton', 
	desc: 'William Jefferson Clinton (born William Jefferson Blythe III; August 19, 1946) is an American politician who served as the 42nd President of the United States from 1993 to 2001. Prior to the presidency he was the 40th Governor of Arkansas, from 1979 to 1981, and the states 42nd governor, from 1983 to 1992.',
	picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/220px-Bill_Clinton.jpg"
},

	  { id: 43, name: 'George W. Bush', 
	desc: 'George Walker Bush (born July 6, 1946) is an American politician who served as the 43rd President of the United States from 2001 to 2009. He was also the 46th Governor of Texas from 1995 to 2000. After graduating from Yale University in 1968 and Harvard Business School in 1975, he worked in the oil industry.',
	picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/George-W-Bush.jpeg/453px-George-W-Bush.jpeg"
},

	  { id: 44, name: 'Barack Obama',
	desc: 'Barack Hussein Obama was born August 4, 1961) is an American politician who served as the 44th President of the United States from 2009 to 2017. He is the first African American to have served as president. He previously served in the U.S. Senate representing Illinois from 2005 to 2008 and in the Illinois State Senate from 1997 to 2004.',
	picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/BarackObamaportrait.jpg/800px-BarackObamaportrait.jpg"
 },

	  { id: 45, name: 'Donald Trump',
	desc: 'Donald John Trump (born June 14, 1946) is the 45th and current President of the United States, in office since January 20, 2017. Before entering politics, he was a businessman and television personality.',
	picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Donald_Trump_Pentagon_2017.jpg/435px-Donald_Trump_Pentagon_2017.jpg",

 }
    ];
    return {presidents};
  }
}
