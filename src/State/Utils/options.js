import fs from "fs";

const get_json = () => {
  return JSON.parse(fs.readFileSync(__dirname + "/options.json", "utf8"));
};

const options = get_json();

export const clients = () => {
  return options.map(elm => elm.name);
};

export const systems = client =>
  options.filter(elm => client === elm.name)[0]["system"].map(elm => elm.name);

export const transactions = (client, system) =>
  options
    .filter(elm => client === elm.name)[0]
    ["system"].filter(elm => system === elm.name)[0]["transaction_info"];
