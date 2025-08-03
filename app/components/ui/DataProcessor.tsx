import { useEffect, useState } from 'react';
import { createWorker } from '../../../lib/worker';

interface DataItem {
  id: string | number;
  name: string;
}

export function DataProcessor<T extends DataItem>({ data }: { data: T[] }) {
  const [processedData, setProcessedData] = useState<T[]>([]);
  const [isProcessing, setIsProcessing] = useState(true);
  
  useEffect(() => {
    if (data.length === 0) return;
    
    const worker = createWorker();
    
    worker.postMessage({ type: 'processData', data });
    
    worker.addEventListener('message', (e) => {
      if (e.data.type === 'result') {
        setProcessedData(e.data.data);
        setIsProcessing(false);
        worker.terminate();
      }
    });
    
    return () => worker.terminate();
  }, [data]);
  
  if (isProcessing) return <div>Processando dados...</div>;
  
  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}