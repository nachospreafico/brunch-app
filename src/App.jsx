import "./App.css";
import Hero from "./components/Hero";
import ItemCards from "./components/ItemCards";
import Header from "./components/Header";
import Food from "./components/Food";

function App() {
  const itemsData = [
    {
      id: 1,
      title: "World Famous Avocado Toast",
      image:
        "https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Energy-packed Acai Bowl",
      image:
        "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Waffle Bliss on a Plate",
      image:
        "https://images.pexels.com/photos/221083/pexels-photo-221083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {itemsData.map((elem) => (
          <ItemCards key={elem.id} title={elem.title} image={elem.image} />
        ))}
      </div>
      <Food />
    </>
  );
}

export default App;
