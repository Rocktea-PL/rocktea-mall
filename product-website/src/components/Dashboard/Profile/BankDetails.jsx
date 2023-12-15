import { useQuery, useMutation, useQueryClient } from "react-query";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

const BankDetails = ({ store }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedBank, setSelectedBank] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const key = import.meta.env.VITE_APP_PAYSTACK_KEY;
  const Base_url = import.meta.env.VITE_BASE_URL;
  const queryClient = useQueryClient();

  //console.log(selectedBank)
  const fetchBankList = async () => {
    try {
      const response = await axios.get("https://api.paystack.co/bank", {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });

      return response.data.data.map((bank) => ({
        label: bank.name,
        value: bank.code,
      }));
    } catch (error) {
      console.error("Error fetching bank list:", error);
      throw new Error("Error fetching bank list");
    }
  };
  const { data: bankList = [] } = useQuery("banks", fetchBankList);
  const fetchBankOptions = async (inputValue) => {
    try {
      const filteredBanks = bankList.filter((bank) =>
        bank.label.toLowerCase().includes(inputValue.toLowerCase()),
      );
      return filteredBanks;
    } catch (error) {
      console.error("Error filtering bank list:", error);
      return [];
    }
  };

  const verifyAccountMutation = useMutation(
    (params) =>
      axios.get(`https://api.paystack.co/bank/resolve`, {
        params,
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: (data) => {
        const resolvedAccount = data.data.data;
        setCustomerName(resolvedAccount.account_name);
        setError(null); // Clear any previous errors
      },
      onError: () => {
        setError("Invalid account or bank information");
      },
    },
  );

  const patchAccountDetailsMutation = useMutation(
    (data) => axios.patch(`${Base_url}/rocktea/wallet/${store?.id}/`, data),
    {
      onSuccess: (data) => {
        // Handle success if needed
        console.log("Account details patched successfully", data);
        toast.success("Bank Details added Successfully");
      },
      onError: (error) => {
        // Handle error if needed
        console.error("Error patching account details:", error);
        toast.error("Error Saving your Bank Details");
      },
    },
  );
  const { data: bankDetails } = useQuery(
    ["accountDetails"],
    async () => {
      const response = await axios.get(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/wallet/${store?.id}/`,
      );
      return response.data;
    },
    {
      enabled: true, // Start the query manually
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        // Handle the retrieved account details
        // For example, set the customer name
        console.log(bankDetails);
        setCustomerName(data.account_name);
        setAccountNumber(data.nuban);
      },
    },
  );

  const handleVerifyAccount = async () => {
    try {
      setLoading(true);

      const bankCode = selectedBank?.value;

      if (bankCode) {
        await verifyAccountMutation.mutateAsync({
          account_number: accountNumber,
          bank_code: bankCode,
        });

        if (!verifyAccountMutation.isError && customerName) {
          // If verification was successful, patch the account details
          await patchAccountDetailsMutation.mutateAsync({
            account_name: customerName,
            nuban: accountNumber,
            bank_code: bankCode,
          });

          // Optional: Refetch other queries if needed
          queryClient.invalidateQueries("otherQueryKey");
        }
      }
    } catch (error) {
      console.error("Error verifying account number:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Automatically verify account when accountNumber or bankName changes
    if (accountNumber && selectedBank) {
      handleVerifyAccount();
    }
  }, [selectedBank]);

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
            defaultOptions={bankList}
            loadOptions={fetchBankOptions}
            placeholder="Search Bank"
            value={selectedBank}
            onChange={(selectedOption) => setSelectedBank(selectedOption)}
          />
        </label>

        {loading ? (
          <div className="">
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
        ) : (
          <>
            {error ? (
              <div className="text-red-500 capitalize -mt-3 mb-5">{error}</div>
            ) : (
              customerName && (
                <div>
                  <label>Customer Name:</label>
                  <p className="-mt-3">{customerName}</p>
                </div>
              )
            )}
          </>
        )}
      </div>
      <button
        className="common h-12 w-[150px] rounded-md flex items-center justify-center mx-auto"
        onClick={handleVerifyAccount}
        disabled={loading}
      >
        Save Changes
      </button>
    </div>
  );
};

export default BankDetails;
