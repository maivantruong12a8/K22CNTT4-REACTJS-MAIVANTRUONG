import logo from './logo.svg';
import './App.css';

function mvtApp()  {
  // Lấy dữ liệu từ api
  const [mvtCategories, setmvtCategories] = useState([]);

  const getCategories = async () => {
      const mvtCateResponse = await axios.get("mvtCategory");
      setmvtCategories(mvtCateResponse.data);
  };

  useEffect(() => {
      getCategories();
  }, []);
  return (
    <div className="container border my-3">
      <h1>mai văn trường - Call API</h1>
      <mvtCategoryList rendermvtCategories={mvtCategories} />
    </div>
  );
}

export default mvtApp;
