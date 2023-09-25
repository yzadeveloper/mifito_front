import useFito from "../hooks/useFito"


export default function Category({category}) {

    const {handleClickCategory, categoryActive} = useFito();
    const {category_name, id_category} = category
    

    
  return (
    <div className={`${categoryActive.id_category === id_category ? "" : "bg-white"} flex items-center gap-4 border rounded-md w-full text-2xl p-3 hover:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-300 via-white to-violet-300
    cursor-pointer`}>

        <img src="../img/leaf.svg" alt="leaf" className="w-12" />
        <button
          className="text-2xl font-bold text-gray-700 cursor-pointer truncate"
          type="button"
          onClick={() => handleClickCategory(id_category)}
          >
          {category_name}
        </button>
    </div>
  )
}
