import "./app.css";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";

console.log(searchImages());

function App() {
  return (
    <div className="App">
      <SearchBar />
      <ImageList />
    </div>
  );
}

export default App;

/* ---
UNSPLASH API :

To authenticate requests in this way, pass your application’s access key via the HTTP Authorization header:

Authorization: Client-ID YOUR_ACCESS_KEY
You can also pass this value using a client_id query parameter:

https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY



🔑 Keys
Application ID
533200
Access Key
ViAE7ThQNzvGcwFLCRh39sCtj3VAD_qFnsvTjxVmgw4

Secret key
y4-G63lo4iKKtQyV0VvgWKRW_iA_h6HN_kADhqdjglc
Note: both your Access Key and Secret Key must remain confidential.


WE NEED TO FIND PHOTOS ONLY FOR WHICH WE CAN USE:
GET: https://api.unsplash.com/search/photos?query=forest
Authorization: Client-ID : ViAE7ThQNzvGcwFLCRh39sCtj3VAD_qFnsvTjxVmgw4

---*/
