// import React, {useState, useCallback} from 'react'
// import {PrimaryButton, TextInput} from "../components/UIkit/index";


// const ProductEdit = () => {
//     const [name,setName] = useState(""),
//           [description,setdescription] = useState(""),
//           [category,setCategory] = useState(""),
//           [gender,setGender] = useState(""),
//           [price,setPrice] = useState("");

//     const inputName = useCallback((event) => {
//         setName(event.target.value)
//     },[setName])

//     const inputDescription = useCallback((event) => {
//         setdescription(event.target.value)
//     },[setdescription])

//     const inputPrice = useCallback((event) => {
//         setPrice(event.target.value)
//     },[setPrice])


//     return(
//         <section>
//             <h2 className={'u-text__headline u-text-center'}>商品の登録・編集</h2>
//             <div className={'c-section-container'}>
//                 <TextInput
//                     fullWidth={true} label={"商品名"} multiline={false} required={true}
//                     rows={1} value={name} type={"text"} onChange={inputName}
//                 />
//                 <TextInput
//                     fullWidth={true} label={"商品説明"} multiline={true} required={true}
//                     rows={5} value={description} type={"text"} onChange={inputDescription}
//                 />
//                 <TextInput
//                     fullWidth={true} label={"価格"} multiline={false} required={true}
//                     rows={1} value={price} type={"number"} onChange={inputPrice}
//                 />
//             </div>
//         </section>
//     )
// }

// export default ProductEdit