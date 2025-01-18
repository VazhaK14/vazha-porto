export default function Card(props: CardProps) {
  return (
    <div className="flex flex-col border-2 border-black dark:border-white max-w-[800px] bg-white rounded-lg  shadow-bold transform transition-all duration-200  hover:shadow-bolder hover:-translate-x-1 hover:-translate-y-1">
      <div className="flex flex-row items-center justify-between dark:bg-neublue bg-[#d12c2c] text-white dark:text-black p-3  rounded-t-md rounded-y-md font-bold font-sans text-lg">
        <p className="mr-8 font-public dark:text-black ">{props.title}</p>
        <div className="flex flex-row space-x-3">
          <div className="w-4 h-4 bg-yellow-400 rounded-full "></div>{" "}
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>{" "}
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 dark:text-white dark:border-white font-public sm:text-sm md:text-lg rounded-y-md rounded-b-md p-3 border-t-2 border-black">
        {props.content}
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  content: string;
}
