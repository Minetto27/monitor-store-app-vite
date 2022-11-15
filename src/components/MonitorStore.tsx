import { useEffect, useState } from 'react'
import { IMonitorItem } from '../interface/IMonitor'
import { MonitorFilters } from './MonitorFilters'
import { MonitorInventory } from './MonitorInventory'
import { NewMonitorForm } from './NewMonitorForm'

type MonitorStoreProps = {
  storeName: string
}

export const MonitorStore: React.FC<MonitorStoreProps> = ({ storeName }) => {

  const [Monitors, setMonitors] = useState<IMonitorItem[]>([]);

  const handleAddItem = (newItem:IMonitorItem) => {    
    setMonitors(previous => [...previous, newItem]);
  }

  const productNumbers = () : string[] => {
      return Monitors.map(item => item.productNumber);
  }

  return (
    <>
      <h1>{storeName}</h1>

      <NewMonitorForm onAddItem={handleAddItem} productNumberArray={productNumbers()}/>
      <MonitorFilters />
      <MonitorInventory monitors={Monitors}/>
    </>
  )
}
