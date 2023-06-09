const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="my-8 ">
      <h2 className="grid grid-cols-[repeat(3,_1fr);] items-center gap-2 shrink text-4xl capitalize before:block w-full before:h-0.5 before:bg-yellow-400 after:block after:h-0.5 after:bg-yellow-400">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
