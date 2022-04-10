import Head from "next/head";
import HomeContainer from "../containers/home/home";

const Home = () =>{
  return(
    <>
    <Head>
      <title>To do list</title>
    </Head>
    <HomeContainer />
    </>
  )
}

export default Home