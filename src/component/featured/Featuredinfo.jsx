import React from 'react'
import "./featureinfo.css";
import {ArrowDownwardOutlined, ArrowUpwardOutlined} from '@mui/icons-material';

const Featured = () => {
  return (
      <div className='featured'>
          <div className="featuredItem">
              <span className="featuredTitle">Revanue</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">
                  -11.4 <ArrowDownwardOutlined className='featuredIcon Negative'/>
                  </span>
              </div>
              <span className="featuredSubtitle">Compared to last Month</span>
          </div>

          <div className="featuredItem">
              <span className="featuredTitle">Sales</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">
                  -1.4 <ArrowDownwardOutlined className='featuredIcon Negative'/>
                  </span>
              </div>
              <span className="featuredSubtitle">Compared to last Month</span>
          </div>

          <div className="featuredItem">
              <span className="featuredTitle">Cost</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">
                  +2.4 <ArrowUpwardOutlined className='featuredIcon'/>
                  </span>
              </div>
              <span className="featuredSubtitle">Compared to last Month</span>
          </div>
      </div>
  )
}

export default Featured;