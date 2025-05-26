
const postDataResearch = async (union) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/dataResearch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(union),
      });
  
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao enviar dados para o servidor:', error);
      throw error;
    }
};

export default {
    postDataResearch
}