import cod from "../../assets/project/cod.png"
import emoji from "../../assets/project/emoji.png"
import food from  "../../assets/project/food.png"
import movie from "../../assets/project/movie.jpg"
import rest from  "../../assets/project/rest.jpg"
import solana from "../../assets/project/solana.png"

export const projectsData = [
  // Projelerinizi içeren veri nesnelerini burada tanımlayın
   {
    id: 1, 
    title: "Movie App", 
    description: `I recently developed a movie exploration application using Next.js, Local Storage, and The Movie Database (TMDb) API. This project aims to provide users with a seamless and enjoyable experience while discovering information about their favorite movies.
It is now open source! My bootcamp peers contribute.
`,  
    imageUrl: movie,
    tags: ["Nextjs", "Material UI", "Local Storage", "TMDb API"],
    gitLink:"https://github.com/kadersarikaya/next-movie-app",
    webLink:"https://next-movie-app-henna.vercel.app/",
  },
  { id: 2, 
    title: "Emoji App", 
    description: "I recently crafted an Emoji Explorer App using React, Vite, Bootstrap, and an API. This user-friendly application allows users to seamlessly view, search, and copy emojis for easy integration into their messages and communication.", 
    imageUrl: emoji,
    tags: ["React", "Vite", "Bootstrap", "API"],
    gitLink:"https://github.com/kadersarikaya/react-emoji-api",
    webLink:"https://react-emoji-api.vercel.app/",
  },
  {
    id: 3, 
    title: "Recipe Sharing App", 
    description: `The Recipe Sharing App is a mobile application developed using React Native, CSS, JavaScript, MongoDB, Express, and Node.js. It allows users to share and explore a wide variety of culinary recipes from different cultures and categories. Users can create their own profiles, save and like recipes, leave comments, and follow other users. The app aims to create a community of food enthusiasts and provide a platform for culinary inspiration and learning.
    __Features__
    - User authentication and profile creation
    - Recipe creation and sharing
    - Recipe search and filtering
    - Like, save, and comment on recipes
    - User following and followers
` , 
    imageUrl: food,
    tags: ["React Native", "Typescript", "MongoDB", "Express", "Node.js"],
    gitLink:"https://github.com/kadersarikaya/Social-Recipe-Sharing-App#recipe-sharing-app",
    webLink:"",
  },
  {
    id: 4, 
    title: "REST API", 
    description: `I created a RESTful API using Node.js, Express, and MongoDB, deployed on a server. Users can register and log in with Postman-tested endpoints. The API supports CRUD operations for posts, enabling users to create, read, update, and delete posts. MongoDB stores user details and post data, providing a comprehensive user experience.
    `,  
    imageUrl: rest,
    tags: ["Node.js", "Express", "MongoDB", "Postman"],
    gitLink:"https://github.com/kadersarikaya/graduation-project",
    webLink:"",
  },
  {
    id: 5, 
    title: "Figma to React", 
    description: "I have redesigned the Solana Ecosystem Page using Figma", 
    imageUrl: solana,
    tags: ["Figma", "React", "Sass"],
    gitLink:"https://github.com/kadersarikaya/solana-ecosystem-page-redesign",
    webLink:"https://solana-ecosystem-page-redesign.netlify.app/",
  },
  {
    id: 6,
    title: "Landing page",
    description: `Cards of Dragon is a blockchain-based game. 
    I developed its landing page as a freelancer. 
    `,
    imageUrl: cod,
    tags: ["React", "Typescript", "Framer motion", "Web3"],
    gitLink:"https://github.com/kadersarikaya/cards-of-dragon",
    webLink:"https://cardsofdragon.netlify.app/",
  }
];