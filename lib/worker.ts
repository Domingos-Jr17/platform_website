export function createWorker() {
  const workerCode = `
    self.addEventListener('message', (e) => {
      const { type, data } = e.data;
      
      if (type === 'processData') {
        // Processamento pesado aqui
        const result = data.map(item => {
          // Operações complexas
          return {
            ...item,
            processed: true
          };
        });
        
        self.postMessage({ type: 'result', data: result });
      }
    });
  `;
  
  const blob = new Blob([workerCode], { type: 'application/javascript' });
  const worker = new Worker(URL.createObjectURL(blob));
  
  return worker;
}