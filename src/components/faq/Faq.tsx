import { Ask } from "./Ask";

export function Faq() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <header className="flex items-center justify-center mt-20 font-black text-2xl">
          Faq
        </header>
      </div>
      <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
        <Ask
          ask={"What is Lorem Ipsum?"}
          answer={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        />
        <Ask
          ask={"What is Lorem Ipsum?"}
          answer={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        />
        <Ask
          ask={"Where does it come from?"}
          answer={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        />
        <Ask
          ask={"Where can I get some?"}
          answer={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        />
      </div>
    </div>
  );
}
