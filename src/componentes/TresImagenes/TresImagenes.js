// import React, { useState } from 'react'

// const TresImagenes = () => {
    
//     const imagen ={
//         img1: "http://via.placeholder.com/111x111",
//         img2: "http://via.placeholder.com/222x222",
//         img3: "http://via.placeholder.com/333x333",
//         };
//     const [mostrar, setMostrar] = useState(false);
//     const [boton, setBoton] = useState("Mostrar imagen");
//     let foto="";

// const handleClickButton = () => {
//     setMostrar(!mostrar)
//     foto = imagen.img1;

//     if (boton === "Mostrar imagen"){
//         setBoton("Ocultar imagen")
//     } else if (boton === "Ocultar imagen") {
//         setBoton("Mostrar imagen")
//     }
//     // setImagenes({
//     //     ...imagenes,
//     //     img1: imagen[0]
//     // })
//     // setImagenes("http://via.placeholder.com/111x111")


// }

//   return (
//     <div>
//         <button onClick={handleClickButton} >{boton} 1</button>
//         {/* <button onClick={handleClickButton} >Imagen 2</button>
//         <button onClick={handleClickButton} >Imagen 3</button> */}
//          {
//             mostrar &&
//               <div>
//                 <img src={foto} alt="Foto" />
//               </div>
//           }

//     </div>
//   )
// }

// export default TresImagenes

////////////////////////////////
import React, { useState } from 'react'

const TresImagenes = () => {
    const [mostrar, setMostrar] = useState(false);
    // const [boton, setBoton] = useState("Mostrar imagen");

let fotos = {
    img1: "http://via.placeholder.com/111x111",
    img2: "http://via.placeholder.com/222x222",
    img3: "http://via.placeholder.com/333x333",
    }
const [imagenes,setImagenes] = useState (null);
const handleClickButton = () => {
    setMostrar(true)
    // if (boton === "Mostrar imagen"){
    //     setBoton("Ocultar imagen")
    // } else if (boton === "Ocultar imagen") {
    //     setBoton("Mostrar imagen")
    // }
    setImagenes(fotos.img1)    
}
const handleClickButton2 = () => {
    setMostrar(true)
    // if (boton === "Mostrar imagen"){
    //     setBoton("Ocultar imagen")
    // } else if (boton === "Ocultar imagen") {
    //     setBoton("Mostrar imagen")
    // }
    setImagenes(fotos.img2)    
}
const handleClickButton3 = () => {
    setMostrar(true)
    // if (boton === "Mostrar imagen"){
    //     setBoton("Ocultar imagen")
    // } else if (boton === "Ocultar imagen") {
    //     setBoton("Mostrar imagen")
    // }
    setImagenes(fotos.img3)    
}
  return (
    <div>
        <button onClick={handleClickButton} >Imagen 1</button>
        <button onClick={handleClickButton2} >Imagen 2</button>
        <button onClick={handleClickButton3} >Imagen 3</button>
         {
            mostrar &&
              <div>
                <img src={imagenes} alt="Foto" />
              </div>
          }

    </div>
  )
}

export default TresImagenes
