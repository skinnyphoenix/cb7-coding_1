export const GETtodobyuserId = async () => {
  try {
    const res = await fetch("https://dummyjson.com/todos/user/2");
    const data = await res.json();
    return data;
  } catch (err) {
    alert(err);
  }
};

//TRY DIRETTAMENTE DENTRO LA CALLBACK (NON FUNZIONANTE);

// export const GETtodobyuserId = async () => {
//   fetch("https://dummyjson.com/todos/user/2").then((res) => {
//     try {
//       if (res.status === 200) {
//         const data = res.json();
//         return data;
//       }
//       throw new Error(`Status della risposta ${res.status}`);
//     } catch (err) {
//       alert(err);
//     }
//   });
// };
