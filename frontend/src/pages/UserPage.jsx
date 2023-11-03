import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
  return (
    <>
    <UserHeader/>  
   
    <UserPost likes={1200} replies={500} postImg={"/laptop.jpg"} postTitle="let's talk about Computer ."/>
    <UserPost likes={200} replies={50} postImg={"/avatar.jpg"} postTitle="this is my Avatar ."/>
    <UserPost likes={100} replies={5000} postImg={"/remise.jpg"} postTitle="take this new Gift."/>
    <UserPost likes={120} replies={5} postImg={"/14.jpg"} postTitle="let's talk about Grafity ."/>
    
    </>
  )
}

export default UserPage