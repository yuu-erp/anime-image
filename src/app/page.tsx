import Section from "@/components/shared/Section";

async function getData() {
  const res = await fetch("https://api.nekosapi.com/v3/images");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const data = await getData();
  const newData = () => {
    var soLuongMangCon = Math.ceil(data.items.length / 4);
    var mangDaChia = [];

    for (var i = 0; i < soLuongMangCon; i++) {
      var mangCon = data.items.slice(i * 4, (i + 1) * 4);
      mangDaChia.push(mangCon);
    }

    return mangDaChia;
  };
  return (
    <main className="mt-16">
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {newData().map((item: any, index: number) => (
            <div key={index} className="grid gap-4">
              {item.map((item2: any, index: number) => (
                <div>
                  <img
                    className="h-full object-cover max-w-full rounded-lg"
                    src={item2.image_url}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
