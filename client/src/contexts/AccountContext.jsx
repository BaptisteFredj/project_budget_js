import { createContext, useState, useContext, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { getAccountsByUserId } from "../services/request";

const AccountContext = createContext();

export default function AccountProvider({ children }) {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState();

  useEffect(() => {
    const fetchedAccounts = async () => {
      const accountList = await getAccountsByUserId();
      setAccounts(accountList);
    };
    fetchedAccounts();
  }, []);

  const memoAccount = useMemo(
    () => ({ accounts, selectedAccount, setSelectedAccount }),
    [accounts, selectedAccount]
  );

  return (
    <AccountContext.Provider value={memoAccount}>
      {children}
    </AccountContext.Provider>
  );
}

AccountProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAccount = () => useContext(AccountContext);
