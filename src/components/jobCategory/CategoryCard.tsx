function CategoryCard({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center gap-2 w-64 border border-picton-blue-400 rounded-lg p-3 cursor-pointer hover:shadow-[0_0_5px_2px_black] my-2 transistion duration-200 ease-in-out hover:shadow-picton-blue-200/50">
      <div className="p-2 rounded-full  bg-picton-blue-400">
        <img className="h-8 w-8" src={`/JobCategories/${name}.png`} alt="" />
      </div>
      <div className="text-xl font-semibold">{name}</div>
      <div className="text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, consectetur.</div>
      <div className="text-picton-blue-400 text-lg">1K+ new job posted</div>
    </div>
  )
}

export default CategoryCard
