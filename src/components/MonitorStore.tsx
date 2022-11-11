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

  const fnAddItem = (newItem:IMonitorItem) => {    
    setListMonitors(previous => [...previous, newItem]);
  }

  const productNumberArray = () => {
    if(listMonitors){
      return listMonitors.map(item => item.productNumber);
    }
  }

  useEffect(() => {
    console.log(productNumberArray());
  },[listMonitors]);


  return (
    <>
      <h1>{storeName}</h1>

      <NewMonitorForm addItem={fnAddItem} productNumberArray={productNumberArray()}/>
      <MonitorFilters />
      <MonitorInventory list={listMonitors}/>
    </>
  )
}
