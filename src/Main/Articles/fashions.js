
const fashions = [
    {
      id: 1,
      image: "images/sexist.jpg",
      text:"This Activist Was Annoyed By The Sexist Dictionary Definition Of 'Woman'. So She Got It Changed.",
      category:"news",
      fullDescription:""
    },
    {
      id: 2,
      image: "images/CamilleMiceliHome.jpg",
      text:"Inside The Parisian Home Of Louis Vuitton’s Accessories Creative Director Camille Miceli",
      category:"beauty",
      fullDescription:""
    },
    {
      id: 3,
      image: "images/Fendi_KM.jpg",
      text:"Kim Jones Reveals His Deeply Personal Debut Fendi Couture Collection For “Pioneering Women”",
      category:"fashion",
      fullDescription:""
    },
    {
      id: 4,
      image: "images/RichWomen.jpg",
      text: "How To Be “Good With Money” According To 4 Female Financial Experts",
      category:"lifestyle",
      fullDescription:""
    }
];
  export const getFashionsObject = array => {
    return array.reduce((obj,fashion) => ({
        ...obj,
        [fashion.id]:fashion
    }),{})
  }

export default fashions;
  