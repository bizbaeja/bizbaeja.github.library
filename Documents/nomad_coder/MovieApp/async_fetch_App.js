import { useState } from "react";

function  App() {
    const [loading, setLoading] = useState(true);
    //movi
    const [movies, setMovies] = useState([]);
   /*
   useEffece(()=> {
       fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`           
       )
       .then((response) => response.json());
       .then((json) => setMovies(json.data.movies),[]);
       return <div>{Loading ? <h1>Loading...</h1>:null}</div>;
   })
        -> 콘솔로그하면, 시작할때 가져온 데이타는 [] 빈 배열이지만 두번째 부터 온 데이타는, 모든 영화들을 불러온다. 
        이게 (setLoading)발생하고나면,  false로 만들어줘야 한다.(아래 코드로 설명) 
                    .then((json)=>
                    setMovies(json.data.movies);
                    setLoading(false)
                    });
   */
    /** awati-async 노마드코더식 해설
     * 1.fetch ~ url을 괄호로 묶는다.
     * 2.앞에 await 뒤에 .json();을 붙인다.
     *   const getMovies = async () => {
    const response = await fetch(
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
     */
    const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
}
useEffect(() => {
    getMovies();
    }, []);
    return (
    <div>
         {loading ? (
             <h1>Loading...</h1>
             ) : (
                <div>
                {movies.map((movie) => (
                  <div key={movie.id}>
                    <img src={movie.medium_cover_image} />
                    <h2>{movie.title}</h2>
                    <p>{movie.summary}</p>
                    <ul>
                     {/* genres 데이타는 array라서 arr.map() 해준다. */}
                      {movie.genres.map((g) => (
                        <li key={g}>{g}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            
              </div>
            )}
          </div>
        );

export default App;