import "./prooduct.css";
import { Link } from "react-router-dom";
import Chart from "../../component/chart/Chart";
import { productData } from "../../dummyData";
import PublishIcon from '@mui/icons-material/Publish';

const Prooduct = () => {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to={"/newProduct"}>
                <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey={"Sales"} title={"Sales Performance"}/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://assets-prd.ignimgs.com/2022/09/12/apple-airpods-pro-2nd-gen-hero-220907-1662579992347-1662989441835.jpg" 
                    alt="" 
                    className="productInfoImg" />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">Yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFromLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder="Apple AirPod"/>
                    <label>In Stock</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="inSrtock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://assets-prd.ignimgs.com/2022/09/12/apple-airpods-pro-2nd-gen-hero-220907-1662579992347-1662989441835.jpg" alt="" className="productUploadImg" />
                        <label for="file">
                            <PublishIcon/>
                        </label>
                        <input type="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Prooduct