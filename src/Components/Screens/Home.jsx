import Card from "../Card";
import Carousel from "../Carousel";
import Footer from "../Footer";
import Navbar from "../Navbar";


export default function Home() {
  return (
    <div>
      <div><Navbar/></div>
      <div><Carousel/></div>
      <div><Card/></div>
      <div><Footer/></div>
    </div>
  )
}
