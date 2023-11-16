import { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

const BankDetails = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [selectedBank, setSelectedBank] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [loading, setLoading] = useState(false);
  const [bankList, setBankList] = useState([]);
  const key = import.meta.env.VITE_APP_PAYSTACK_KEY;

  useEffect(() => {
    // Fetch the list of banks when the component mounts
    fetchBankList();
  }, []);
 // console.log(bankList)
  useEffect(() => {
    // Automatically verify account when accountNumber or bankName changes
    if (accountNumber &&selectedBank) {
      handleVerifyAccount();
    }
  }, [accountNumber, selectedBank]);
  const fetchBankList = async () => {
    try {
      const response = await axios.get('https://api.paystack.co/bank', {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });

      const banks = response.data.data.map((bank) => ({
        label: bank.name,
        value: bank.code,
      }));

      setBankList(banks);
    } catch (error) {
      console.error('Error fetching bank list:', error);
    }
  };

  const fetchBankOptions = async (inputValue) => {
    try {
      // You can use the bankList state directly here
      const filteredBanks = bankList.filter((bank) =>
      bank.label.toLowerCase().includes(inputValue.toLowerCase()))
       return filteredBanks;
        
    } catch (error) {
      console.error('Error filtering bank list:', error);
      return [];
    }
  };

  //)
  const handleVerifyAccount = async () => {
    try {
      setLoading(true);

      // Step 1: Get the bank code based on the selected bank
      const bankCode = selectedBank?.value;

      if (bankCode) {
        // Step 2: Verify the account number using Paystack API
        const response = await axios.get(
          `https://api.paystack.co/bank/resolve`,
          {
            params: {
              account_number: accountNumber,
              bank_code: bankCode,
            },
            headers: {
              Authorization: `Bearer ${key}`,
              'Content-Type': 'application/json',
            },
          }
        );

        // Step 3: Extract and set the customer name
        const resolvedAccount = response.data.data;
        setCustomerName(resolvedAccount.account_name);
      }
    } catch (error) {
      console.error('Error verifying account number:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white mt-5 p-4 rounded-md">
      <div className="block gap-x-5 px-5 profile-input">
        <label>
          Account Number:
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </label>

        <label>
          Bank Name:
          <AsyncSelect
            cacheOptions
            defaultOptions ={bankList}
            loadOptions={fetchBankOptions}
            placeholder='Search Bank'
            
            value={selectedBank}
            onChange={(selectedOption) => setSelectedBank(selectedOption)}
          />
        </label>

        {loading ? (
            <div className=''>
                 <Oval
                  height={30}
                  width={30}
                  color="#333"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#000"
                  strokeWidth={7}
                  strokeWidthSecondary={7}
                />
            </div>
        ) :
       
      (customerName && (
          <div>
           <label>Customer Name:</label>
            <p className='-mt-3'>{customerName}</p>
          </div>
        )) }
      </div>
      <button
        className="bg-orange h-12 w-[150px] rounded-md flex items-center justify-center mx-auto"
        onClick={handleVerifyAccount}
        disabled={loading}
      >
        Save Changes
      </button>
    </div>
  );
};

export default BankDetails;




