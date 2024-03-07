import { PrismaClient } from "@prisma/client";

import AddTodo from "@/components/events/AddTodo";

import Todo from "@/components/events/Todo";

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
const Home = async () => {
  const data = await getData();
    const date = new Date();
    const currentHour = date.getHours();
    let greeting = "Dobrý večer!";
  
    if (currentHour < 12) {
      greeting = "Dobré ráno!";
    } else if (currentHour < 18) {
      greeting = "Dobré odpoledne!";
    }
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-6xl font-extrabold uppercase mb-1">
        To-do list
      </span>
      <h1 className=" text-3xl font-extrabold mb-5">
        <span className="text-green-500 ml-2">
          {greeting}
        </span>
      </h1>

      <div className="flex justify-center flex-col items-center w-[1000px] ">
        <AddTodo />
        <div className=" flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gray-200 text-center">
        <p>Made with ❤️ and ☕ by <a href="https://github.com/honzabehuncik" className="text-green-500 hover:text-green-600 transition duration-300 ease-in-out" target="_blank">Honza Běhunčík</a></p>
      </footer>
    </div>
  );
};

export default Home;
