import "./widLg.css";

const WidLg = () => {

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}> {type} </button>;
  };
  
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://preview.redd.it/a-portrait-in-ink-any-feedback-is-always-appreciated-v0-lfhf73p8vi5a1.jpeg?width=658&format=pjpg&auto=webp&s=082fffe821781feb6bd81ee3c7028015fa43b27a"
             alt=""
             className="widgetLgImg" />
             <span className="widgetLdName">Sunsan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLdAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type={"Approved"}/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://preview.redd.it/a-portrait-in-ink-any-feedback-is-always-appreciated-v0-lfhf73p8vi5a1.jpeg?width=658&format=pjpg&auto=webp&s=082fffe821781feb6bd81ee3c7028015fa43b27a"
             alt=""
             className="widgetLgImg" />
             <span className="widgetLdName">Sunsan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLdAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type={"Declined"}/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://preview.redd.it/a-portrait-in-ink-any-feedback-is-always-appreciated-v0-lfhf73p8vi5a1.jpeg?width=658&format=pjpg&auto=webp&s=082fffe821781feb6bd81ee3c7028015fa43b27a"
             alt=""
             className="widgetLgImg" />
             <span className="widgetLdName">Sunsan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLdAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type={"Pending"}/></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://preview.redd.it/a-portrait-in-ink-any-feedback-is-always-appreciated-v0-lfhf73p8vi5a1.jpeg?width=658&format=pjpg&auto=webp&s=082fffe821781feb6bd81ee3c7028015fa43b27a"
             alt=""
             className="widgetLgImg" />
             <span className="widgetLdName">Sunsan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLdAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type={"Approved"}/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidLg;