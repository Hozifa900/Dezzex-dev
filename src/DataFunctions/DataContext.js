import React, { createContext, useState } from "react";
import App from "../App";
import { User, Traffic, Involovement, Referral, Source } from "./ApiData";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [user, setUser] = useState(User);
  const [traffic, setTraffic] = useState(Traffic);
  const [involovement, setInvolovement] = useState(Involovement);
  const [referral, setReferral] = useState(Referral);
  const [source, setSource] = useState(Source);
  return (
    <DataContext.Provider
      value={[
        user,
        setUser,
        traffic,
        setTraffic,
        involovement,
        setInvolovement,
        referral,
        setReferral,
        source,
        setSource,
      ]}
    >
      <App />
    </DataContext.Provider>
  );
};
