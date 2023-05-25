export const GETtodobyuserId = async () => {
  try {
    const res = await fetch("https://dummyjson.com/todos/user/5");
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn({
      success: false,
      message: err.message,
    });
  }
};

export const DELETEtodouserbyId = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/todos/user/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn({
      success: false,
      message: err.message,
    });
  }
};
