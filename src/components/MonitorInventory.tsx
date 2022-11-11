import { useEffect, useState } from "react"
import { IMonitorItem } from "../interface/IMonitor"

type MonitorInventoryProps = {
  list: IMonitorItem[]
}

export const MonitorInventory: React.FC<MonitorInventoryProps> = ({ list }) => {



  return (
    <>
      <br />

      <table border={1} cellPadding='3' style={{ fontSize: 12 }}>
        <thead>
          <tr>
            <th>Product Number</th>
            <th>Brand</th>
            <th>Screen Size</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => 
            <tr>
            <td>{item.productNumber}</td>
            <td>{item.brand}</td>
            <td>{item.screenSize}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
          </tr>)}
          
        </tbody>
      </table>

      <input type='button' value={`Sell P1234 Monitor`} />
    </>
  )
}
