//import { useStoreContext } from "../Hooks/UserAuthContext";
import { useStoreContext } from "../Hooks/UserAuthContext";
import DropshipperLayout from "./DropshipperLayout";
import UserLayout from "./UserLayout";
//import GlobalLoader from "../Helpers/Loaders/GlobalLoader";

function Layout({ storeId }) {
  //const [loading, setLoading] = useState(false);
  const { store } = useStoreContext();
  document.body.style.backgroundColor =
    store.theme !== null ? "#" + store.theme : "#f7fafc";

  const getRoles = () => {
    if (storeId) {
      return <DropshipperLayout />;
    } else {
      return <UserLayout />;
    }
  };

  return (
    <main className={`${store.theme && "-mt-[0.8] pt-2"} `}>{getRoles()}</main>
  );
}

export default Layout;
