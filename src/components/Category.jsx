

export default function Category({category}) {
    const {category_name} = category
  return (
    <div className="flex items-center gap-4 border w-full text-2xl p-3 hover:bg-lime-200
    cursor-pointer">

        <img src="../img/leaf.svg" alt="leaf" className="w-12" />
        <p className="text-2xl font-bold text-gray-700 cursor-pointer truncate">{category_name}</p>
    </div>
  )
}
