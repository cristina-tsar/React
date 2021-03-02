const starblocks = [
    {
      id: 1,
      name: " GAL GADOT",
      image: "images/GalGadot.png",
      btnlearn: "images/learnmore-btn.png",
      information: "Israeli actress, producer, and model. Miss Israel 2004. The 'biggest Israeli superstar'.",
      fullDescription:""
    },
    {
      id: 2,
      name: "LEONARDO DiCAPRIO",
      image: "images/DiCaprio.png",
      btnlearn: "images/learnmore-btn.png",
      information: " American actor, film producer and environmentalist. As of 2019, his films have grossed US$7.2 billion.",
      fullDescription:""
    },
    {
      id: 3,
      name: " LADY GAGA ",
      image: "images/LadyGaga.png",
      btnlearn: "images/learnmore-btn.png",
      information: "American singer, songwriter and actress. Is one of the world's best-selling music artists.",      
      fullDescription:""
    },
    {
      id: 4,
      name: " BRUNO MARS ",
      image: "images/BrunoMars.png",
      btnlearn: "images/learnmore-btn.png",
      information: " American singer, songwriter, record producer, multi-instrumentalist, and dancer.",
      fullDescription:""
    },
    {
      id: 5,
      name: " ADRIANA LIMA",
      image: "images/lima.png",
      btnlearn: "images/learnmore-btn.png",
      information: " Brazilian model and actress, best known as a VS Angel 1999-18. A spokesmodel for Maybelline cosmetics.",
      fullDescription:""
    }
  ];

  export const getStarblocksObject = array => {
    return array.reduce((obj,starblock) => ({
        ...obj,
        [starblock.id]:starblock
    }),{})
}
  export default starblocks;
  