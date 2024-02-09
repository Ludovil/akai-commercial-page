import hero from "../assets/img/hero-akai.png";

import Mpclive from "../assets/img/mpclive2.png";
import Button from "../components/Button";

function Home() {
  return (
    <section
      className="h-screen flex flex-col border bg-cover bg-center p-12 py-0 "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="border flex flex-col grow justify-center items-center ">
        <img src={Mpclive} alt="" className="h-14 w-auto" />
        <Button text="call to action" />
      </div>
    </section>
  );
}
export default Home;
