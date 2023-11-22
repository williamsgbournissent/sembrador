import Image from "next/image";
import About from "@/components/home/About";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <About />
      <section id="prevOrder" className="p-20">
        <h1 className="flex justify-center font-bold">PrevOrder</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi
          perspiciatis quis odio, modi vel aliquid facilis nesciunt amet eos
          nulla placeat quod praesentium similique repellendus fugit fuga
          commodi rerum.
        </p>
        <Image
          src="/download.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </section>
      <section id="map" className="p-20">
        <h1 className="flex justify-center font-bold">Map</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi
          perspiciatis quis odio, modi vel aliquid facilis nesciunt amet eos
          nulla placeat quod praesentium similique repellendus fugit fuga
          commodi rerum.
        </p>
        <Image
          src="/download.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </section>
      <section id="contact" className="p-20">
        <h1 className="flex justify-center font-bold">Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nisi
          perspiciatis quis odio, modi vel aliquid facilis nesciunt amet eos
          nulla placeat quod praesentium similique repellendus fugit fuga
          commodi rerum.
        </p>
        <Image
          src="/download.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </section>
    </div>
  );
};
export default HomePage;
