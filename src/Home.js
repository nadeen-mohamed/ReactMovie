import hello from './images.png'
function Home(){
   

    return(
        <div className="container text-center mt-5" >
  <h2>HELLO IT'S MOVIE TIME</h2>
       <img src={hello}/>
        </div>
     
    )
}

export default Home;