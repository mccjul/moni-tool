export const helloWorld = async () => {
  let res = await fetch("http://localhost:5000/");
  let json = await res.json();
  return json;
};

export async function getConnectionData() {
  console.log("HEYO");
  let res = await fetch("http://localhost:5000/options");
  console.log(res);
  //let json = await res.json();
  //return json;
}
