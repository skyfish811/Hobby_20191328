
function Hobby({name, picture, rating}){
  return( 
  <div>
  <h2>I like {name}</h2>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name} />
  </div>
  );
}

const hobbyLike = [
  {
    id: 1,
    name: 'soccer',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RzUZ6Kkd1hVzfJPp8qnSJwHaEE%26pid%3DApi&f=1',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'basketball',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cHVnGoo0QfDyYgXXqRZ7QAHaF4%26pid%3DApi&f=1',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'baseball',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4_hKQa_QLsUW49Md9oiEFQHaFk%26pid%3DApi&f=1',
    rating: 4.0,
  },
  {
    id: 4,
    name: 'volleyball',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qAZrTjMvxdee81G9aqlphwHaFI%26pid%3DApi&f=1',
    rating: 3.9
  },
  {
    id: 5,
    name: 'handball',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.YpbxajsbfCkLwcKtegHx0QHaE8%26pid%3DApi&f=1',
    rating: 4.3
  }
];


function App() {
  return (
    <div>
      {hobbyLike.map(game => (
      <Hobby key={game.id} name={game.name} picture={game.image} rating={game.rating} />
      ))}
    </div>
  )
}

export default App;
