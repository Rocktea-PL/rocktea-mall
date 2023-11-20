//import { useStoreContext } from "../Hooks/UserAuthContext";
import DropshipperLayout from "./DropshipperLayout";
import UserLayout from "./UserLayout";
//import GlobalLoader from "../Helpers/Loaders/GlobalLoader";

function Layout({ storeId }) {
  //const [loading, setLoading] = useState(false);

  const getRoles = () => {
    if (storeId) {
      return <DropshipperLayout />;
    } else {
      return <UserLayout />;
    }
  };

  return <main>{getRoles()}</main>;
}

export default Layout;
