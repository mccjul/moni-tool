import {
  SET_CLIENT,
  SET_SYSTEM,
  SET_OPTIONS,
  SET_TRANSACTIONS
} from "../Constants";

export const setOptions = options => ({ type: SET_OPTIONS, payload: options });

export const setClient = client => ({ type: SET_CLIENT, payload: client });

export const setSystem = system => ({ type: SET_SYSTEM, payload: system });

export const setTransactions = transactions => ({
  type: SET_TRANSACTIONS,
  payload: transactions
});

export const getOptions = () => {
  return async dispatch => {
    dispatch(setOptions(await getConnectionData()));
  };
};

export const connectSystem = (client, system) => {
  return async dispatch => {
    let transactions = await Connect(client, system);
    await dispatch(setClient(client));
    await dispatch(setSystem(system));
    await dispatch(setTransactions(transactions));
  };
};

export const exeTrans = (client, system, transactions) => {
  return async dispatch => {
    let res = await ExecuteTransactions(client, system, transactions);
    console.log(res);
  };
};

/* FETCHERS */

async function getConnectionData() {
  let res = await fetch("http://localhost:5000/options");
  let json = await res.json();
  return json;
}

async function Connect(client, system) {
  //?client=DollarCity&system=ECC
  let res = await fetch(
    "http://localhost:5000/connect?client=" + client + "&system=" + system
  );
  let json = await res.json();
  return json;
}

async function ExecuteTransactions(client, system, transactions) {
  let res = await fetch(
    "http://localhost:5000/transactions?client=" + client + "&system=" + system,
    {
      body: JSON.stringify(transactions),
      credentials: "same-origin",
      method: "POST",
      mode: "*same-origin"
    }
  );
  let json = await res.json();
  return json;
}
