import React, {useState, useEffect} from 'react'
import Card from './Card'
import "./Home.css"
import MainCard from './MainCard'

const Home = () => {
    const [posts, setPosts] = useState([])
    const [mainCard, setMainCard] = useState([])

    console.log("DATA", posts);

    useEffect(() => {
        fetch("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20")
            .then((response) => {
                if(response.ok){
                    return response.json()
                    
                }
                throw response
                    
            })
            .then((data) => {
                
                setPosts(data.results)
                setMainCard(data.results[0])
            })
            .catch((error) => {
                console.log("ERROR WHILE FETCHING DATA", error.message);
            })
    }, [])
    return (
        <div className="home">

            <MainCard 
            key={mainCard.location?.street.number}
            id = {mainCard.email}
            gender={mainCard.gender}
            email={mainCard.email}
            title={mainCard.name?.title}
            first={mainCard.name?.first}
            last ={mainCard.name?.last}
            city={mainCard.location?.city}
            state={mainCard.location?.state}
            country={mainCard.location?.country}
            postcode={mainCard.location?.postcode}
            image={mainCard.picture?.medium}
            offset={mainCard.location?.timezone?.offset}
            description={mainCard.location?.timezone?.description}
            />
        <div className="home__cards">
        
        
            {posts.map((post) => (
                <Card 
                key={post.location?.street.number}
                id = {post.email}
                gender={post.gender}
                email={post.email}
                title={post.name?.title}
                first={post.name?.first}
                last ={post.name?.last}
                />
            ))}
            </div>
        </div>
    )
}

export default Home
