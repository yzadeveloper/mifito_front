import jsPDF from 'jspdf';
import useFito from "../hooks/useFito"
import TreatmentProduct from "./TreatmentProduct";

export default function Summary() {

  const {treatment} = useFito();

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Tratamiento", 10, 10);
    doc.setFontSize(12);

    treatment.forEach((product, index) => {
      const y = 30 + index * 20; // Espaciado vertical entre elementos
      doc.text(`Producto: ${product.name_product}`, 10, y);
      doc.text(`Cantidad: ${product.quantity}L`, 10, y + 10);
      // Puedes agregar más información aquí según tus necesidades
    });

    doc.save('tratamiento.pdf'); // Cambia el nombre del archivo según tu preferencia
  };

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-bold mt-4">Tratamiento</h1>
      <hr className="bg-lime-600 mt-2" />

      <p className="text-xl my-5">Aquí puedes ver los productos añadidos al tratamiento.</p>

      <div className="py-10">
        {treatment.length === 0 ? (
          <p className="text-center text-2xl">No hay productos en el tratamiento todavía.</p>

        ) : (
          treatment.map(product =>(
            <TreatmentProduct
              key={product.id_product}
              product={product}
              />
          ))

        )}
      </div>

      <form className="w-full" onSubmit={(e) => { e.preventDefault(); generatePDF(); }}>
        <div className="mt-5">
          <input
            type="submit"
            value="Generar PDF"
            className="bg-lime-600 hover:bg-lime-800 text-white w-full mt-5 p-3 rounded-sm uppercase font-bold cursor-pointer"
          />
        </div>
      </form>
      
    </aside>
  )
}
