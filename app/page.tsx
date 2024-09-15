import Header from "@/components/Header";
import Link from "next/link";

const links = [
  { href: "#first", label: "Home" },
  { href: "#first", label: "About" },
  { href: "#first", label: "Some" },
  { href: "#first", label: "Form" },
];

const employees = [
  {
    id: 1,
    fullName: "John Doe",
  },
  {
    id: 2,
    fullName: "John Doe",
  },
  {
    id: 3,
    fullName: "John Doe",
  },
  {
    id: 4,
    fullName: "John Doe",
  },
  {
    id: 5,
    fullName: "John Doe",
  },
  {
    id: 6,
    fullName: "John Doe",
  },
  {
    id: 7,
    fullName: "John Doe",
  },
  {
    id: 8,
    fullName: "John Doe",
  },
];

const Page = () => {
  return (
    <>
      <nav className="w-full h-12 flex flex-row px-12 bg-black items-center justify-between">
        <div className="bg-white w-24 h-1/2"></div>
        <div className="bg-white h-1/2">
          <ul className="flex flex-row justify-between gap-4">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href} className="text-black">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white w-24 h-1/2"></div>
      </nav>
      <main className="my-4 container flex flex-col gap-6">
        <div className="flex flex-row gap-6 h-96 justify-between" id="first">
          <div className="w-2/3 bg-black"></div>
          <div className="w-1/3 bg-black"></div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col gap-4 py-2 w-2/3 bg-black">
            <div className="w-full flex flex-row justify-center">
              <h2 className="text-white ">Teams</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {employees.map(({ id, fullName }) => (
                <div key={id} className="flex flex-col items-center gap-4 ">
                  <div className="rounded-full h-24 w-24 bg-white"></div>
                  <div>
                    <p className="text-white">{fullName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-96 w-full flex flex-col gap-4   ">
          <div className="w-full flex flex-row justify-center ">
            <h2 className="text-black">Form</h2>
          </div>
          <div className="flex flex-row gap-6  h-full">
            <div className=" w-1/3 bg-black"></div>
            <div className=" w-2/3 bg-black"></div>
          </div>
        </div>


        <div className="w-full bg-black flex flex-col gap-4">
          <div className="w-full flex flex-row justify-center p-2">
            <h2 className="text-white">Faq</h2>
          </div>
          <div className="flex flex-col gap-6 items-center p-12">
            <div className="w-full h-12 bg-white"></div>
            <div className="w-full h-12 bg-white"></div>
            <div className="w-full h-12 bg-white"></div>
            <div className="w-full h-12 bg-white"></div>
            <div className="w-full h-12 bg-white"></div>
            <div className="w-full h-12 bg-white"></div>
          </div>
        </div>

        <div className="w-full bg-black flex flex-col gap-4">
          <div className="w-full flex flex-row justify-center p-2">
            <h2 className="text-white">Price</h2>
          </div>
          <div className="flex flex-row justify-center gap-6 p-6">
            <div className="w-1/4 h-96 bg-white"></div>
            <div className="w-1/4 h-96 bg-white"></div>
            <div className="w-1/4 h-96 bg-white"></div>
          </div>
        </div>

        <div className="w-full bg-black flex flex-col gap-4">
          <div className="w-full flex flex-row justify-center p-2">
            <h2 className="text-white">Logos</h2>
          </div>
          <div className="flex flex-row justify-center gap-4 p-2 px-4">
            <div className="h-12 w-1/6 bg-white"></div>
            <div className="h-12 w-1/6 bg-white"></div>
            <div className="h-12 w-1/6 bg-white"></div>
            <div className="h-12 w-1/6 bg-white"></div>
            <div className="h-12 w-1/6 bg-white"></div>
            <div className="h-12 w-1/6 bg-white"></div>
          </div>
        </div>

        <div className="w-full bg-black flex flex-col gap-4">
          <div className="w-full flex flex-row justify-center p-2">
            <h2 className="text-white">Adventages</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 p-12">
            <div className="h-64 w-full bg-white"></div>
            <div className="h-64 w-full bg-white"></div>
            <div className="h-64 w-full bg-white"></div>
            <div className="h-64 w-full bg-white"></div>
            <div className="h-64 w-full bg-white"></div>
            <div className="h-64 w-full bg-white"></div>
          </div>
        </div>

        <div className="w-full bg-black flex flex-col gap-4">
          <div className="w-full flex flex-row justify-center p-2">
            <h2 className="text-white">Reviews</h2>
          </div>
          <div className="grid grid-cols-3 gap-12 p-12">
            <div className="h-64 w-full bg-white"></div>
            <div className="h-64 w-full bg-white"></div>
            <div className="h-64 w-full bg-white"></div>
            <div className="h-64 w-full bg-white"></div>
            <div className="h-64 w-full bg-white"></div>
            <div className="h-64 w-full bg-white"></div>
          </div>
        </div>

        <div className="w-full bg-black flex flex-col gap-4">
          <div className="w-full flex flex-row justify-center p-2">
            <h2 className="text-white">Reviews</h2>
          </div>
          <div className="flex flex-row  gap-12 p-12">
            <div className="h-96 w-full bg-white"></div>
            <div className="h-96 w-full bg-white"></div>
            <div className="h-96 w-full bg-white"></div>
          </div>
        </div>
      </main>
      <footer className="w-full h-96 bg-black">
        <div className="flex justify-center" >
          <h2 className="text-white">footer</h2>
        </div>
      </footer>
    </>
  );
};

export default Page;
