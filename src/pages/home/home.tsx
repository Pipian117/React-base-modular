import { useNavigate } from "react-router-dom";

const modules = [
  {
    key: "clients",
    title: "CLIENTES",
    desc: "BBLABLABLABLABLABLABLBLABL",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60",
    to: "/clients",
  },
  {
    key: "INVENTARIOS",
    title: "Inventory Management",
    desc: "OLOLOLOLOLOLOLOLOLOLOLOLOLOL",
    img: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=60",
    to: "/inventory",
  },
  {
    key: "suppliers",
    title: "PROVEEDORES",
    desc: "DXDXDXDDXDXDXDXDXDXDXDX",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=60",
    to: "/suppliers",
  },
  {
    key: "production",
    title: "GESTION DE PRODUCCIÓN",
    desc: ":=:==:=:=:0.0.0.=:0.0.=:=:0.0.0.0.0.0.=:=:=:",
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=60",
    to: "/production",
  },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="text-3xl font-bold mb-8">Módulos</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {modules.map((m) => (
            <button
              key={m.key}
              onClick={() => navigate(m.to)}
              className="group text-left bg-transparent border-0"
              aria-label={m.title}
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-gray-100 ring-1 ring-gray-200 group-hover:ring-[#6e519c] transition">
                <img
                  src={m.img}
                  alt={m.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-3 font-medium text-sm leading-snug text-gray-900">
                {m.title}
              </h3>
              <p className="mt-1 text-[13px] text-gray-600">{m.desc}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
