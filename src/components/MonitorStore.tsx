import { useEffect, useState } from 'react'
import { IMonitorItem } from '../interface/IMonitor'
import { MonitorFilters } from './MonitorFilters'
import { MonitorInventory } from './MonitorInventory'
import { NewMonitorForm } from './NewMonitorForm'

type MonitorStoreProps = {
  storeName: string
}

export const MonitorStore: React.FC<MonitorStoreProps> = ({ storeName }) => {

  const [listMonitors, setListMonitors] = useState<IMonitorItem[]>([]);

  const handleAddItem = (newItem:IMonitorItem) => {    
    setListMonitors(previous => [...previous, newItem]);
  }

  const productNumbers = () : string[] => {
      return listMonitors.map(item => item.productNumber);
  }

  // useEffect(() => {
  //   console.log(productNumberArray());
  // },[listMonitors]);


  return (
    <>
      <h1>{storeName}</h1>

      <NewMonitorForm onAddItem={handleAddItem} productNumberArray={productNumbers()}/>
      <MonitorFilters />
      <MonitorInventory list={listMonitors}/>
    </>
  )
}
