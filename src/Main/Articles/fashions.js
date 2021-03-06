
const fashions = [
    {
      id: 1,
      image: "images/sexist.jpg",
      text:"This Activist Was Annoyed By The Sexist Dictionary Definition Of 'Woman'. So She Got It Changed.",
      category:"news",
      fullDescription:'<div class="article">“I’ve been an activist since I was around 20-years-old,” Maria Beatrice Giovanardi, now head of marketing at a non-profit foundation, tells British Vogue. “It’s going to sound cliché but… I’d gone from living in Miami for five years to then living in India, and I was shocked to see the lack of women’s and human rights. I was also shocked by my own level of privilege. I didn’t realise how privileged I was, because I was always around people like me.”Now living in London, Italian-born Giovanardi has been putting her passion for activism and equality to very good use. “I was doing some online research at the start of 2019, looking up synonyms for the word ‘woman’,” she recalls. “That’s when I first read the list of synonyms, like ‘piece’, ‘bint’, ‘baggage’ and ‘bitch’. Basically, around 80 per cent of them were extremely derogatory.” For Giovanardi, the word bitch was the one that irked her most. “I was mad at bitch because I think it can be a trigger for women,” she explains. (Cast your mind back to the Taylor Swift and Kanye West feud, and the pointed, “I made that bitch famous” lyric on his track “Famous”.) “But the other words, I thought: why are they there? A lot of the listed examples of how to use the synonym in a sentence were very sexist, too. I sent it to some friends and fellow activists, and they were also shocked by it.” Oxford Dictionaries’ examples included: “Ms September will embody the professional yet sexy career woman”, and “male fisherfolk who take their catch home for the little woman to gut”.</div>'
    },
    {
      id: 2,
      image: "images/CamilleMiceliHome.jpg",
      text:"Inside The Parisian Home Of Louis Vuitton’s Accessories Creative Director Camille Miceli",
      category:"beauty",
      fullDescription:'<div class="article">“During lockdown, I danced alone a lot,” </br> recalls Camille Miceli, accessories creative director at Louis Vuitton, of the months she spent outside of social exchange. “I love to have friends with me, and not being free to do what I want gets on my nerves very easily.” If she wasn’t dancing with herself, then she was crouching in the one good Wi-Fi spot in a rented house in Cap Ferret, the chic beach town on the west coast of France, where, along with her husband Jérôme, she cobbled together group games of belote (a form of bridge) and Scrabble over Zoom. <p>“My husband and I were playing with two other people. Scrabble was a mess.”</br> Each player had their own IRL board and tiles, to create a consistent game across households. (To the suggestion that there are perfectly serviceable group digital solutions, Miceli admits she is not online much.) </p>The rest of the time she worked to finish up Vuitton’s resort accessories collection. “The DHL guy and I became really good friends,” she says. The break did for Miceli what it did for many creatives.</br> “This collection was better because I wasn’t distracted,” she says. “The colours for the prints came more easily. That’s normally the hardest part, and I usually go back and redo and redo.” Looking around her soaring Haussmannian duplex, near Paris’s Trocadéro. </div>'
    },
    {
      id: 3,
      image: "images/Fendi_KM.jpg",
      text:"Kim Jones Reveals His Deeply Personal Debut Fendi Couture Collection For “Pioneering Women”",
      category:"fashion",
      fullDescription:'<div class="article">Instead of sitting amid the high-vaulted, light-drenched glamour of the Fendi <p> ateliers to talk with Kim Jones about his first collection for the Roman house, we go for a country walk in Sussex on an awfully grey day prior to lockdown, blustery and bleak with thick mists rendering it almost dark in mid-afternoon.</p> We’re a long way from the Italian capital, where scores of seamstresses are in the process of weaving lattices of pearls and ornately embroidering couture gowns for his upcoming debut, but, nonetheless, it soon makes a lovely sort of sense. Jones recently bought a holiday home here, in the quiet village of Rodmell – a stone’s throw from the house where he spent much of his upbringing, and a few doors down from Virginia Woolf’s cottage – and he’s brought me here to give me a tour of his childhood. “As a teenager, I spent a lot of time cycling round all these villages,” he smiles, sidestepping a growling tractor. “This first collection feels almost autobiographical. What I’m referencing feels really personal.”<p>While this is Jones’s first womenswear collection, he has stood at the forefront of fashion for more than a decade: his, thus far, three-year tenure as artistic director of </p>menswear at Dior – where he has translated the feminine romance of the founder’s codes into elegant tailoring and a boldly contemporary sensibility – has already earned him almost every industry award going (alongside a wealth of female fans, from Bella Hadid to Naomi Campbell). </p></div>'
    },
    {
      id: 4,
      image: "images/RichWomen.jpg",
      text: "How To Be “Good With Money” According To 4 Female Financial Experts",
      category:"lifestyle",
      fullDescription:'<div class="article"> <p>More money, more problems. It doesn’t really stack up, does it?</br> The late Notorious B.I.G. apparently felt some pressure as he accumulated one mansion after another, but can it have rivalled that experienced by today’s millennials, for whom getting a foot on the property ladder can feel all but impossible?<br/> While buying a house isn’t everything, having a thorough grasp of your spending habits is certainly a good place to start – and a new year (even with an ongoing pandemic) is a great opportunity to adopt a new monetary mindset generally. To get the ball rolling (and make opening a bank statement a little less daunting), British Vogue asked four female financial experts for tips to help you start saving, stop stressing, and develop a healthy relationship with money.</p> Why we should save more “A great way to think about saving is that it offers three things: security, reward and choices,” Iona Bain, the founder of Young Money Blog, tells Vogue.</br>“It’s safe in the bank and you should get a little reward in the form of interest, which compounds and adds to your balance. But most importantly, it gives you way more choices in the future. People who are weighed down in debt and short-term spending have limited options, but active savers can sleep at night, and live their lives knowing their money is safely tucked away for them to use when they really want or need it. It’s still your money, remember! Just put it to one side to help ‘future’ you.”</div>'
    }
];
  export const getFashionsObject = array => {
    return array.reduce((obj,fashion) => ({
        ...obj,
        [fashion.id]:fashion
    }),{})
  }

export default fashions;
  