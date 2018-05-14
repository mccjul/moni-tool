export const helloWorld = async () => {
  let res = await fetch("http://localhost:5000/");
  let json = await res.json();
  return json;
};

export const getConnectionData = async () => {
  let res = await fetch("http://localhost:5000/options");
  let json = await res.json();
  return json;
};
