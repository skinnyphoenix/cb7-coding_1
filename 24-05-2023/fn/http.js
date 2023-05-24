export const GETtodobyuserId = async () => {
  const res = await fetch("https://dummyjson.com/todos/user/2");
  const data = await res.json();
  return data;
};
