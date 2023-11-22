import Image from "next/image";

const About = () => {
  return (
    <section className="bg-gray-100 py-12 mt-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around px-6">
        <div className="lg:w-1/2 lg:mr-10 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            ¿Quiénes somos?
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Somos una empresa dedicada a la elaboración de viandas ricas,
            variadas y saludables utilizando insumos de excelente calidad,
            carnes magras, poca sal y condimentos suaves. Contamos con más de 20
            años de experiencia produciendo viandas con el constante objetivo de
            lograr mejores sabores, comidas más livianas y saludables y precios
            más accesibles.
          </p>
        </div>
        <div className="lg:w-1/2 lg:ml-10 text-center">
          <Image
            src="https://i.pinimg.com/originals/53/f9/51/53f9514a4afc8bdc841a24e1c3f4f0d7.jpg"
            alt="Healthy food"
            width={300}
            height={300}
            priority={true}
            className="rounded-lg shadow-lg mx-auto transition-transform duration-300 transform hover:scale-110 hover:shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
